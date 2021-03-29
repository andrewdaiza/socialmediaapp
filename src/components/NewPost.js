import React, { useState } from 'react';

const NewPost = ({ addPost, popUp }) => {
  const [name, setName] = useState('Me');
  const [post, setPost] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!post) {
      return;
    }
    addPost({ post });
    setPost('');
    popUp();
  };
  return (
    <div className='post-container pop-out'>
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
    </div>
  );
};

export default NewPost;
