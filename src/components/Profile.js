import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profile, param }) => {
  console.log(profile[param]);
  return (
    <div>
      <ProfileDetails profile={profile} param={param} />
      {profile[param].posts.map((t) => (
        <Post
          key={profile[param].id}
          profile={profile}
          post={t}
          param={param}
        />
      ))}
    </div>
  );
};

export default Profile;
