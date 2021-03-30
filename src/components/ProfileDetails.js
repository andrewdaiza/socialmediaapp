import React from 'react';

const ProfileDetails = ({ profiles, param }) => {
  console.log(profiles.cover);
  return (
    <>
      <div className='profile-container'>
        <img className='cover-photo' src={profiles.cover} alt='cover photo' />
        <div className='profile-inner-container'>
          <img className='profile-photo' src={profiles.img} />
          <div className='profile-name'>{profiles.name}</div>
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
