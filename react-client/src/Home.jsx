import React from "react";
const Home = ({ data, renderPost, detail,getUserData,getUserImageAndUsername }) => (
  <div>
    {data.map((blog, index) => (
      <div className="feed" key={index} onClick={()=> getUserData(blog.id)}>
        <a className="ui image label">
          <img src="https://cdn.dribbble.com/users/5547197/screenshots/14248889/20200922_201013_4x.jpg" />
          Joe
        </a>
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
