import React from "react";
import moment from "moment";
import Panel from "./Panel.jsx";

export default function BlogPost({ Posts, Post, user_post, setCurrentPost }) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <div className="blog" style={{ width: "70%", margin: "2.25rem" }}>
        <h2 className="ui header">
          <img src={user_post.imageUrl} className="ui circular image" />
          {user_post.username}
        </h2>
        <h1 className="ui dividing header  ">{Post.title}</h1>
        <h6 className="info-line ">
          {moment(Post.createdAt).subtract(6, "days").calendar()}
        </h6>
        <div className="ui top attached header fade-in">
          {Post.body.split(".").map((para, i) => (
            <h3 className="ui header " key={i}>
              {para}
            </h3>
          ))}
        </div>
      </div>
      <div className="panel" style={{ width: "30%" }}>
        {Posts.filter((el) => el.title !== Post.title && el.id === Post.id).map(
          (el, i) => (
            <Panel setCurrentPost={setCurrentPost} Posts={el} key={i} />
          )
        )}
      </div>
    </div>
  );
}
