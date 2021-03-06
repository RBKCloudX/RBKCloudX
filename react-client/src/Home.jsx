import React from "react";
import moment from "moment";

const Home = ({ data, renderPost, detail, getUserData }) => (
  <div>
    {data.map((blog, index) => (
      <div className="feed" key={index} onClick={() => getUserData(blog.id)}>
        <div className="column">
          <div className="ui two column grid">
            <div className="ui raised segment">
              <a className="ui whitesmoke ribbon label">
                {moment(blog.createdAt).fromNow()}
              </a>
              <h1
                onClick={() => {
                  renderPost(blog, !detail);
                }}
                className="title"
              >
                {blog.title}
              </h1>
              <div>
                {blog.body
                  .split("\n")
                  .slice(0, 1)
                  .map((paragraph, index) => (
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
