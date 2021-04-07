import React, { useState } from 'react';

const Post = ({ post, profile, commentUpState, addLike, likesState }) => {
  const [like, setLike] = useState(true);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = (profileId) => {
    setLike(!like);
    likesState.map((likes) => {
      if (likes.profileId === profile.id) {
        setLikeCount(0);
        addLike({ profileId: profileId, likes: likeCount });
      } else {
        setLikeCount(likeCount + 1);
        addLike({ profileId: profileId, likes: likeCount });
      }
    });
  };
  return (
    <div className='tweets'>
      <div className='tweets-inner'>
        <a href={`/profile${profile.link}`}>
          <img
            className='post-profile-pic'
            src={profile.img}
            alt='Profile Picture'
          />
        </a>
        <div className='post-details'>
          <a href={`/profile${post.link}`}>
            <div className='post-user'>{profile.name}</div>
          </a>
          <div className='post-text'>{post.post}</div>
          {post.tweetimg && (
            <img className='post-photo' src={post.tweetimg} alt='post photo' />
          )}
          <div className='post-likes'>
            <span onClick={() => toggleLike(profile.id)}>
              {like ? (
                <i class='far fa-heart'></i>
              ) : (
                <i class='fas fa-heart'>
                  <span>1</span>
                </i>
              )}
            </span>
            <span>Like</span>
            <a onClick={() => commentUpState(post.commentId)}>
              <i class='far fa-comment-alt'></i>
              <span>Comment</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
