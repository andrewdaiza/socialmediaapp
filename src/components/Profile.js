import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profiles, param, commentUpState }) => {
  return (
    <div>
      {profiles.map((profile) =>
        profile.user === param ? <ProfileDetails profile={profile} /> : ''
      )}

      {profiles.map((profile) =>
        profile.posts.map((post) =>
          profile.user === param ? (
            <Post
              key={profile.id}
              profile={profile}
              post={post}
              commentUpState={commentUpState}
            />
          ) : (
            ''
          )
        )
      )}
    </div>
  );
};

export default Profile;
