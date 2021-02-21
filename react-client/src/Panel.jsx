import React from "react";
import moment from "moment";

export default function Panel({ Posts, setCurrentPost }) {
  return (
    <div
      style={{ margin: "1.25rem" }}
      onClick={() => {
        setCurrentPost(Posts);
      }}
    >
      <div className="card">
        <div className="card-header">
          <h1 id="title">{Posts.title}</h1>
        </div>
        <h5 className="card-text">
          {moment(Posts.createdAt).subtract(6, "days").calendar()}
        </h5>
      </div>
    </div>
  );
}
