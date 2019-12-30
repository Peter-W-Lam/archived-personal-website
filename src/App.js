import React from 'react'
import { BrowserRouter as Router, 
        Switch, 
        Route } from "react-router-dom";

import Menu from './Menu'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
