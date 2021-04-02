import React from 'react';

import Comment from './Comment';
import ShowComment from './ShowComment';

const Comments = ({
  commentState,
  commentUp,
  addComment,
  selectedUser,
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
            selectedUser={selectedUser}
          />
          {commentState.map(
            (c) =>
              c.profile.id === selectedUser.id && (
                <ShowComment commentState={c} />
              )
          )}
        </div>
      ) : (
        document.body.classList.remove('background-grey')
      )}
    </>
  );
};

export default Comments;
