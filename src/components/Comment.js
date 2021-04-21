import React from 'react';

const Comment = ({ commentState, profile }) => {
  return (
    <div className='show-comment-container'>
      <a href={`${profile.link}`}>
        <img className='show-comment-photo' src={profile.img} />
      </a>
      <div className='show-comment-details'>
        <a href={`${profile.link}`}>
          <h3 className='name'>{profile.name}</h3>
          <p className='user-name'>@{profile.user}</p>
        </a>
        <p className='content-text'>{commentState.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
