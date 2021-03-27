import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Timeline from './Timeline';
import Nav from './Nav';
import Profile from './Profile';
import Post from './Post';
import NewPost from './NewPost';

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
  const data = [
    { name: 'Pomp', post: 'I love crypto', img: pomp, link: '?user=pomp' },
    {
      name: 'Space Explorer Mike',
      post: 'Jupiter’s south pole, taken by NASAs Juno space probe',
      postimg: jupiter,
      img: spacemike,
      link: '?user=space',
    },
    {
      name: 'Barstool',
      post: 'Post about sports bruh',
      img: barstool,
      link: '?user=bar',
    },
    {
      name: 'Elon Musk',
      post: 'You can now buy a Tesla with Bitcoin',
      img: elon,
      link: '?user=elon',
    },
    {
      name: 'The Wolf of All Streets',
      post:
        'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share.',
      img: wolf,
      link: '?user=wolf',
    },
  ];

  const [feedState, setFeedState] = useState([
    { post: 'This is my first post' },
    { post: 'Woah, this is a cool app!' },
  ]);

  const profile = {
    pomp: {
      name: 'Pomp',
      posts: [
        {
          post: 'You can now buy a Tesla with Bitcoin',
        },
        {
          post:
            'Stock market is not growing exponentially? Don’t worry. Theyre now talking about a $3 trillion infrastructure bill. Bear markets and corrections are outlawed!',
        },
        { post: 'LMAO this can’t be real' },
      ],
      img: pomp,
      link: '?user=pomp',
      cover: pompcover,
    },
    elon: {
      name: 'Elon Musk',
      posts: [
        {
          post: 'You can now buy a Tesla with Bitcoin',
        },
        { post: 'Doge to the Moon!' },
        { post: 'Why are you so dogematic, they ask.' },
      ],
      img: elon,
      cover: eloncover,
      link: '?user=elon',
    },
    wolf: {
      name: 'The Wolf of All Streets',
      posts: [
        {
          post:
            'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share',
        },
        { post: 'I think we are about to BULL' },
        { post: 'Bitcoin looking good' },
      ],
      img: wolf,
      cover: '../assets/eloncover.jpg',
      link: '?user=wolf',
    },
    me: {
      name: 'Me',
      posts: feedState,
      img: me,
      cover: '../assets/eloncover.jpg',
      link: '?user=me',
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const array = ['pomp', 'elon', 'wolf', 'me'];

  const handlePost = (post) => {
    setFeedState([...feedState, post]);
  };

  console.log(feedState);

  return (
    <>
      <Router>
        <div className='grid-container'>
          <Nav />
          {/* <>
            <div className='post-background'></div>
            <NewPost addPost={handlePost} />
          </> */}
          <div className='inner-container'>
            <Switch>
              <Route exact path='/'>
                {array.map((a) =>
                  profile[a].posts.map((t) => (
                    <Post profile={profile} post={t} param={a} />
                  ))
                )}
              </Route>
              <Route exact path='/profile'>
                <Profile profile={profile} param={userParam} />
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
