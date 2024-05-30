import React, { useState } from "react";
import "./post.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart as faHeartRegular,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import dummyData from "../../assets/data/friends";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
interface Comment {
  id: number;
  text: string;
  user: string;
}

interface PostProps {
  photos: string[];
  message: string;
  likes: number;
  comments: Comment[];
  postedAt: Date;
  friendName: string;
  profile: string;
}
interface Friend {
  id: number;
  friendName: string;
  photo?: string;
}
const Post: React.FC<PostProps> = ({
  photos,
  message,
  likes,
  comments,
  friendName,
  postedAt,
  profile,
}) => {
  const [liked, setLiked] = useState(false);
  const[commentVisible,setCommentVisible]=useState(false)
  const [likeCount, setLikeCount] = useState(likes);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");
  const [friend, setFriend] = useState<Friend | undefined>(undefined);
  const { device } = useSelector((state: RootState) => state.windowSize);

const findFriend=(friendName:string) =>{
  const Friend = dummyData.find((friend) => friend.friendName === friendName);
  
}
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  const handleCommentVisible = () => {
   
    setCommentVisible(!commentVisible);
  };

  const handleComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj: Comment = {
        id: commentList.length + 1,
        text: newComment,
        user: "John Doe", // Replace with actual current user logic
      };
      setCommentList([...commentList, newCommentObj]);
      setNewComment("");
    }
  };
  const formatDate = (date: Date): string => {
    const now = new Date();
    const diffMillis = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMillis / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffYears = Math.floor(diffDays / 365);

    if (diffMinutes < 60) {
      return `${diffMinutes} m`;
    } else if (diffHours < 24) {
      return `${diffHours} h`;
    } else if (diffDays < 7) {
      return `${diffDays} d`;
    } else if (diffWeeks < 52) {
      return `${diffWeeks} w`;
    } else {
      return `${diffYears} y`;
    }
  };

  return (
    <div className={`post ${device}`}>
      <div className="post-header">
        <div className="post-header-left">
          <img alt="" src={profile} className="post-header-profile" />
          <div className="post-user-name">{friendName}</div>
          <div className="post-time">&#8226; {`${formatDate(postedAt)}`}</div>
        </div>
        <FontAwesomeIcon icon={faBars} className="post-header-right" />
      </div>

      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {photos.map((photo, index) => (
            <SwiperSlide className="post-photo" key={index}>
              <img src={photo} className="post-photo" alt={`Post ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
<div className="post-footer">

      <div className="post-actions">
        <FontAwesomeIcon
          icon={liked ? faHeartSolid : faHeartRegular}
          className={`post-actions-icon ${liked ? "liked" : ""}`}
          onClick={handleLike}
        />
        <FontAwesomeIcon
          icon={faComment}
          className="post-actions-icon"
          onClick={handleCommentVisible}
        />
      </div>
      <div className="post-like-count">{`${likeCount} likes`}</div>
      <div className="post-message"><strong>{friendName}:</strong> {message}</div>
</div>

      <div className={`comment-section ${commentVisible ? '' : 'none'}`}>
        <div className="post-comments">
          {commentList.length === 0 && <p>No comments yet.</p>}
          {commentList.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.user}:</strong> {comment.text}
            </div>
          ))}
        </div>
        <div className="comment-input-wrapper">

        <input
          type="text"
          value={newComment}
          className="comment-input"
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <FontAwesomeIcon className="comment-icon"icon={faPaperPlane} onClick={handleComment}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
