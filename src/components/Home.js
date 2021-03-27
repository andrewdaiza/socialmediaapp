import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Timeline from './Timeline';
import Nav from './Nav';
import Profile from './Profile';
import Tweet from './Tweet';

import elon from '../assets/elonprofile.jpg';
import pomp from '../assets/pompprofile.jpg';
import barstool from '../assets/barstoolprofile.jpg';
import wolf from '../assets/wolfprofile.jpg';
import spacemike from '../assets/spacemikeprofile.jpg';
import jupiter from '../assets/jupiter.jpg';
import eloncover from '../assets/eloncover.jpg';
import pompcover from '../assets/pompcover.jpg';

const Home = () => {
  const data = [
    { name: 'Pomp', tweet: 'I love crypto', img: pomp, link: '?user=pomp' },
    {
      name: 'Space Explorer Mike',
      tweet: 'Jupiter’s south pole, taken by NASAs Juno space probe',
      tweetimg: jupiter,
      img: spacemike,
      link: '?user=space',
    },
    {
      name: 'Barstool',
      tweet: 'Post about sports bruh',
      img: barstool,
      link: '?user=bar',
    },
    {
      name: 'Elon Musk',
      tweet: 'You can now buy a Tesla with Bitcoin',
      img: elon,
      link: '?user=elon',
    },
    {
      name: 'The Wolf of All Streets',
      tweet:
        'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share.',
      img: wolf,
      link: '?user=wolf',
    },
  ];

  const profile = {
    pomp: {
      name: 'Pomp',
      tweets: [
        {
          tweet: 'You can now buy a Tesla with Bitcoin',
        },
        {
          tweet:
            'Stock market is not growing exponentially? Don’t worry. Theyre now talking about a $3 trillion infrastructure bill. Bear markets and corrections are outlawed!',
        },
        { tweet: 'LMAO this can’t be real' },
      ],
      img: pomp,
      link: '?user=pomp',
      cover: pompcover,
    },
    elon: {
      name: 'Elon Musk',
      tweets: [
        {
          tweet: 'You can now buy a Tesla with Bitcoin',
        },
        { tweet: 'Doge to the Moon!' },
        { tweet: 'Why are you so dogematic, they ask.' },
      ],
      img: elon,
      cover: eloncover,
      link: '?user=elon',
    },
    wolf: {
      name: 'The Wolf of All Streets',
      tweets: [
        {
          tweet:
            'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share',
        },
        { tweet: 'I think we are about to BULL' },
        { tweet: 'Bitcoin looking good' },
      ],
      img: wolf,
      cover: '../assets/eloncover.jpg',
      link: '?user=wolf',
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const array = ['pomp', 'elon', 'wolf'];

  return (
    <>
      <Router>
        <div className='grid-container'>
          <Nav />
          <div className='tweets-container'>
            <Switch>
              <Route exact path='/'>
                {array.map((a) =>
                  profile[a].tweets.map((t) => (
                    <Tweet profile={profile} tweet={t} param={a} />
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
