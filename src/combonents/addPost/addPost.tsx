import React, { useState } from "react";
import "./addPost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useActiveTab } from "../../contexts/activeTabContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

interface AddPostProps {
  onPostAdded: (post: PostData) => void;
}

interface PostData {
  id: number;
  photos: string[];
  message: string;
  likes: number;
  postedAt: Date;
}

const AddPost: React.FC<AddPostProps> = ({ onPostAdded }) => {
    const { device } = useSelector((state: RootState) => state.windowSize);

  const [photos, setPhotos] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const { activeTab, setActiveTab } = useActiveTab();
  const [fileError, setFileError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos(fileArray);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!photos) {
      setFileError(true);
      return
    }
    if (message===null||message===""||message===undefined) {
      setMessageError(true);
      return
    }

    const newPost: PostData = {
      id: Math.floor(Math.random() * 1000),
      photos: photos,
      message: message,
      likes: 0,
      postedAt: new Date(),
    };

    onPostAdded(newPost);

    setPhotos([]);
    setMessage("");
    setActiveTab("profile");
  };

  return (
    <div className={`add-post ${device}`}>
      <FontAwesomeIcon
        icon={faX}
        className="cross-icon"
        onClick={() => {
          setActiveTab("profile");
        }}
      />
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photos">Photos:</label>
          <input
            type="file"
            id="photos"
            multiple
            onChange={handlePhotoChange}
          />
           <div className={`error-msg ${fileError?`error`:""}`}>No files selected!</div>
          {photos.length > 0 && (
            <div className="preview">
              {photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Preview ${index}`} />
              ))}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleTextChange} />
          <div className={`error-msg ${messageError?`error`:""}`}>Please type the message!</div>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddPost;
