import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import Profile from "./Profile";
import Post from "./Post";
import NewPost from "./CreatePost";
import Comments from "./Comments";
import HomeSidebar from "./HomeSidebar";

import max from "../assets/profileMax.jpg";
import amy from "../assets/profileAmy.jpg";
import sydney from "../assets/profileSydney.jpg";
import ben from "../assets/profileBen.jpg";
import henry from "../assets/profileHenry.jpg";
import mark from "../assets/profileMark.jpg";

import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover5 from "../assets/cover5.jpg";
import cover6 from "../assets/cover6.jpg";
import cover8 from "../assets/cover8.jpg";

const Home = () => {
  const profiles = [
    {
      id: 1,
      name: "Max",
      user: "max",
      img: max,
      link: "?user=max",
      cover: cover2,
      description: "Life is about the journey, not the destination",
    },
    {
      id: 2,
      name: "Sydney",
      user: "sydney",
      img: sydney,
      cover: cover1,
      link: "?user=sydney",
      description: "Live life to the fullest, and focus on the positive",
    },
    {
      id: 3,
      name: "Henry",
      user: "henry",
      img: henry,
      cover: cover6,
      link: "?user=henry",
      description: "Professional photographer, designer and video editor",
    },

    {
      id: 4,
      name: "User",
      user: "user",
      img: ben,
      cover: cover3,
      link: "?user=user",
      description:
        "The sky is the limit, we don't stop until we achieve our goals",
    },
    {
      id: 5,
      name: "Amy",
      user: "amy",
      img: amy,
      cover: cover5,
      link: "?user=amy",
      description: "No matter what happens, I'm living to be happy.",
    },
    {
      id: 6,
      name: "Mark",
      user: "mark",
      img: mark,
      cover: cover8,
      link: "?user=mark",
      description: "Life is about the journey, not the destination",
    },
  ];

  const [userPosts, setUserPosts] = useState([
    {
      id: 100,
      profile: profiles[0],
      liked: false,
      likeCount: 2,
      post: "Wow, this new social media app is cool!",
    },
    {
      id: 101,
      profile: profiles[4],
      liked: false,
      likeCount: 3,
      post: "How's everybody doing today?",
    },
    {
      id: 102,
      profile: profiles[2],
      liked: false,
      likeCount: 4,
      post: "Just got done shooting my new photoshoot, should be out soon, keep watching for details!",
    },
    {
      id: 103,
      profile: profiles[1],
      liked: false,
      likeCount: 2,
      post: "I love how simple this application is to use, wow incredible!",
    },

    {
      id: 104,
      profile: profiles[5],
      liked: false,
      likeCount: 3,
      post: "Hey this is my first post!",
    },
    {
      id: 105,
      profile: profiles[0],
      liked: false,
      likeCount: 2,
      post: "Trying this new app out.",
    },

    {
      id: 106,
      profile: profiles[1],
      liked: false,
      likeCount: 4,
      post: "I'm about to go out for a run!",
    },
    {
      id: 107,
      profile: profiles[3],
      liked: false,
      likeCount: 0,
      post: "This is my first post!",
    },
    {
      id: 108,
      profile: profiles[3],
      liked: false,
      likeCount: 0,
      post: "It's a beautiful day outside!",
    },
  ]);

  const [commentState, setCommentState] = useState([
    {
      id: 1001,
      postId: 100,
      profile: profiles[1],
      comment: "I know right!?",
    },
    {
      id: 1002,
      postId: 100,
      profile: profiles[2],
      comment: "Incredible!",
    },
    {
      id: 1003,
      postId: 104,
      profile: profiles[0],
      comment: "Hey there!",
    },
    {
      id: 1004,
      postId: 101,
      profile: profiles[5],
      comment: "Doing great how about you?",
    },
    {
      id: 1005,
      postId: 101,
      profile: profiles[4],
      comment: "It's a great day!",
    },
    {
      id: 1006,
      postId: 104,
      profile: profiles[4],
      comment: "Welcome!",
    },
    {
      id: 1007,
      postId: 102,
      profile: profiles[5],
      comment: "This is epic!",
    },
    {
      id: 1008,
      postId: 102,
      profile: profiles[1],
      comment: "Can't wait to hear more!",
    },
    {
      id: 1009,
      postId: 104,
      profile: profiles[1],
      comment: "Hello! :)",
    },
    {
      id: 1010,
      postId: 106,
      profile: profiles[2],
      comment: "Enjoy!",
    },
  ]);

  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get("user");

  const [selectedComment, setSelectedComment] = useState();
  const [commentUpState, setCommentUpState] = useState(false);
  const [popUpState, setPopUpState] = useState(false);

  // Create a Post
  const handlePost = (post) => {
    setUserPosts([...userPosts, post]);
  };
  // Remove a post
  const handleDeletePost = (id) => {
    setUserPosts(userPosts.filter((post) => id !== post.id));
  };

  // Add a comment
  const handleComment = (comment) => {
    setCommentState([...commentState, comment]);
  };

  // Launch Post
  const handlePopUp = () => {
    setPopUpState(!popUpState);
  };

  // Launch comment
  const handleCommentUpState = (param) => {
    setSelectedComment(param);
    setCommentUpState(!commentUpState);
  };

  // Add or Subtract like count
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
    <div
      className={
        popUpState || commentUpState
          ? "grid-container background-grey"
          : "grid-container"
      }
    >
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
        {userParam ? (
          <Profile
            profiles={profiles}
            param={userParam}
            commentUpState={handleCommentUpState}
            userPosts={userPosts}
            addLike={handleLike}
            deletePost={handleDeletePost}
          />
        ) : (
          userPosts.map((post) => (
            <Post
              key={post.id}
              profile={post.profile}
              post={post}
              userPosts={userPosts}
              commentUpState={handleCommentUpState}
              addLike={handleLike}
              deletePost={handleDeletePost}
            />
          ))
        )}
      </div>
      <div
        className={`home-profile-container ${
          userParam !== null && "home-profile-none"
        }`}
      >
        <HomeSidebar profile={profiles[3]} />
      </div>
    </div>
  );
};

export default Home;
