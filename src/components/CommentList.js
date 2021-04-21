import React from 'react';

const ShowComment = ({ commentState, profile }) => {
  return (
    <div className='show-comment-container'>
      <a href={`${profile.link}`}>
        <img className='show-comment-photo' src={profile.img} />
      </a>
      <div className='show-comment-details'>
        <a href={`${profile.link}`}>
          <h3 className='show-comment-name'>{profile.name}</h3>
          <p className='show-comment-user'>@{profile.user}</p>
        </a>
        <p className='show-comment-comment-text'>{commentState.comment}</p>
      </div>
    </div>
  );
};

export default ShowComment;
