import React from "react";
const SignIn = ({ handleChange }) => (
  <div>
    <form>
      <div className="container">
        <h1 id="sign-up-in">Sign In</h1>
        <p>Please fill in this form to log in.</p>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={(e) => handleChange(e)}
          />
          <p>By creating an account you become a member</p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              <a href="/signup" className="nav-link active loginAncre">
                Create un account
              </a>
            </button>
            <button type="submit" className="signupbtn">
              Login Now
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SignIn;
