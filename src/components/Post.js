import React from "react";
import LikeComment from "./LikeComment";
import Card from "./UI/Card";

const Post = ({ post, profile, commentUpState, addLike, deletePost }) => {
  return (
    <Card>
      <div class='post-pic-container'>
        <a href={`${profile.link}`}>
          <img
            className='post-profile-pic'
            src={profile.img}
            alt='Profile Photo of the user who created the post'
          />
        </a>
      </div>
      <div className='post-details'>
        {profile.user === "user" && (
          <div className='post-delete'>
            <i onClick={() => deletePost(post.id)} class='far fa-trash-alt'></i>
          </div>
        )}
        <a href={`${profile.link}`}>
          <div className='name'>{profile.name}</div>
          <div className='user-name'>@{profile.user}</div>
        </a>
        <div className='content-text'>{post.post}</div>
        {post.tweetimg && (
          <img className='post-photo' src={post.tweetimg} alt='post photo' />
        )}
        <LikeComment
          post={post}
          addLike={addLike}
          commentUpState={commentUpState}
        />
      </div>
    </Card>
  );
};

export default Post;
