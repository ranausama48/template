import React from "react";
import Layout from "./components/Layout/index";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App(props) {
  return (
    <Router className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
export default App;
