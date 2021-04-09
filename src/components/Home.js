import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Timeline from './Timeline';
import Nav from './Nav';
import Profile from './Profile';
import Post from './Post';
import NewPost from './NewPost';
import Comments from './Comments';
import HomeProfile from './HomeProfile';

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
      description:
        'The sky is the limit, we dont stop until we achieve our goals',
    },
  ];

  const [userPosts, setUserPosts] = useState([
    {
      id: 100,
      profile: profiles[0].id,
      liked: false,
      likeCount: 3,
      post: 'You can now buy a Tesla with Bitcoin',
    },
    {
      id: 101,
      profile: profiles[0].id,
      liked: false,
      likeCount: 0,
      post:
        'Stock market is not growing exponentially? Don’t worry. Theyre now talking about a $3 trillion infrastructure bill.',
    },
    {
      id: 102,
      profile: profiles[0].id,
      liked: false,
      likeCount: 0,
      post: 'LMAO this can’t be real',
    },
    {
      id: 103,
      profile: profiles[1].id,
      liked: false,
      likeCount: 0,
      post: 'You can now buy a Tesla with Bitcoin',
    },
    {
      id: 104,
      profile: profiles[1].id,
      liked: false,
      likeCount: 0,
      post: 'Doge to the Moon!',
    },
    {
      id: 105,
      profile: profiles[1].id,
      liked: false,
      likeCount: 0,
      post: 'Why are you so dogematic, they ask.',
    },

    {
      id: 106,
      profile: profiles[2].id,
      liked: false,
      likeCount: 0,
      post:
        'Just had and absolutely incredible podcast conversation with @KoroushAK so much so that I am pushing it for a release this Thursday.',
    },
    {
      id: 107,
      profile: profiles[2].id,
      liked: false,
      likeCount: 0,
      post: 'I think we are about to BULL',
    },
    {
      id: 108,
      profile: profiles[2].id,
      liked: false,
      likeCount: 0,
      post: 'Bitcoin looking good',
    },

    {
      id: 109,
      profile: profiles[3].id,
      liked: false,
      likeCount: 0,
      post: 'This is my first post',
    },
    {
      id: 110,
      profile: profiles[3].id,
      liked: false,
      likeCount: 0,
      post: 'Woah, this is a cool app!',
    },
  ]);

  const [commentState, setCommentState] = useState([
    {
      postId: 100,
      profile: profiles[0].id,
      comment: 'this is a pomp comment',
    },
    {
      postId: 101,
      profile: profiles[1].id,
      comment: 'this is an elon comment',
    },
    {
      postId: 102,
      profile: profiles[2].id,
      comment: 'this is a wolf comment',
    },
    {
      postId: 103,
      profile: profiles[3].id,
      comment: 'this is a me comment',
    },
  ]);

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

  const handleDeletePost = (id) => {
    setUserPosts(userPosts.filter((post) => id !== post.id));
  };

  console.log(userPosts);
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
                          deletePost={handleDeletePost}
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
                  addLike={handleLike}
                />
              </Route>
            </Switch>
          </div>
          <div className='home-profile-container'>
            <HomeProfile profile={profiles[3]} />
          </div>
        </div>
      </Router>
    </>
  );
};

export default Home;
