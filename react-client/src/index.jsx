import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>hello world</div>;
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
