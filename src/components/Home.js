import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Profile from './Profile';
import Post from './Post';
import NewPost from './NewPost';
import Comments from './Comments';
import HomeProfile from './HomeProfile';

import max from '../assets/profileMax.jpg';
import amy from '../assets/profileAmy.jpg';
import sydney from '../assets/profileSydney.jpg';
import ben from '../assets/profileBen.jpg';
import henry from '../assets/profileHenry.jpg';
import mark from '../assets/profileMark.jpg';

import coverMax from '../assets/coverMax.jpg';
import cover1 from '../assets/cover1.jpg';
import cover3 from '../assets/cover3.jpg';
import cover5 from '../assets/cover5.jpg';
import cover6 from '../assets/cover6.jpg';
import cover7 from '../assets/cover7.jpg';
import cover8 from '../assets/cover8.jpg';
import cover9 from '../assets/cover9.jpg';

const Home = () => {
  const profiles = [
    {
      id: 1,
      name: 'Max',
      user: 'max',
      img: max,
      link: '?user=max',
      cover: coverMax,
      description: 'Life is about the journey, not the destination',
    },
    {
      id: 2,
      name: 'Sydney',
      user: 'sydney',
      img: sydney,
      cover: cover1,
      link: '?user=sydney',
      description: 'Live life to the fullest, and focus on the positive',
    },
    {
      id: 3,
      name: 'Henry',
      user: 'henry',
      img: henry,
      cover: cover6,
      link: '?user=henry',
      description: 'Professional photographer, designer and video editor',
    },

    {
      id: 4,
      name: 'User',
      user: 'user',
      img: ben,
      cover: cover3,
      link: '?user=user',
      description:
        "The sky is the limit, we don't stop until we achieve our goals",
    },
    {
      id: 5,
      name: 'Amy',
      user: 'amy',
      img: amy,
      cover: cover5,
      link: '?user=amy',
      description: "No matter what happens, I'm living to be happy.",
    },
    {
      id: 6,
      name: 'Mark',
      user: 'mark',
      img: mark,
      cover: cover8,
      link: '?user=mark',
      description: 'Life is about the journey, not the destination',
    },
  ];

  const [userPosts, setUserPosts] = useState([
    {
      id: 100,
      profile: profiles[0],
      liked: false,
      likeCount: 3,
      post: 'Wow, this new social media application is cool!',
    },
    {
      id: 101,
      profile: profiles[4],
      liked: false,
      likeCount: 3,
      post: "Haha idk what to say, how's everybody doing today?",
    },
    {
      id: 102,
      profile: profiles[2],
      liked: false,
      likeCount: 0,
      post:
        'Just got done shooting for my new photoshoot, should be out soon, keep watching for details!',
    },
    {
      id: 103,
      profile: profiles[1],
      liked: false,
      likeCount: 0,
      post: 'I love how simple this application is to use, wow incredible!',
    },

    {
      id: 104,
      profile: profiles[5],
      liked: false,
      likeCount: 0,
      post: 'Hey this is my first post!',
    },
    {
      id: 105,
      profile: profiles[0],
      liked: false,
      likeCount: 0,
      post: "How is everyone's day going?",
    },

    {
      id: 106,
      profile: profiles[1],
      liked: false,
      likeCount: 0,
      post: "I'm about to go out for a run!",
    },
    {
      id: 107,
      profile: profiles[3],
      liked: false,
      likeCount: 0,
      post: 'This is my first post',
    },
    {
      id: 108,
      profile: profiles[3],
      liked: false,
      likeCount: 0,
      post: 'Woah, this is a cool app!',
    },
  ]);

  const [commentState, setCommentState] = useState([
    {
      id: 1001,
      postId: 100,
      profile: profiles[1],
      comment: 'I know right!?',
    },
    {
      id: 1002,
      postId: 100,
      profile: profiles[2],
      comment: 'Incredible!',
    },
    {
      id: 1003,
      postId: 101,
      profile: profiles[5],
      comment: 'Doing great how about you?',
    },
    {
      id: 1004,
      postId: 102,
      profile: profiles[4],
      comment: 'Welcome!',
    },
    {
      id: 1005,
      postId: 103,
      profile: profiles[5],
      comment: 'This is epic!',
    },
  ]);

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const handlePost = (post) => {
    setUserPosts([...userPosts, post]);
  };

  const handleDeletePost = (id) => {
    setUserPosts(userPosts.filter((post) => id !== post.id));
  };

  const handleComment = (comment) => {
    setCommentState([...commentState, comment]);
  };

  const [popUpState, setPopUpState] = useState(false);

  const handlePopUp = () => {
    setPopUpState(!popUpState);
  };

  const [selectedComment, setSelectedComment] = useState();

  const [commentUpState, setCommentUpState] = useState(false);

  const handleCommentUpState = (param) => {
    setSelectedComment(param);
    setCommentUpState(!commentUpState);
  };

  const handleLike = (id) => {
    setUserPosts(
      userPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post
      )
    );
  };

  return (
    <>
      <Router>
        <div className='grid-container'>
          <Nav popUp={handlePopUp} />
          <NewPost
            addPost={handlePost}
            popUp={handlePopUp}
            popUpState={popUpState}
            profile={profiles[3]}
          />

          <Comments
            commentState={commentState}
            commentUpState={commentUpState}
            addComment={handleComment}
            commentUp={handleCommentUpState}
            profiles={profiles}
            selectedComment={selectedComment}
          />

          <div className='inner-container'>
            <Switch>
              <Route exact path='/'>
                {/* Maps through each profile user and each post within, outputs to post element */}
                {userPosts.map((post) => (
                  <Post
                    key={post.id}
                    profile={post.profile}
                    post={post}
                    userPosts={userPosts}
                    commentUpState={handleCommentUpState}
                    addLike={handleLike}
                    deletePost={handleDeletePost}
                  />
                ))}
              </Route>
              <Route exact path='/profile'>
                <Profile
                  profiles={profiles}
                  param={userParam}
                  commentUpState={handleCommentUpState}
                  userPosts={userPosts}
                  addLike={handleLike}
                  deletePost={handleDeletePost}
                />
              </Route>
            </Switch>
          </div>
          <div
            className={`home-profile-container ${
              userParam !== null && 'home-profile-none'
            }`}
          >
            <HomeProfile profile={profiles[3]} />
          </div>
        </div>
      </Router>
    </>
  );
};

export default Home;
