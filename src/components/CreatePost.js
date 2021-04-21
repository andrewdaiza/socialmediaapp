import React from 'react';

import CreatePostForm from './CreatePostForm';

const CreatePost = ({ addPost, popUp, popUpState, profile }) => {
  return (
    <>
      {popUpState && (
        <>
          <div className='new-post-container pop-out'>
            <CreatePostForm addPost={addPost} popUp={popUp} profile={profile} />
          </div>
        </>
      )}
    </>
  );
};

export default CreatePost;
