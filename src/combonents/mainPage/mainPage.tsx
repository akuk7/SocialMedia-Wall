import React, { useState } from "react";
import "./mainPage.scss";
import PostSection from "../postSection/postSection";
import Sidebar from "../sideBar/sideBar";
import ChatWindow from "../chatWindow/chatWindow";
import dummyData from "../../assets/data/friends";
import Profile from "../profile/profile";
import profile from "../../assets/data/profile";
import FriendProfile from "../friendProfile/friendProfile";
import profilePhoto from "../../assets/images/profile.jpg";
import { useActiveTab } from "../../contexts/activeTabContext"; // Import the context hook

const MainPage: React.FC = () => {
  const { activeTab, setActiveTab } = useActiveTab(); // Use the context hook
  const [data, setData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);

  const handleFriendSelect = (friendId: number) => {
    setActiveTab("chat"); // Switch to chat tab when a friend is selected
    setSelectedFriend(friendId);
  };

  const friend = dummyData.find((friend) => friend.id === selectedFriend);
  const sortedFriends = [...dummyData].sort((a, b) => {
    const lastMessageA = a.chat.length > 0 ? a.chat[a.chat.length - 1].timestamp.getTime() : 0;
    const lastMessageB = b.chat.length > 0 ? b.chat[b.chat.length - 1].timestamp.getTime() : 0;
    return lastMessageB - lastMessageA; // Sort descending by timestamp
  });

  const filteredFriends = sortedFriends.filter(friend =>
    friend.friendName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-page">
      <Sidebar activeTab={activeTab} onTabClick={setActiveTab} /> {/* Pass setActiveTab directly */}
      <div className="content">
        {activeTab === "home" && <PostSection />}
        {activeTab === "chat" && selectedFriend && (
          <ChatWindow setActiveTab={setActiveTab} friendId={selectedFriend} />
        )}
        {activeTab === "search" && (
          <div className="search-section">
            <h2>Search Section</h2>
            {/* Add search component or functionality here */}
          </div>
        )}
        {activeTab === "add-post" && (
          <div className="add-post-section">
            <h2>Add Post Section</h2>
            {/* Add component for adding a new post */}
          </div>
        )}
        {activeTab === "profile" && (
          <div className="profile-section">
            <Profile user={profile} />
            {/* Add component for displaying user profile */}
          </div>
        )}
        {activeTab === "friend-profile" && (
          <div className="profile-section">
            <FriendProfile user={friend ? friend : null} />
            {/* Add component for displaying user profile */}
          </div>
        )}
      </div>
      <div className="chatbox">
        <div className="chatbox-search-box">
          <input
            className="chatbox-search"
            type="text"
            placeholder="Search your friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="chatbox-friends">
          {filteredFriends.map((friend) => (
            <div
              className="chatbox-friend"
              key={friend.friendName}
              onClick={() => handleFriendSelect(friend.id)}
            >
              <img
                className="chatbox-friend-photo"
                alt=""
                src={friend?.photo || profilePhoto}
              />
              <div className="chatbox-friend-text">
                <div className="chatbox-friend-name">{friend.friendName}</div>
                <div className="chatbox-last-message">
                  {friend.chat.slice(-1)[0].text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
