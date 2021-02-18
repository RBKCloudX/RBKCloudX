import React from "react";

export default function BlogPost({ Post }) {
  return (
    <div className="blog ">
      <h2 className="ui header">
        <img
          src="https://bookingagentinfo.com/wp-content/uploads/2018/05/Nargis-Fakhri-Contact-Information.jpg"
          className="ui circular image"
        />
        Author
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
