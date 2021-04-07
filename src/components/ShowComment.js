import React from 'react';

const ShowComment = ({ commentState, profile }) => {
  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{commentState.comment}</p>
      <p>{commentState.commentId}</p>
    </div>
  );
};

export default ShowComment;
