import React from "react";
import Card from "./UI/Card";

const Comment = ({ commentState, profile }) => {
  return (
    <Card>
      <a href={`${profile.link}`}>
        <img className='show-comment-photo' src={profile.img} />
      </a>
      <div className='show-comment-details'>
        <a href={`${profile.link}`}>
          <h3 className='name'>{profile.name}</h3>
          <p className='user-name'>@{profile.user}</p>
        </a>
        <p className='content-text'>{commentState.comment}</p>
      </div>
    </Card>
  );
};

export default Comment;
