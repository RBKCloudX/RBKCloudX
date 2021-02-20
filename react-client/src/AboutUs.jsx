import React from "react";

const AboutUs = () => (
  <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src="https://media.tenor.com/images/0134abc9714d4005c210b912ac512064/tenor.png" />
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <i className="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  </div>
);
export default AboutUs;
