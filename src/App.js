import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import SignInScreen from "./components/signinscreen";
import Dashboard from "./components/dashboard";


import "./index.css";
import Logo from "./assets/logo.png";
import Background from "./assets/pg_bg.png";
import Tab from "./assets/menu_tab.png";
import Bar from "./assets/menu_bar.png";
import Firebase from "./components/firebaseComponent";

export default class App extends Component {

  // The component's Local state.
    state = {
      isSignedIn: false, // Local signed-in state.
      user: null
    };

    componentDidMount() {
       this.unregisterAuthObserver = Firebase.auth().onAuthStateChanged(
           (user) => this.setState({isSignedIn: !!user, user: Firebase.auth().currentUser})
       );
     }

     // Make sure we un-register Firebase observers when the component unmounts.
     componentWillUnmount() {
       this.unregisterAuthObserver();
     }


  render() {
    return (
      <div style={{backgroundImage: "url(" + Background + ")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", padding: "2em"}}>
        <Router>
          <div style={{padding: "1em"}}>
            <img src={Logo} alt="Website Logo" />
            <div className="Link">
              <Link to="/"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>Home</div></Link>&nbsp;
              <Link to="/About"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>About</div></Link>&nbsp;
              <Link to="/Contact"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>Contact</div></Link>&nbsp;
              {(this.state.isSignedIn) ? <span><Link to="/Dashboard"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>Dashboard</div></Link><Link to="/Signout"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>SignOut</div></Link></span> : <Link to="/Signin"><div style={{backgroundImage: "url(" + Tab + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100px", height: "50px", padding: ".75em", float: "left"}}>SignIn</div></Link>}
            </div>
            <hr style={{clear: "both"}} />
            <Route path="/" exact component={Home} />
            <Route path="/Signin" component={(props) => <SignInScreen {...props} firebase={Firebase} />} />
            <Route path="/Signout" component={() => { Firebase.auth().signOut(); return (<div>You have been signed out</div>); }} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Dashboard" component={(props) => <Dashboard {...props} firebase={Firebase} user={this.state.user} />} />
            <hr />
            Legal Info and stuff &copy;2018
          </div>
        </Router>

      </div>
    );
  }
}
