import React from "react";
const Home = ({ data, renderPost, detail, getUserData }) => (
  <div>
    {data.map((blog, index) => (
      <div className="feed" key={index} onClick={() => getUserData(blog.id)}>
        <div className="description">{blog.createAt}</div>
        <div className="column">
          <div className="ui two column grid">
            <div className="ui raised segment">
              <a className="ui whitesmoke ribbon label">{blog.tags}</a>
              <h1
                onClick={() => {
                  renderPost(blog, !detail);
                }}
                className="title"
              >
                {blog.title}
              </h1>
              <div>
                {blog.body.split(".").map((paragraph, index) => (
                  <p className="body" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default Home;
