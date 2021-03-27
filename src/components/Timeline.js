import React from 'react';

const Timeline = ({ profile, post }) => {
  return (
    <div class='tweets'>
      <img className='tweet-profile-pic' src={post.img} alt='Profile Picture' />
      <div className='tweet-details'>
        <a href={`/profile${post.link}`}>
          <div className='tweet-user'>{post.name}</div>
        </a>
        <div className='tweet-text'>{post.tweet}</div>
        {post.tweetimg && (
          <img className='tweet-photo' src={post.tweetimg} alt='tweet photo' />
        )}
        <div className='tweet-likes'>
          <i class='far fa-comment'></i>
          <i class='far fa-heart'></i>
          <i class='fas fa-retweet'></i>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
