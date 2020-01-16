import React from 'react'
import { BrowserRouter as Router, 
        Switch, 
        Route } from "react-router-dom";

import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import BottomBar from './BottomBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/contact" component={Contact} />
         <Route path="/portfolio" component={Portfolio} />
       </Switch>
     </Router>
     <BottomBar />
    </div>
  );
}

export default App;
