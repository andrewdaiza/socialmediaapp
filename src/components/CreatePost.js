import React from 'react';

import NewPostForm from './CreatePostForm';

const NewPost = ({ addPost, popUp, popUpState, profile }) => {
  return (
    <>
      {popUpState && (
        <>
          <div className='new-post-container pop-out'>
            <NewPostForm addPost={addPost} popUp={popUp} profile={profile} />
          </div>
        </>
      )}
    </>
  );
};

export default NewPost;
