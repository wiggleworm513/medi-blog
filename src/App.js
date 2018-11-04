import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

import "./index.css";
import Logo from "./assets/logo.png";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <img src={Logo} alt="Website Logo" />
            <div className="Link">
              <Link to="/">Home</Link>&nbsp;
              <Link to="/About">About</Link>&nbsp;
              <Link to="/Contact">Contact</Link>
            </div>
            <hr />
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </div>
        </Router>
        <hr />
        Legal Info and stuff &copy;2018
      </div>
    );
  }
}
