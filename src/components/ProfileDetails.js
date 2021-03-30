import React from 'react';

const ProfileDetails = ({ profile, param }) => {
  return (
    <>
      <div className='profile-container'>
        <img className='cover-photo' src={profile.cover} alt='cover photo' />
        <div className='profile-inner-container'>
          <img className='profile-photo' src={profile.img} />
          <div className='profile-name'>{profile.name}</div>
          <div className='profile-description'>
            Fuel your journey. Motivation, inspiration and resources to get
            ahead in life. DM is open for any questions
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
