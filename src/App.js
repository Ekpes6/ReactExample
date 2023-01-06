import React, { Component } from "react";
import './App.css';
import AuthButton from "./AuthButton";

let isLoggedIn = true;
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return ( 
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        <AuthButton isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default App;
