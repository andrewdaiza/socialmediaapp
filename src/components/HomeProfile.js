import React from 'react';

const HomeProfile = ({ profile }) => {
  return (
    <div className='home-profile-inner'>
      <a href='/profile?user=user'>
        <img className='home-profile-img' src={profile.img}></img>
        <div className='home-profile-name'>{profile.name}</div>
        <div className='home-profile-user'>@{profile.user}</div>
      </a>
      <div className='home-profile-description'>{profile.description}</div>
    </div>
  );
};

export default HomeProfile;
