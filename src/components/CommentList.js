import React from 'react';

const ShowComment = ({ commentState, profile }) => {
  return (
    <div className='show-comment-container'>
      <img className='show-comment-photo' src={profile.img} />
      <div className='show-comment-details'>
        <h3 className='show-comment-name'>{profile.name}</h3>
        <p className='show-comment-user'>@{profile.user}</p>
        <p className='show-comment-comment-text'>{commentState.comment}</p>
      </div>
    </div>
  );
};

export default ShowComment;
