import React from "react";
import ReactDOM from "react-dom";
//  import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Dummy_data
import data from "../../Dummy_data.js";
// import the Blog component
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

import BlogPost from "./BlogPost.jsx"
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
      Post: {},
      detail: false
    };
  }

  renderPost(blog, detail) {
console.log("clicked",blog);
this.setState({
  Post: blog,
  detail: detail
})
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
         <Nav renderPost={this.renderPost.bind(this)}
          handleChange={this.handleChange.bind(this)}
          data={this.state.data}
          detail={this.state.detail} Post={this.state.Post}
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
