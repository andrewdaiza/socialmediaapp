import React from 'react';

const HomeProfile = ({ profile }) => {
  return (
    <div className='home-profile-inner'>
      <img className='home-profile-img' src={profile.img}></img>
      <div>{profile.name}</div>
      <div>{profile.description}</div>
    </div>
  );
};

export default HomeProfile;
