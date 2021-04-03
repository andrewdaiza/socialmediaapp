import React from 'react';

const ShowComment = ({ commentState, profile }) => {
  return (
    <>
      <h3>{profile.name}</h3>
      <p>{commentState.comment}</p>
    </>
  );
};

export default ShowComment;
