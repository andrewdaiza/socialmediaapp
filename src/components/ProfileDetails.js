import React from 'react';

const ProfileDetails = ({ profile, param }) => {
  console.log(profile[param].cover);
  return (
    <>
      <div className='profile-container'>
        <img
          className='cover-photo'
          src={profile[param].cover}
          alt='cover photo'
        />
        <div className='profile-container'>
          <img className='profile-photo' src={profile[param].img} />
          <div className='profile-name'>{profile[param].name}</div>
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
