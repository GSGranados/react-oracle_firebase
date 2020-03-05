import React, { Component } from "react";
import "./App.css";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div><Content></Content></div>
        <div style={{marginTop:25}}><Footer></Footer></div>
      </>
    );
  }
}

export default App;
