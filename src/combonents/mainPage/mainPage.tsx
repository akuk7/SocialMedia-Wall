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
import AddPost from "../addPost/addPost";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import MobileFooter from "../mobileFooter/mobileFooter";
import ChatBoxMobile from "../chatBoxMobile/chatBoxMobile";
import { useTheme } from "../../contexts/themeContext";

const MainPage: React.FC = () => {
  const { isLightMode, toggleTheme } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab(); // Use the context hook
  const [data, setData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);
  const { device } = useSelector((state: RootState) => state.windowSize);
  const handleFriendSelect = (friendId: number) => {
    setActiveTab("chat");
    setSelectedFriend(friendId);
  };

  const friend = dummyData.find((friend) => friend.id === selectedFriend);
  const sortedFriends = [...dummyData].sort((a, b) => {
    const lastMessageA =
      a.chat.length > 0 ? a.chat[a.chat.length - 1].timestamp.getTime() : 0;
    const lastMessageB =
      b.chat.length > 0 ? b.chat[b.chat.length - 1].timestamp.getTime() : 0;
    return lastMessageB - lastMessageA; // Sort descending by timestamp
  });

  const filteredFriends = sortedFriends.filter((friend) =>
    friend.friendName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const onPostAdded = () => {
    console.log("post added");
  };
  return (
    <div className="main-page">
      {device === "mobile" ? (
        <div className="mobile-footer-wrapper">

        <MobileFooter activeTab={activeTab} onTabClick={setActiveTab} />
        </div>
      ) : (
        <Sidebar activeTab={activeTab} onTabClick={setActiveTab} />
      )}
      <div className={`content ${device}`}>
        {activeTab === "home" && <PostSection />}
        {activeTab === "chat" && selectedFriend && (
          <ChatWindow setActiveTab={setActiveTab} friendId={selectedFriend} />
        )}

        {activeTab === "add-post" && (
          <div className="addpost-wrapper">
            <AddPost onPostAdded={onPostAdded} />
            <Profile user={profile} />
          </div>
        )}
        {activeTab === "profile" && (
          <div className="profile-section">
            <Profile user={profile} />
          </div>
        )}
        {activeTab === "friend-profile" && (
          <div className="profile-section">
            <FriendProfile user={friend ? friend : null} />
          </div>
        )}
        {activeTab === "mobile-chatBox" && <ChatBoxMobile />}
        {activeTab === "mobile-chatWindow" && selectedFriend && (
          <ChatWindow setActiveTab={setActiveTab} friendId={selectedFriend} />
        )}
      </div>
      <div className={`chatbox ${device} ${isLightMode ? 'light' : ''}`}>
        <div className="chatbox-search-box">
          <input
            className={`chatbox-search ${isLightMode ? 'light' : ''}`}
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
