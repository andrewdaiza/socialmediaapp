import React, { useState } from 'react';

const NewPostForm = ({ addPost, popUp, profile }) => {
  const [post, setPost] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!post) {
      return;
    }
    addPost({ profile, post });
    setPost('');
    popUp();
  };
  console.log(profile);
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>What is on your mind?</h3>
        <textarea
          type='text'
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <div>
          <button type='submit'>Post</button>
        </div>
      </form>
      <a href='#' onClick={() => popUp()}>
        close
      </a>
    </>
  );
};

export default NewPostForm;
