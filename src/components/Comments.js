import React from 'react';

import Comment from './Comment';
import ShowComment from './ShowComment';

const Comments = ({
  commentState,
  commentUp,
  addComment,
  selectedUser,
  commentUpState,
  profiles,
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
          {profiles.map((profile) =>
            commentState.map(
              (c) =>
                profile.id === c.profile &&
                c.profile === selectedUser.id && (
                  <ShowComment commentState={c} profile={profile} />
                )
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
