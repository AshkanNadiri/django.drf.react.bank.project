import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Branches from './components/pages/Branches';
import Accounts from './components/pages/Accounts';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';


import './App.css' 




class App extends Component {
  
  render() {
    return (
      <Router>
        <div >
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/branches" component={Branches}/>
            <Route path ="/accounts" component={Accounts}/>
            <Route path ="/customers" component={Customers}/>
            <Route path = "/products" component={Products}/>
        </div>    
      </Router>
      
      
      
    );
  }
}
export default App;