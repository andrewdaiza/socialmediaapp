import React from 'react';

const Timeline = ({ profile, tweet }) => {
  return (
    <div class='tweets'>
      <img
        className='tweet-profile-pic'
        src={tweet.img}
        alt='Profile Picture'
      />
      <div className='tweet-details'>
        <a href={`/profile${tweet.link}`}>
          <div className='tweet-user'>{tweet.name}</div>
        </a>
        <div className='tweet-text'>{tweet.tweet}</div>
        {tweet.tweetimg && (
          <img className='tweet-photo' src={tweet.tweetimg} alt='tweet photo' />
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
