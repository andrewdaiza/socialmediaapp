import React, { useState } from 'react';

const Nav = ({ popUp }) => {
  return (
    <div className='nav'>
      <div className='nav-icons'>
        <a href='/'>
          <i className='fas fa-home'></i>
          <span className='nav-text'>Home</span>
        </a>
        <a href='/profile?user=user'>
          <i className='fas fa-user-alt'></i>
          <span className='nav-text'>Profile</span>
        </a>
        <a href='#' onClick={() => popUp()}>
          <i className='far fa-plus-square'></i>
          <span className='nav-text'>Create Post</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
