import React, { useState } from 'react';

const Comment = ({ commentUp, addComment, profiles, selectedComment }) => {
  const [comment, setComment] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    addComment({
      postId: selectedComment,
      profile: profiles[3],
      comment: comment,
    });
    setComment('');
  };
  return (
    <div className='comment-text-area'>
      <a href='#' onClick={() => commentUp()}>
        <i className='fas fa-times'></i>
      </a>
      <form onSubmit={onSubmit}>
        <h3>Comment:</h3>
        <input
          maxLength='100'
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <div>
          <button className='post-button comment-text-button' type='submit'>
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
