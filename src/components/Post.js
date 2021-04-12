import React from 'react';

const Post = ({ post, profile, commentUpState, addLike, deletePost }) => {
  return (
    <div className='post-container'>
      <a href={`/profile${profile.link}`}>
        <img
          className='post-profile-pic'
          src={profile.img}
          alt='Profile Picture'
        />
      </a>
      <div className='post-details'>
        {profile.user === 'user' && (
          <div className='post-delete'>
            <i onClick={() => deletePost(post.id)} class='far fa-trash-alt'></i>
          </div>
        )}
        <a href={`/profile${profile.link}`}>
          <div className='post-name'>{profile.name}</div>
          <div className='post-user'>@{profile.user}</div>
        </a>
        <div className='post-text'>{post.post}</div>
        {post.tweetimg && (
          <img className='post-photo' src={post.tweetimg} alt='post photo' />
        )}
        <div className='post-likes'>
          <span onClick={() => addLike(post.id)}>
            {post.liked ? (
              <>
                <i className='fas fa-heart'>
                  <span className='post-like-count'>{post.likeCount}</span>
                </i>
              </>
            ) : (
              <>
                <i className='far fa-heart'>
                  <span className='post-like-count'>{post.likeCount}</span>
                </i>
              </>
            )}
          </span>
          <span className='post-like-text'>Like</span>
          <a href='#' onClick={() => commentUpState(post.id)}>
            <i className='far fa-comment-alt'></i>
          </a>
          <span className='post-like-text'>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
