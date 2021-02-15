import React from "react";
import ReactDOM from "react-dom";
//  import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Dummy_data
import data from "../../Dummy_data.js";
// import the Blog component
import Nav from "./Nav.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      first_name: "",
      last_name: "",
      bday: "",
      email: "",
      username: "",
      password: "",
      passwordRepeat: "",
    };
  }
  // handleChange is for collecting data from signup & singin
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        {/* Nav-bar must be implemented always but it can be manipulated*/}
        <Nav handleChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
