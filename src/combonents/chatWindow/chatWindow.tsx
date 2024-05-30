import React, { useEffect, useState } from "react";
import "./chatWindow.scss";
import dummyData from "../../assets/data/friends";
import profilePhoto from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";

interface ChatMessage {
  id: number;
  text: string;
  user: string;
  timestamp: Date;
}

interface Friend {
  id: number;
  friendName: string;
  photo?: string;
  chat: ChatMessage[];
}

interface ChatWindowProps {
  friendId: number;
  setActiveTab: (tab: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ friendId, setActiveTab }) => {
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [friend, setFriend] = useState<Friend | undefined>(undefined);

  useEffect(() => {
    const currentFriend = dummyData.find((friend) => friend.id === friendId);
    if (currentFriend) {
      setFriend(currentFriend);

      setChatHistory([]);
    } else {
      setFriend(undefined);
    }
  }, [friendId]);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const newMessageObj: ChatMessage = {
        id: chatHistory.length + 1,
        text: newMessage,
        user: "You",
        timestamp: new Date(),
      };

      setChatHistory([...chatHistory, newMessageObj]);
      setNewMessage("");
    }
  };

  const goToProfile = () => {
    setActiveTab("friend-profile");
  };

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div className="chatwindow">
      <div className="chatwindow-header">
        <div className="chatwindow-header-left">
          <img
            alt=""
            className="chatwindow-profile"
            src={friend.photo || profilePhoto}
          />
          <div onClick={goToProfile} className="chatwindow-friend-name">
            {friend.friendName}
          </div>
        </div>
        <div className="chatwindow-header-right">
          <FontAwesomeIcon className="chatwindow-header-icon" icon={faPhone} />
          <FontAwesomeIcon className="chatwindow-header-icon" icon={faVideo} />
        </div>
      </div>
      <div className="chat-messages">
        {friend.chat.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.user === "You" ? "sent" : "received"
            }`}
          >
            <div className="message-text">{message.text}</div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString([], options)}
            </div>
          </div>
        ))}
        {chatHistory.map((message) => (
          <div key={message.id} className="message sent">
            <div className="message-text">{message.text}</div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString([], options)}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <FontAwesomeIcon icon={faPaperPlane} className="message-send-icon" onClick={handleSend}/>
      </div>
    </div>
  );
};

export default ChatWindow;
