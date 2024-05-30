import React from 'react';
import Post from '../post/post';
import './postSection.scss';
import dummyData from '../../assets/data/friends';
import profilePhoto from '../../assets/images/profile.jpg'
import { profile } from 'console';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useTheme } from '../../contexts/themeContext';
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
    friendName:string;
    profile:string;
    

    
  }
interface PostWithFriendId extends  PostProps {
  friendName : string;
  profile:string,
}

const PostSection: React.FC = () => {
  const { isLightMode, toggleTheme } = useTheme();
  const { device } = useSelector((state: RootState) => state.windowSize);
  const allPosts: PostWithFriendId[] = dummyData.reduce<PostWithFriendId[]>((acc, friend) => {
    return acc.concat(
      friend.posts.map(post => ({
        ...post,
        friendName: friend.friendName as string,
        profile: friend.photo||profilePhoto as string, 
      
          
      }))
    );
  }, []);

  
  allPosts.sort((a, b) => (b.postedAt.getTime() - a.postedAt.getTime()));

  return (
    <div className={`post-section ${device} ${isLightMode ? 'light' : ''}`}>
      {allPosts.map(post => (
        <Post
         profile={post.profile}
          friendName={post.friendName}
          photos={post.photos}
          message={post.message}
          likes={post.likes}
          comments={post.comments}
          postedAt={post.postedAt}
          
          
          
        />
      ))}
    </div>
  );
};

export default PostSection;
