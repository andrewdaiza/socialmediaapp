import React from 'react';

const Tweet = ({ profile, tweet, param }) => {
  return (
    <div className='tweets'>
      <div className='tweets-inner'>
        <a href={`/profile${profile[param].link}`}>
          <img
            className='tweet-profile-pic'
            src={profile[param].img}
            alt='Profile Picture'
          />
        </a>
        <div className='tweet-details'>
          <a href={`/profile${profile[param].link}`}>
            <div className='tweet-user'>{profile[param].name}</div>
          </a>
          <div className='tweet-text'>{tweet.tweet}</div>
          {tweet.tweetimg && (
            <img
              className='tweet-photo'
              src={tweet.tweetimg}
              alt='tweet photo'
            />
          )}
          <div className='tweet-likes'>
            <i class='far fa-comment'></i>
            <i class='far fa-heart'></i>
            <i class='fas fa-retweet'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
