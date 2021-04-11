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
      {profiles.map(
        (profile) =>
          profile.user === param && (
            <ProfileDetails key={profile.id} profile={profile} />
          )
      )}
      {userPosts.map(
        (post) =>
          post.profile.user === param && (
            <Post
              key={post.id}
              profile={post.profile}
              post={post}
              commentUpState={commentUpState}
              addLike={addLike}
              deletePost={deletePost}
            />
          )
      )}
    </div>
  );
};

export default Profile;
