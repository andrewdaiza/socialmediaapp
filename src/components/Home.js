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
  const profiles = [
    {
      id: 1,
      name: 'Pomp',
      user: 'pomp',
      img: pomp,
      link: '?user=pomp',
      cover: pompcover,
    },
    {
      id: 2,
      name: 'Elon Musk',
      user: 'elon',
      img: elon,
      cover: eloncover,
      link: '?user=elon',
    },
    {
      id: 3,
      name: 'The Wolf of All Streets',
      user: 'wolf',
      img: wolf,
      cover: '../assets/eloncover.jpg',
      link: '?user=wolf',
    },
    {
      id: 4,
      name: 'Me',
      user: 'me',
      img: me,
      cover: '../assets/eloncover.jpg',
      link: '?user=me',
    },
  ];

  const [userPosts, setUserPosts] = useState([
    {
      profile: profiles[0].id,
      commentId: 100,
      post: 'You can now buy a Tesla with Bitcoin',
    },
    {
      profile: profiles[0].id,
      commentId: 101,
      post:
        'Stock market is not growing exponentially? Don’t worry. Theyre now talking about a $3 trillion infrastructure bill. Bear markets and corrections are outlawed!',
    },
    {
      profile: profiles[0].id,
      commentId: 102,
      post: 'LMAO this can’t be real',
    },
    {
      profile: profiles[1].id,
      commentId: 103,
      post: 'You can now buy a Tesla with Bitcoin',
    },
    { profile: profiles[1].id, commentId: 104, post: 'Doge to the Moon!' },
    {
      profile: profiles[1].id,
      commentId: 105,
      post: 'Why are you so dogematic, they ask.',
    },

    {
      profile: profiles[2].id,
      commentId: 106,
      post:
        'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday. I cant wait to share',
    },
    { profile: profiles[2].id, post: 'I think we are about to BULL' },
    { profile: profiles[2].id, post: 'Bitcoin looking good' },

    { profile: profiles[3].id, post: 'This is my first post' },
    { profile: profiles[3].id, post: 'Woah, this is a cool app!' },
  ]);

  const [commentState, setCommentState] = useState([
    {
      profile: profiles[0].id,
      commentId: 100,
      comment: 'this is a pomp comment',
    },
    {
      profile: profiles[1].id,
      commentId: 101,
      comment: 'this is an elon comment',
    },
    {
      profile: profiles[2].id,
      commentId: 102,
      comment: 'this is a wolf comment',
    },
    {
      profile: profiles[3].id,
      commentId: 103,
      comment: 'this is a me comment',
    },
  ]);

  const [likesState, setLikesState] = useState([{}]);

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');

  const [popUpState, setPopUpState] = useState(false);

  const handlePopUp = () => {
    setPopUpState(!popUpState);
  };

  const handlePost = (post) => {
    setUserPosts([...userPosts, post]);
  };
  const [commentUpState, setCommentUpState] = useState(false);

  const [selectedComment, setSelectedComment] = useState();

  const handleCommentUpState = (param) => {
    setSelectedComment(param);
    setCommentUpState(!commentUpState);
  };

  const handleComment = (comment) => {
    setCommentState([...commentState, comment]);
  };
  const handleLike = (like) => {
    setLikesState([...likesState, like]);
  };
  console.log(commentState);
  return (
    <>
      <Router>
        <div className='grid-container'>
          <Nav popUp={handlePopUp} />
          <NewPost
            addPost={handlePost}
            popUp={handlePopUp}
            popUpState={popUpState}
            profile={profiles[3].id}
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
                {profiles.map((profile) =>
                  userPosts.map(
                    (post) =>
                      profile.id === post.profile && (
                        <Post
                          profile={profile}
                          post={post}
                          userPosts={userPosts}
                          commentUpState={handleCommentUpState}
                          addLike={handleLike}
                          likesState={likesState}
                        />
                      )
                  )
                )}
              </Route>
              <Route exact path='/profile'>
                <Profile
                  profiles={profiles}
                  param={userParam}
                  commentUpState={handleCommentUpState}
                  userPosts={userPosts}
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
