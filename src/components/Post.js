import React, { useState } from 'react';

const Post = ({ post, profile, commentUpState, addLike, deletePost }) => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [selectedLike, setSelectedLike] = useState();

  return (
    <div className='post-container'>
      <a href={`/profile${profile.link}`}>
        <img
          className='post-profile-pic'
          src={profile.img}
          alt='Profile Picture'
        />
      </a>
      <div className='post-details'>
        {profile.user === 'user' && (
          <div className='post-delete'>
            <i onClick={() => deletePost(post.id)} class='far fa-trash-alt'></i>
          </div>
        )}
        <a href={`/profile${profile.link}`}>
          <div className='post-user'>{profile.name}</div>
        </a>
        <div className='post-text'>{post.post}</div>
        {post.tweetimg && (
          <img className='post-photo' src={post.tweetimg} alt='post photo' />
        )}
        <div className='post-likes'>
          <span onClick={() => addLike(post.id)}>
            {post.liked ? (
              <i class='fas fa-heart'>
                <span className='post-like-count'>{post.likeCount}</span>
              </i>
            ) : (
              <i class='far fa-heart'>
                <span className='post-like-count'>{post.likeCount}</span>
              </i>
            )}
          </span>
          <span className='post-like-text'>Like</span>
          <a onClick={() => commentUpState(post.id)}>
            <i class='far fa-comment-alt'></i>
            <span className='post-like-text'>Comment</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
