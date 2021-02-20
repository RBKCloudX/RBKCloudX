import React from "react";
const User = ({ handleChange, onSubmitPost }) => (
  <div className="ui form">
    <div className="ui active input">
  <input type="text" placeholder="Title" name="title" onChange={(e)=>handleChange(e)} />
</div>
<div className="field">
    <textarea rows="30" placeholder="blog something" name="body" onChange={(e)=>handleChange(e)}></textarea>
  </div>
  <div className="publish-btn">
  <div className="ui animated button" tabIndex="0" onClick={onSubmitPost}>
  <div className="visible content">Publish now</div>
  <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
</div>
  </div>
  </div>
);
export default User;
