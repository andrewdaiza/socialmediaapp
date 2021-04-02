import React from 'react';

const ShowComment = ({ commentState }) => {
  return (
    <>
      <h3>{commentState.profile.name}</h3>
      <p>{commentState.comment}</p>
    </>
  );
};

export default ShowComment;
