import React, { useState } from 'react';

const Post = ({ post, profile, commentUpState }) => {
  const [like, setLike] = useState(true);

  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className='tweets'>
      <div className='tweets-inner'>
        <a href={`/profile${profile.link}`}>
          <img
            className='post-profile-pic'
            src={profile.img}
            alt='Profile Picture'
          />
        </a>
        <div className='post-details'>
          <a href={`/profile${post.link}`}>
            <div className='post-user'>{profile.name}</div>
          </a>
          <div className='post-text'>{post.post}</div>
          {post.tweetimg && (
            <img className='post-photo' src={post.tweetimg} alt='post photo' />
          )}
          <div className='post-likes'>
            <span onClick={() => toggleLike()}>
              {like ? (
                <i class='far fa-heart'></i>
              ) : (
                <i class='fas fa-heart'>
                  <span>1</span>
                </i>
              )}
            </span>
            <span>Like</span>
            <a onClick={() => commentUpState()}>
              <i class='far fa-comment-alt'></i>
              <span>Comment</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
