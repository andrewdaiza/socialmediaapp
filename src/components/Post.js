import React, { useState } from 'react';

const Post = ({ profile, post, param, commentUpState }) => {
  const [like, setLike] = useState(true);

  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className='tweets'>
      <div className='tweets-inner'>
        <a href={`/profile${profile[param].link}`}>
          <img
            className='post-profile-pic'
            src={profile[param].img}
            alt='Profile Picture'
          />
        </a>
        <div className='post-details'>
          <a href={`/profile${profile[param].link}`}>
            <div className='post-user'>{profile[param].name}</div>
          </a>
          <div className='post-text'>{post.post}</div>
          {profile[param].tweetimg && (
            <img
              className='post-photo'
              src={profile[param].tweetimg}
              alt='post photo'
            />
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
            <a onClick={() => commentUpState(param)}>
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
