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
// import data from "../../Dummy_data.js";
// import the Blog component
import Footer from "./Footer.jsx";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import SignIn from "./LogIn.jsx";
import Home from "./Home.jsx";
import BlogPost from "./BlogPost.jsx";
import AboutUs from "./AboutUs.jsx";
import UserBlogs from "./UserBlogs.jsx";
import User from "./User.jsx";
import Swal from "sweetalert2";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      first_name: "",
      last_name: "",
      bday: "",
      email: "",
      username: "",
      imageUrl: "",
      password: "",
      passwordRepeat: "",
      Post: {},
      detail: false,
      title: "",
      body: "",
      failed: "",
      success: "",
      isLoggedIn: false,
      currentUserblogs: [],
      currentUser: null,
      user_post: {},
      user: {},
      updateBtn: false,
      counter: 0,
    };

    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
    this.fetchUserBlogs = this.fetchUserBlogs.bind(this);
  }
  // ta7ayel
  starting() {
    console.log("hello");
    if (this.state.counter === 0) {
      location.reload();
      this.setState({ counter: 1 });
      return;
    }
  }

  //get the blogs of the current user
  fetchUserBlogs() {
    axios
      .get("api/users/user/email/" + this.state.currentUser)
      .then(({ data }) => {
        this.setState({ currentUserblogs: data });
      })
      .catch((err) => console.log(err));
  }
  // to get id of userPost
  getUserData(id) {
    axios
      .get("api/users/user/" + id)
      .then(({ data }) => {
        this.setState({ user_post: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // get req to get user data

  fetchAllData() {
    axios
      .get("api/blogs")
      .then(({ data }) => {
        this.setState({ data: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.setCurrentState();
    this.fetchAllData();
    console.log(this.state.blog);
  }
  // setUsername function that will check using the token if the token valid for a specific user then he will stay logged in
  setCurrentState() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get("/api/verify/", config).then((res) => {
      const token = res.config.headers.Authorization.replace("Bearer ", "");
      this.setState({ currentUser: res.data, isLoggedIn: true });
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", token);
    });
  }

  isAuthenticated() {
    return localStorage.getItem("isLoggedIn");
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: this.state.failed,
        footer:
          "wrong password failed, password must be atleast more than 8 characters !",
      });
    } else if (this.state.password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: this.state.failed,
        footer: "password must be atleast more than 8 characters !",
      });
    } else {
      axios
        .post("api/users/signup", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          bday: this.state.bday,
          email: this.state.email,
          username: this.state.username,
          imageUrl: this.state.imageUrl,
          password: this.state.password,
        })
        .then((res) => {
          if (!res.data.code) {
            this.setState({ user: res.data });
            localStorage.setItem("token", res.data.token);
            Swal.fire({
              icon: "success",
              title: this.state.success,
            });
            this.props.history.push("/signin");
            console.log(this.state.user);
          } else {
            this.setState({ failed: "email or username already exists" });
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: this.state.failed,
              footer: "email or username already exists!",
            });
          }
        })
        .catch((err) => {
          this.setState({ failed: "email or username already exists" });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: this.state.failed,
            footer: "email or username already exists!",
          });
        });
    }
  }
  submitLogIn(e) {
    e.preventDefault();
    axios
      .post("/api/users/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        if (result.data.logged == true) {
          this.setState({ isLoggedIn: result.data.logged });
          localStorage.setItem("token", result.data.data.token);
          localStorage.setItem("isLoggedIn", true);
          this.props.history.push("/");
          this.starting();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password or email is incorrect!",
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password or email is incorrect!",
        })
      );
  }

  onSubmitPost(e) {
    e.preventDefault();
    axios
      .post("api/blogs/newStory", {
        email: this.state.currentUser,
        title: this.state.title,
        body: this.state.body,
      })
      .then(({ data }) => {
        this.fetchAllData();
        this.props.history.push("/");
      });

    console.log("clicked");
  }
  onLogOut(e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    this.setState({ isLoggedIn: false, currentUser: null });
    this.props.history.push("/signin");
  }
  // update function
  updatePost(e) {
    e.preventDefault();
    this.setState({ updateBtn: !this.state.updateBtn });
    console.log("clicked", { updateBtn: !this.state.updateBtn });
  }
  sendUpdatedPost(id) {
    axios
      .put("/api/blogs/" + id, {
        title: this.state.title,
        body: this.state.body,
      })
      .then((res) => {
        this.fetchUserBlogs();
        this.setState({ updateBtn: false });
        this.fetchAllData();
        this.props.history.push("/blogs");
      });
  }
  setCurrentPost(newPost){
    console.log(newPost);
    this.setState({Post:newPost})
  // obj.post_id
  }
  deletePost(obj) {
    console.log("objina =>", obj.post_id);

    axios
      .delete("api/blogs/" + obj.post_id)
      .then((data) => {
        this.fetchUserBlogs();
        this.fetchAllData();
      })
      .catch((err) => console.log(err));
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
                    {!this.isAuthenticated() ? (
                      <div>
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
                        onClick={this.onLogOut}
                      >
                        Log out
                      </button>
                    )}
                  </li>
                  {this.isAuthenticated() ? (
                    <li className="nav-item">
                      <Link to="/story" className="nav-link active">
                        Write an article
                      </Link>
                    </li>
                  ) : null}
                  {this.isAuthenticated() ? (
                    <li className="nav-item">
                      <Link
                        to="/blogs"
                        className="nav-link active"
                        onClick={this.fetchUserBlogs}
                      >
                        My Blogs
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <form className="d-flex">
                  {this.state.isLoggedIn ? (
                    <h4 id="welcome">Welcome, {this.state.currentUser}</h4>
                  ) : null}
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
              <Route path="/blogs">
                <UserBlogs
                  data={this.state.currentUserblogs}
                  updatePost={this.updatePost.bind(this)}
                  state={this.state.updateBtn}
                  handleChange={this.handleChange.bind(this)}
                  sendUpdatedPost={this.sendUpdatedPost.bind(this)}
                  deletePost={this.deletePost.bind(this)}
                />
              </Route>
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
                    getUserData={this.getUserData.bind(this)}
                    
                  />
                ) : (
                  <BlogPost
                    user_post={this.state.user_post}
                    Post={this.state.Post}
                    detail={this.state.detail}
                    Posts={this.state.data}
                    setCurrentPost={this.setCurrentPost.bind(this)}
                  />
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
