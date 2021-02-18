import React from "react";
const User = ({ handleChange ,onSubmitPost}) => (
  <div className="feed">
    <a className="ui image label">
      <img src="https://cdn.dribbble.com/users/5547197/screenshots/14248889/20200922_201013_4x.jpg" />
      Joe
    </a>

    <div className="column">
      <div className="ui raised segment">
        <div className="ui two column grid">
          <a className="ui whitesmoke ribbon label " id="post-btn-tag">
            <div className="ui animated button" tabIndex="0" onClick={onSubmitPost}>
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
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default User;
