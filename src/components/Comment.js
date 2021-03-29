import React, { useState } from 'react';

const Comment = ({ commentUp, addComment, clickedUserComment }) => {
  const [name, setName] = useState('Me');
  const [comment, setComment] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    addComment({ comment });
    setComment('');
    commentUp();
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
