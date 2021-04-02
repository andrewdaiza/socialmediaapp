import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({ profiles, param, commentUpState, userPosts }) => {
  return (
    <div>
      {profiles.map((profile) =>
        profile.user === param ? <ProfileDetails profile={profile} /> : ''
      )}

      {userPosts.map((post) =>
        post.profile.user === param ? (
          <Post
            key={post.id}
            profile={post.profile}
            post={post}
            commentUpState={commentUpState}
          />
        ) : (
          ''
        )
      )}
    </div>
  );
};

export default Profile;
