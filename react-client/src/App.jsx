import React from "react";
import ReactDOM from "react-dom";
//  import react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
// import Dummy_data
import data from "../../Dummy_data.js";
// import the Blog component
import Footer from "./Footer.jsx";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import SignIn from "./LogIn.jsx";
import Home from "./Home.jsx";
import BlogPost from "./BlogPost.jsx";
import AboutUs from "./AboutUs.jsx";
import User from "./User.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      first_name: "",
      last_name: "",
      bday: "",
      email: "",
      username: "",
      password: "",
      passwordRepeat: "",
      Post: {},
      detail: false,
      failed: "",
      success: "",
      isLoggedIn: false,
      user_post: "",
      Redirect: "/signin",
    };
  }

  renderPost(blog, detail) {
    console.log("clicked", blog);
    this.setState({
      Post: blog,
      detail: detail,
    });
  }
  // handleChange is for collecting data from signup & singin

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  // handleSubmit is for submitting data
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.passwordRepeat) {
      this.setState({ failed: "confirmation password failed" });
    } else {
      axios
        .post("api/users/signup", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          bday: this.state.bday,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      this.setState({ success: "your account has been created successfully" });
    }
  }
  submitLogIn(e) {
    e.preventDefault();
    axios
      .post("/api/users/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(({ data }) => {
        if (data == true) {
          this.setState({ isLoggedIn: data });
          this.props.history.push("/");
        }
      });
  }
  onSubmitPost(e) {
    console.log("clicked");
  }
  onLogOut(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        <div className="container-foot">
          {/* applying the React Route   */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-lite">
            <div className="container-fluid">
              <img
                src="https://k4q5g9i9.rocketcdn.me/wp-content/uploads/2020/08/logos-RBK-1.png"
                id="logo"
              />
              <span className="RBK-Title">RBK Blogs</span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                      onClick={() => {
                        this.renderPost(!this.state.detail);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#"></a>
                  </li>
                  <li className="nav-item dropdown">
                    {!this.state.isLoggedIn ? (
                      <div>
                        {" "}
                        <a
                          className="nav-link dropdown-toggle active"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          See more
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="signin">
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/signup">
                              Sign up
                            </Link>
                          </li>
                        </ul>{" "}
                      </div>
                    ) : (
                      <button
                        className="btn btn-outline-success LogOut"
                        type="submit"
                        onClick={this.onLogOut.bind(this)}
                      >
                        Log out
                      </button>
                    )}
                  </li>
                  {this.state.isLoggedIn ? (
                    <li className="nav-item">
                      <Link
                        to="/story"
                        className="nav-link active"
                        // aria-current="page"
                      >
                        Write an article
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2 search-bar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div>
            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/story">
                <User
                  handleChange={this.handleChange.bind(this)}
                  onSubmitPost={this.onSubmitPost.bind(this)}
                />
              </Route>
              <Route path="/signup">
                <SignUp
                  handleChange={this.handleChange.bind(this)}
                  handleSubmit={this.handleSubmit.bind(this)}
                  failed={this.state.failed}
                  success={this.state.success}
                />
              </Route>
              <Route path="/signin">
                <SignIn
                  handleChange={this.handleChange.bind(this)}
                  submitLogIn={this.submitLogIn.bind(this)}
                />
              </Route>
              <Route exact path="/">
                {!this.state.detail ? (
                  <Home
                    renderPost={this.renderPost.bind(this)}
                    data={this.state.data}
                    detail={this.state.detail}
                  />
                ) : (
                  <BlogPost Post={this.state.Post} detail={this.state.detail} />
                )}
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
