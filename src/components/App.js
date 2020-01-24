import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main  from '../Page'


let App = () => (
  <Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
    </ul>
    <Route exact path="/" component={Main} />
  </div>
</Router>
);


export default App;