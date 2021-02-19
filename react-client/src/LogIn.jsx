import React from "react";
const SignIn = ({ handleChange, submitLogIn }) => (
  <div id="myId">
    <section className="register-account">
      <div className="signform">
        <div className="left">
          <a href="/signup" className="bts-a">
            Don't have an account? Sign up!
          </a>
          <div className="bts">
            <a href="#" className="fblogin social">
              <i className="facebook icon icons"></i>
              <span>Sign in with Facebook</span>
            </a>
            <a href="#" className="twlogin social">
              <i className="twitter icon icons"></i>
              <span>Sign in with Twitter</span>
            </a>
            <a href="#" className="gplogin social">
              <i className="google icon icons"></i>
              <span>Sign in with Google</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="headit">
            <h4>Login To Your Account</h4>
          </div>
          <div className="form">
            <form className="login-form" id="login-form">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <input
                className="subbt"
                type="submit"
                value="Sign In"
                onClick={submitLogIn}
              />
            </form>
            <input type="checkbox" id="remember" name="remember" />
            <span> Remember Me</span>
            {/*<a href="#">Forgot your password?</a>*/}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SignIn;
