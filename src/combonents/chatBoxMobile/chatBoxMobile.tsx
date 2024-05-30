import React, { useState, useEffect } from 'react';
import './chatBoxMobile.scss'; // Import SCSS module for styling
import dummyData from '../../assets/data/friends';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useActiveTab } from '../../contexts/activeTabContext';
import profilePhoto from "../../assets/images/profile.jpg";

const ChatBoxMobile: React.FC = () => {
  const { activeTab, setActiveTab } = useActiveTab(); // Use the context hook
  const [data, setData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFriend, setSelectedFriend] = useState<number>(5);
  const { device } = useSelector((state: RootState) => state.windowSize);

  const sortedFriends = [...dummyData].sort((a, b) => {
    const lastMessageA = a.chat.length > 0 ? new Date(a.chat[a.chat.length - 1].timestamp).getTime() : 0;
    const lastMessageB = b.chat.length > 0 ? new Date(b.chat[b.chat.length - 1].timestamp).getTime() : 0;
    return lastMessageB - lastMessageA; // Sort descending by timestamp
  });

  const filteredFriends = sortedFriends.filter(friend =>
    friend.friendName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProfileMobile = (friendId: number) => {
    setSelectedFriend(friendId);
    setActiveTab('friend-profile');
  };

  const handleFriendSelectMobile = (friendId: number) => {
    setSelectedFriend(friendId);
    setActiveTab("mobile-chatWindow");
  };

  useEffect(() => {
    console.log(`selectedFriend has been updated to ${selectedFriend}`);
  }, [selectedFriend]);

  return (
    <div className={`chatbox-mobile ${device}`}>
      <div className="chatbox-mobile-search-box">
        <input
          className="chatbox-mobile-search"
          type="text"
          placeholder="Search your friends..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="chatbox-mobile-friends">
        {filteredFriends.map((friend) => (
          <div
            className="chatbox-mobile-friend"
            key={friend.friendName}
            onClick={() => handleFriendSelectMobile(friend.id)}
          >
            <img
              className="chatbox-mobile-friend-photo"
              alt=""
              src={friend?.photo || profilePhoto} 
              onClick={() => handleProfileMobile(friend.id)}
            />
            <div className="chatbox-mobile-friend-text">
              <div className="chatbox-mobile-friend-name">{friend.friendName}</div>
              <div className="chatbox-mobile-last-message">
                {friend.chat.length > 0 ? friend.chat.slice(-1)[0].text : 'No messages'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBoxMobile;
