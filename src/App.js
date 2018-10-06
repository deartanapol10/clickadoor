import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Landing from "./components/layout/Landing";

import FBlogin from "./components/auth/FBlogin";

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                  <Route exact path="/" component={FBlogin} />
                  <Route exact path="/index" component={Landing} />
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
