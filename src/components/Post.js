import React, { useState } from 'react';

const Post = ({ profile, post, param }) => {
  const [like, setLike] = useState(true);

  const toggle = () => {
    let localLike = like;
    localLike = !localLike;
    setLike(localLike);
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
          {post.tweetimg && (
            <img className='post-photo' src={post.tweetimg} alt='post photo' />
          )}
          <div className='post-likes'>
            <i class='far fa-comment'></i>
            <span onClick={() => toggle()}>
              {like ? (
                <i class='far fa-heart'></i>
              ) : (
                <i class='fas fa-heart'>1</i>
              )}
            </span>
            <i class='fas fa-retweet'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
