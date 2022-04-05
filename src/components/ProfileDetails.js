import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <>
      <div className='profile-details-container'>
        <img className='cover-photo' src={profile.cover} alt='cover photo' />
        <div className='profile-inner-container'>
          <img className='profile-photo' src={profile.img} />
          <div className='profile-name'>{profile.name}</div>
          <div className='profile-user'>@{profile.user}</div>
          <div className='profile-description'>{profile.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
