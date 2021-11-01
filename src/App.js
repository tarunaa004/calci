import React from "react";
import Value1 from "./value1";
import Value2 from "./value2";
import Operat from "./operat";
import Result from "./result";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/" exact><Value1 /></Route>
          <Route path="/value2"><Value2 /></Route>
          <Route path="/operat"><Operat /></Route>
          <Route path="/result"><Result /></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
