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
  selectedComment,
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
            profiles={profiles}
            selectedComment={selectedComment}
          />

          {profiles.map((profile) =>
            commentState.map(
              (c) =>
                c.profile === profile.id &&
                c.postId === selectedComment && (
                  <ShowComment commentState={c} profile={profile} />
                )
            )
          )}
        </div>
      ) : (
        document.body.classList.remove('background-grey')
      )}
      {console.log(selectedComment)}
    </>
  );
};

export default Comments;
