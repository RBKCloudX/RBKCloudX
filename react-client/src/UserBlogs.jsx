import React from "react";
import moment from "moment";
const UserBlogs = ({ data }) => (
  <div className="userblog-container">
    <div className="ui massive  vertical pointing menu">
      {data.map((blog, index) => (
        <a className="active item" key={index}>
          <div className="ui header">
            <h1 id="title-userblogs">{blog.title}</h1>
            <h6>{moment(blog.createdAt).fromNow()}</h6>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default UserBlogs;
