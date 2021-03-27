import React, { useState } from 'react';

const Nav = ({ postPopup }) => {
  const [newPost, setNewPost] = useState(false);

  const handlePost = () => {
    let localPost = !newPost;
    setNewPost(localPost);
  };
  return (
    <div className='nav'>
      <a href='/'>Home</a>
      <a href='/profile'>Profile</a>
      <a href='#' onClick={() => handlePost()}>
        Create Post
      </a>
    </div>
  );
};

export default Nav;
