import React from 'react';

import Comment from './Comment';
import ShowComment from './ShowComment';

const Comments = ({
  commentState,
  profile,
  commentUp,
  addComment,
  clickedUserComment,
}) => {
  return (
    <div className='comments-container pop-out'>
      <Comment
        commentUp={commentUp}
        addComment={addComment}
        clickedUserComment={clickedUserComment}
      />
      {commentState.map((c) => (
        <ShowComment commentState={c} />
      ))}
    </div>
  );
};

export default Comments;
