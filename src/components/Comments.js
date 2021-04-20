import React from 'react';

import Comment from './Comment';
import ShowComment from './CommentList';

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
            <Comment
              commentUp={commentUp}
              addComment={addComment}
              profiles={profiles}
              selectedComment={selectedComment}
            />

            {commentState.map(
              (c) =>
                c.postId === selectedComment && (
                  <ShowComment
                    key={c.id}
                    commentState={c}
                    profile={c.profile}
                  />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
