import React from "react";

const LikeComment = ({ post, commentUpState, addLike }) => {
  return (
    <div className='post-likes'>
      <span onClick={() => addLike(post.id)}>
        {post.liked ? (
          <i className='fas fa-heart'>
            <span className='post-like-count'>{post.likeCount}</span>
          </i>
        ) : (
          <i className='far fa-heart'>
            <span className='post-like-count'>{post.likeCount}</span>
          </i>
        )}
      </span>
      <span className='post-like-text'>Like</span>
      <a href='#' onClick={() => commentUpState(post.id)}>
        <i className='far fa-comment-alt'></i>
      </a>
      <span className='post-like-text'>Comment</span>
    </div>
  );
};

export default LikeComment;
