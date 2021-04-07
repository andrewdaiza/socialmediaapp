import React, { useState } from 'react';

const Post = ({ post, profile, commentUpState, addLike, likesState }) => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [selectedLike, setSelectedLike] = useState();

  // const handleLike = (like) => {
  //   if (like.liked) {
  //     addLike({
  //       postId: post.id,
  //       liked: !like.liked,
  //       likeCount: like.likeCount - 1,
  //     });
  //   } else {
  //     addLike({
  //       postId: post.id,
  //       liked: !like.liked,
  //       likeCount: like.likeCount + 1,
  //     });
  //   }
  //   setSelectedLike(like);
  // };

  // const toggleLike = () => {
  //   setLikeToggle(!likeToggle);
  //   likesState.map((like) => like.postId === post.id && handleLike(like));
  // };

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
          <a href={`/profile${profile.link}`}>
            <div className='post-user'>{profile.name}</div>
          </a>
          <div className='post-text'>{post.post}</div>
          {post.tweetimg && (
            <img className='post-photo' src={post.tweetimg} alt='post photo' />
          )}
          <div className='post-likes'>
            <span onClick={() => addLike(post.id)}>
              {post.liked ? (
                <i class='fas fa-heart'>
                  <span>{post.likeCount}</span>
                </i>
              ) : (
                <i class='far fa-heart'>
                  <span>{post.likeCount}</span>
                </i>
              )}
            </span>
            <span>Like</span>
            <a onClick={() => commentUpState(post.id)}>
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
