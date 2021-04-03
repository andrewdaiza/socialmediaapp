import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profiles, param, commentUpState, userPosts }) => {
  return (
    <div>
      {profiles.map((profile) =>
        profile.user === param ? <ProfileDetails profile={profile} /> : ''
      )}

      {profiles.map((profile) =>
        userPosts.map((post) =>
          profile.user === param && profile.id === post.profile ? (
            <Post
              key={post.id}
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
