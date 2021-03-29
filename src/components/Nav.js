import React, { useState } from 'react';

const Nav = ({ popUp }) => {
  return (
    <div className='nav'>
      <div className='nav-icons'>
        <a href='/'>
          <i class='fas fa-home'></i>
          <span>Home</span>
        </a>
        <a href='/profile?user=me'>
          <i class='fas fa-user-alt'></i>
          <span>Profile</span>
        </a>
        <a href='#' onClick={() => popUp()}>
          <i class='far fa-plus-square'></i>
          <span>Create Post</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
