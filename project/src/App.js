import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import Users from "./Users";
import Deneme from "./Deneme";
class App extends Component {

  state = {
    asd:"TUNA"
  }
  
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <Deneme title={this.state.asd}/>
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}

export default App;
