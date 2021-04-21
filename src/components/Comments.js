import React from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';

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
          <div className='comments-container-inner'>
            <CommentForm
              commentUp={commentUp}
              addComment={addComment}
              profiles={profiles}
              selectedComment={selectedComment}
            />

            {commentState.map(
              (c) =>
                c.postId === selectedComment && (
                  <Comment key={c.id} commentState={c} profile={c.profile} />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
