import React from 'react'
import Header from './components/Header';
import Recipe from './components/Recipe';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'


export default function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
        <Switch>
          <Route path='/' exact exact component={Home} />
          <Route path='/recipe' exact component={Recipe} />
  
        </Switch>
        
      </Router>
    </div>
  )
}




