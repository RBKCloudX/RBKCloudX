import React from "react";
import ReactDOM from "react-dom";
//  import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Dummy_data
import data from "../../Dummy_data.js";
// import the Blog component
import Guest from "./Guest.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
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
      failed: "",
      success: "",
    };
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
      setTimeout(() => {
        this.setState({ failed: "" });
      }, 500);
      console.log(this.state);
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
      setTimeout(() => {
        this.setState({
          first_name: "",
          last_name: "",
          bday: "",
          email: "",
          username: "",
          password: "",
          passwordRepeat: "",
          success: "",
        });
      }, 500);
    }
  }
  
  render() {
    return (
      <div>
        {/* Nav-bar must be implemented always but it can be manipulated*/}
        <Guest
          handleChange={this.handleChange.bind(this)}
          data={this.state.data}
          signUpData={{
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            bday: this.state.bday,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            passwordRepeat: this.state.passwordRepeat,
          }}
          handleSubmit={this.handleSubmit.bind(this)}
          failed={this.state.failed}
          success={this.state.success}
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
