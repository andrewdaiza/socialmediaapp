import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profiles, param }) => {
  return (
    <div>
      <ProfileDetails profiles={profiles} />
      {profiles.map((profile) =>
        profile.posts.map((post) =>
          profile.user === param ? (
            <Post key={profile.id} profile={profile} post={post} />
          ) : (
            ''
          )
        )
      )}
    </div>
  );
};

export default Profile;
