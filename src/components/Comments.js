import React from 'react';

import Comment from './Comment';

const Comments = ({ commentUp, addComment, clickedUserComment }) => {
  return (
    <div className='comments-container pop-out'>
      <Comment
        commentUp={commentUp}
        addComment={addComment}
        clickedUserComment={clickedUserComment}
      />
    </div>
  );
};

export default Comments;
