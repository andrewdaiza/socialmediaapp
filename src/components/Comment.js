import React, { useState } from 'react';

const Comment = ({
  commentUp,
  addComment,
  profiles,
  profile,
  commentState,
  selectedComment,
}) => {
  const [comment, setComment] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    addComment({
      profile: profiles[3].id,
      commentId: selectedComment,
      comment: comment,
    });
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
