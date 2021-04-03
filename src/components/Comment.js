import React, { useState } from 'react';

const Comment = ({ commentUp, addComment, selectedUser }) => {
  const [comment, setComment] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    addComment({ profile: selectedUser.id, comment: comment });
    setComment('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Comment:</h3>
        <textarea
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div>
          <button type='submit'>Comment</button>
        </div>
      </form>
      <a href='#' onClick={() => commentUp()}>
        close
      </a>
    </>
  );
};

export default Comment;
