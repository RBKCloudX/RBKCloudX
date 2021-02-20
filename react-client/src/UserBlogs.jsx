import React from "react";
import moment from "moment";
const UserBlogs = ({ data, updatePost }) => {
  console.log(data[0]);
  return (
    <div className="userblog-container">
      <div className="ui massive vertical pointing menu">
        {data.map((blog, index) => (
          <a className="active item" key={index}>
            <div className="ui header">
              <h1 id="title-userblogs">{blog.title}</h1>
              <h6>{moment(blog.createdAt).fromNow()}</h6>
            </div>
            <div className="ui buttons">
              <button className="ui positive button" onClick={updatePost}>
                update
              </button>
              <div className="or"></div>
              <button className="ui red button">delete</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserBlogs;
