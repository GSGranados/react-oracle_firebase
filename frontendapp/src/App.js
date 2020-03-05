import React, { Component } from "react";
import "./App.css";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
//import Footer from "./layouts/Footer";  --- I am going to think of something else about this footer


class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div><Content></Content></div>
        
      </>
    );
  }
}

export default App;
