import React from "react";
import "./profile.scss"; // Style your profile as per your project structure
import profilePhoto from "../../assets/images/profile.jpg";
interface User {
  id: number;
  friendName: string;
  photo?: string;
  friends?: string[]; // Array of friends, can be empty initially
  posts: {
    id: number;
    photos: string[];
    message: string;
    likes: number;
    comments: { id: number; text: string; user: string }[];
    postedAt: Date;
  }[];
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          className="profile-photo"
          src={user.photo || profilePhoto}
          alt={user.friendName}
        />
        <div className="profile-details">
          <div className="profile-name">{user.friendName}</div>
          <div className="profile-counts">
            <div className="profile-count">
              {user.friends ? `${user.friends.length} friends` : "10 friends"}
            </div>
            <div className="profile-count">{`${user.posts.length} posts`}</div>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        <div className="posts-grid">
          {user.posts.map((post) => (
            <img
              className="post-photo"
              src={
                post.photos.length > 0
                  ? post.photos[0]
                  : "https://via.placeholder.com/150"
              }
              alt="Post"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
