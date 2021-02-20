import React from "react";
import moment from "moment";

export default function BlogPost({ Post, user_post }) {
  return (
    <div className="blog ">
      <h2 className="ui header">
        <img src={user_post.imageUrl} className="ui circular image" />
        {user_post.username}
      </h2>
      <h6 className="info-line ">
        {moment(Post.createdAt).subtract(6, "days").calendar()}
      </h6>
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
// test
