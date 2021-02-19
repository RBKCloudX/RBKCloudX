import React from "react";
import Swal from "sweetalert2";
const SignUp = ({ handleChange, handleSubmit, signUpData }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <h1 id="sign-up-in">Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <div>
            <label htmlFor="first_name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="first_name"
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="last_name">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="last_name"
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">
              <b>Your image link</b>
            </label>
            <input
              type="text"
              placeholder="Enter your Your image link"
              name="imageUrl"
              required
              onChange={(e) => handleChange(e)}
            />
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
            <div className="ui input bday focus container ">
              <label htmlFor="bday" className="bday">
                <b>Date of birth :</b>
              </label>

              <input
                type="date"
                id="myDate"
                name="bday"
                min="1980-01-01"
                max="2050-01-01"
                onChange={(e) => handleChange(e)}
              />
            </div>

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
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="passwordRepeat"
              required
              onChange={(e) => handleChange(e)}
            />
            <p>By creating an account you become a member</p>

            <div className="clearfix">
              <button type="button" className="cancelbtn">
                <a href="/signin" className="nav-link active loginAncre">
                  Login
                </a>
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
