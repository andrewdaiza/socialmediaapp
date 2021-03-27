import React, { useState } from 'react';

const NewPost = ({ addPost }) => {
  const [name, setName] = useState('Me');
  const [post, setPost] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!post) {
      return;
    }
    addPost({ post });
    setPost('');
  };
  return (
    <div className='post-container'>
      <h3>What is on your mind?</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></input>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default NewPost;
