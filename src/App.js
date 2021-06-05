import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./index.css";
import Nav from "./componand/Nav";
import Sec1 from "./componand/Section-part-1";
import Mid from "./componand/Midle";
import About from "./componand/about";

export const App = () => {
  return (
    <>
      <Router>
        <Nav title="Profolio" />
        <Switch>
          <Route exact path="/">
            <Sec1 />
            <Mid />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
