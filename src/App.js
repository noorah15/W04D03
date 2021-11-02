import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/card/:id" component={Card} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/contact" component={Contact} />
        <Route
          path="*"
          render={() => {
            return <h1> 404 </h1>;
          }}
        />
      </Switch>
    </div>
  );
}

/*



*/

export default App;
