import React from "react";
import axios from "axios";

export default function BlogPost({ Post,user_post}) {


  return (
    <div className="blog " >
      <h2 className="ui header">
        <img
          src={user_post.imageUrl}
          className="ui circular image"
        />
        {user_post.username}
        <div className="info-line ">{Post.createAt}</div>
      </h2>
      <h1 className="ui dividing header  ">{Post.title}</h1>
      <div className="ui top attached header fade-in">
        {Post.body.split(".").map((para, i) => (
          <h3 className="ui header " key={i}>
            {para}
          </h3>
        ))}
      </div>
    </div>
  );
}
