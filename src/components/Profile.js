import React from 'react';

import Post from './Post';
import ProfileDetails from './ProfileDetails';

const Profile = ({
  profiles,
  param,
  commentUpState,
  userPosts,
  addLike,
  deletePost,
}) => {
  return (
    <div className='profile-container'>
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
              addLike={addLike}
              deletePost={deletePost}
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
