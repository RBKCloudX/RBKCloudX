import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import SignIn from "./LogIn.jsx";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
const Guest = ({ handleChange, data }) => (
  <Router>
    <div>
      {/* applying the React Route   */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#"></a>
              </li>
              <li className="nav-item dropdown">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </li>
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
          <Route path="/signup">
            <SignUp handleChange={handleChange} />
          </Route>
          <Route path="/signin">
            <SignIn handleChange={handleChange} />
          </Route>
          <Route path="/">
            <Home data={data} />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);
export default Guest;
