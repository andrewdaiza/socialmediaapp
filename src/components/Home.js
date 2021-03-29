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
  const [feedState, setFeedState] = useState([
    { post: 'This is my first post' },
    { post: 'Woah, this is a cool app!' },
  ]);
  const [commentState, setCommentState] = useState([
    { comment: 'What a great idea' },
    { comment: 'Oh wow cool' },
  ]);

  const profile = {
    pomp: {
      name: 'Pomp',
      id: 1,
      img: pomp,
      link: '?user=pomp',
      cover: pompcover,
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
    },
    elon: {
      name: 'Elon Musk',
      id: 2,
      img: elon,
      cover: eloncover,
      link: '?user=elon',
      posts: [
        {
          post: 'You can now buy a Tesla with Bitcoin',
        },
        { post: 'Doge to the Moon!' },
        { post: 'Why are you so dogematic, they ask.' },
      ],
    },
    wolf: {
      name: 'The Wolf of All Streets',
      id: 3,
      img: wolf,
      cover: '../assets/eloncover.jpg',
      link: '?user=wolf',
      posts: [
        {
          post:
            'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share',
        },
        { post: 'I think we are about to BULL' },
        { post: 'Bitcoin looking good' },
      ],
    },
    me: {
      name: 'Me',
      id: 4,
      posts: feedState,
      img: me,
      cover: '../assets/eloncover.jpg',
      link: '?user=me',
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const array = ['pomp', 'elon', 'wolf', 'me'];

  const [popUpState, setPopUpState] = useState(false);

  const handlePopUp = () => {
    setPopUpState(!popUpState);
  };

  const handlePost = (post) => {
    setFeedState([...feedState, post]);
  };
  const [commentUpState, setCommentUpState] = useState(false);

  const [clickedUserComment, setClickedUserComment] = useState();

  const handleCommentUpState = (param) => {
    setClickedUserComment(param);
    setCommentUpState(!commentUpState);
  };

  const handleComment = (comment) => {
    for (const pro in profile) {
      if (pro === clickedUserComment) {
        setCommentState([...commentState, comment]);
      }
    }
  };
  console.log(commentState);

  return (
    <>
      <Router>
        <div className='grid-container'>
          <Nav popUp={handlePopUp} />
          {popUpState ? (
            <>
              {document.body.classList.add('background-grey')}
              <div className='post-background'></div>
              <NewPost addPost={handlePost} popUp={handlePopUp} />
            </>
          ) : (
            document.body.classList.remove('background-grey')
          )}
          {commentUpState ? (
            <>
              {document.body.classList.add('background-grey')}
              <div className='post-background'></div>
              <Comments
                addComment={handleComment}
                commentUp={handleCommentUpState}
                clickedUserComment={clickedUserComment}
              />
            </>
          ) : (
            document.body.classList.remove('background-grey')
          )}

          <div className='inner-container'>
            <Switch>
              <Route exact path='/'>
                {array.map((a) =>
                  profile[a].posts.map((t) => (
                    <Post
                      profile={profile}
                      post={t}
                      param={a}
                      commentUpState={handleCommentUpState}
                    />
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
