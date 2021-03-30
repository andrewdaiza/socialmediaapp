import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Timeline from './Timeline';
import Nav from './Nav';
import Profile from './Profile';
import Post from './Post';
import NewPost from './NewPost';
import Comments from './Comments';

import elon from '../assets/elonprofile.jpg';
import pomp from '../assets/pompprofile.jpg';
import barstool from '../assets/barstoolprofile.jpg';
import wolf from '../assets/wolfprofile.jpg';
import spacemike from '../assets/spacemikeprofile.jpg';
import jupiter from '../assets/jupiter.jpg';
import eloncover from '../assets/eloncover.jpg';
import pompcover from '../assets/pompcover.jpg';
import me from '../assets/meprofile.jpg';

const Home = () => {
  const [commentState, setCommentState] = useState([
    'What a great idea',
    'Oh wow cool',
  ]);

  const [pompPosts, setPompPosts] = useState([
    {
      post: 'You can now buy a Tesla with Bitcoin',
    },
    {
      post:
        'Stock market is not growing exponentially? Don’t worry. Theyre now talking about a $3 trillion infrastructure bill. Bear markets and corrections are outlawed!',
    },
    { post: 'LMAO this can’t be real' },
  ]);

  const [elonPosts, setElonPosts] = useState([
    {
      post: 'You can now buy a Tesla with Bitcoin',
    },
    { post: 'Doge to the Moon!' },
    { post: 'Why are you so dogematic, they ask.' },
  ]);
  const [wolfPosts, setWolfPosts] = useState([
    {
      post:
        'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share',
    },
    { post: 'I think we are about to BULL' },
    { post: 'Bitcoin looking good' },
  ]);
  const [mePosts, setMePosts] = useState([
    { post: 'This is my first post' },
    { post: 'Woah, this is a cool app!' },
  ]);
  const [pompComments, setPompComments] = useState([
    'this is a pomp comment',
    'Oh wow cool',
  ]);
  const [elonComments, setElonComments] = useState([
    'this is an elon comment',
    'Oh wow cool',
  ]);
  const [wolfComments, setWolfComments] = useState([
    'this is a wolf comment',
    'Oh wow cool',
  ]);
  const [meComments, setMeComments] = useState([
    'this is a me comment',
    'Oh wow cool',
  ]);

  const profiles = [
    {
      id: 1,
      name: 'Pomp',
      user: 'pomp',
      img: pomp,
      link: '?user=pomp',
      cover: pompcover,
      posts: pompPosts,
      comments: pompComments,
    },
    {
      id: 2,
      name: 'Elon Musk',
      user: 'elon',
      img: elon,
      cover: eloncover,
      link: '?user=elon',
      posts: elonPosts,
      comments: elonComments,
    },
    {
      id: 3,
      name: 'The Wolf of All Streets',
      user: 'wolf',
      img: wolf,
      cover: '../assets/eloncover.jpg',
      link: '?user=wolf',
      posts: wolfPosts,
      comments: wolfComments,
    },
    {
      id: 4,
      name: 'Me',
      user: 'me',
      img: me,
      cover: '../assets/eloncover.jpg',
      link: '?user=me',
      posts: mePosts,
      comments: meComments,
    },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const [popUpState, setPopUpState] = useState(false);

  const handlePopUp = () => {
    setPopUpState(!popUpState);
  };

  const handlePost = (post) => {
    setMePosts([...mePosts, post]);
  };
  const [commentUpState, setCommentUpState] = useState(false);

  const [clickedUserComment, setClickedUserComment] = useState();

  const handleCommentUpState = (param) => {
    setClickedUserComment(param);
    setCommentUpState(!commentUpState);
  };

  const handleComment = (comment) => {
    setCommentState([...commentState, comment]);
    console.log(profiles);
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
          />

          <Comments
            commentState={commentState}
            commentUpState={commentUpState}
            profiles={profiles}
            addComment={handleComment}
            commentUp={handleCommentUpState}
            clickedUserComment={clickedUserComment}
          />

          <div className='inner-container'>
            <Switch>
              <Route exact path='/'>
                {/* Maps through each profile user and each post within, outputs to post element */}
                {profiles.map((profile) =>
                  profile.posts.map((post) => (
                    <Post
                      profile={profile}
                      post={post}
                      commentUpState={handleCommentUpState}
                    />
                  ))
                )}
              </Route>
              <Route exact path='/profile'>
                <Profile
                  profiles={profiles}
                  param={userParam}
                  commentUpState={handleCommentUpState}
                />
              </Route>
            </Switch>
          </div>
          <div className='profile'>Profile</div>
        </div>
      </Router>
    </>
  );
};

export default Home;
