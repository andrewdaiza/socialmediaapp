import React from 'react';

import Comment from './Comment';
import ShowComment from './ShowComment';

const Comments = ({
  commentState,
  profile,
  commentUp,
  addComment,
  clickedUserComment,
  commentUpState,
}) => {
  return (
    <>
      {commentUpState ? (
        <div className='comments-container pop-out'>
          {document.body.classList.add('background-grey')}
          <div className='post-background'></div>
          <Comment
            commentUp={commentUp}
            addComment={addComment}
            clickedUserComment={clickedUserComment}
          />
          {commentState.map((c) => (
            <ShowComment commentState={c} />
          ))}
        </div>
      ) : (
        document.body.classList.remove('background-grey')
      )}
    </>
  );
};

export default Comments;
