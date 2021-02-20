import React from "react";
const User = ({ handleChange, onSubmitPost }) => (
  <div className="feed">
    <div className="column">
      <div className="ui raised segment">
        <div className="ui two column grid">
          <a className="ui whitesmoke ribbon label " id="post-btn-tag">
            <div
              className="ui animated button"
              tabIndex="0"
              onClick={onSubmitPost}
            >
              <div className="visible content">Post now</div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </div>
          </a>
          <h1 className="title"></h1>
          <div>
            <textarea
              rows="20"
              cols="60"
              name="user_post"
              autoFocus
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default User;
