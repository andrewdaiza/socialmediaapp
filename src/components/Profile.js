import React from 'react';

import Tweet from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profile, param }) => {
  console.log(profile[param]);
  return (
    <div>
      <ProfileDetails profile={profile} param={param} />
      {profile[param].tweets.map((t) => (
        <Tweet profile={profile} tweet={t} param={param} />
      ))}
    </div>
  );
};

export default Profile;
