import React from 'react';

import Comment from './Comment';
import ShowComment from './ShowComment';

const Comments = ({
  commentState,
  commentUp,
  addComment,
  commentUpState,
  profiles,
  selectedComment,
}) => {
  return (
    <>
      {commentUpState && (
        <div className='comments-container pop-out'>
          <Comment
            commentUp={commentUp}
            addComment={addComment}
            profiles={profiles}
            selectedComment={selectedComment}
          />

          {commentState.map(
            (c) =>
              c.postId === selectedComment && (
                <ShowComment key={c.id} commentState={c} profile={c.profile} />
              )
          )}
        </div>
      )}
    </>
  );
};

export default Comments;
