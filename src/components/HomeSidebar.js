import React from 'react';

const HomeSidebar = ({ profile }) => {
  return (
    <div className='home-profile-inner'>
      <a href='?user=user'>
        <img className='home-profile-img' src={profile.img}></img>
        <div className='profile-name'>{profile.name}</div>
        <div className='profile-user'>@{profile.user}</div>
      </a>
      <div className='profile-description'>{profile.description}</div>
    </div>
  );
};

export default HomeSidebar;
