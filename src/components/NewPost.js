import React, { useState } from 'react';

import NewPostForm from './NewPostForm';

const NewPost = ({ addPost, popUp, popUpState, profile }) => {
  return (
    <>
      {popUpState ? (
        <div className='post-container pop-out'>
          {document.body.classList.add('background-grey')}
          <div className='post-background'></div>
          <NewPostForm addPost={addPost} popUp={popUp} profile={profile} />
        </div>
      ) : (
        document.body.classList.remove('background-grey')
      )}
    </>
  );
};

export default NewPost;
