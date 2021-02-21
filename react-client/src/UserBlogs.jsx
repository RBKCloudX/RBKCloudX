import React from "react";
import moment from "moment";
import NotFound from "./NotFound.jsx";
const UserBlogs = ({
  data,
  updatePost,
  state,
  handleChange,
  sendUpdatedPost,
  deletePost,
  userBlogState,
}) =>
  userBlogState ? (
    <div className="userblog-container">
      <div className="ui massive vertical pointing menu">
        {data.map((blog, index) => (
          <a className="active item" key={index}>
            <div className="ui header">
              <h1 id="title-userblogs">{blog.title}</h1>
              <h6>{moment(blog.createdAt).fromNow()}</h6>
            </div>
            <div className="ui buttons">
              {!state ? (
                <div className="ui buttons">
                  <button className="ui positive button" onClick={updatePost}>
                    update
                  </button>
                  <div className="or"></div>
                  <button
                    className="ui red button"
                    onClick={() => deletePost(blog)}
                  >
                    delete
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="ui positive button"
                    onClick={() => {
                      sendUpdatedPost(blog.post_id);
                    }}
                  >
                    submit
                  </button>
                  <div className="ui form">
                    <div className="field">
                      <label>Title</label>
                      <textarea
                        rows="2"
                        name="title"
                        onChange={(e) => handleChange(e)}
                      ></textarea>
                      <div className="field">
                        <label>Blog</label>
                        <textarea
                          name="body"
                          onChange={(e) => handleChange(e)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="or"></div>
                    <button
                      className="ui red button"
                      onClick={() => deletePost(blog)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <NotFound />
    </div>
  );

export default UserBlogs;
