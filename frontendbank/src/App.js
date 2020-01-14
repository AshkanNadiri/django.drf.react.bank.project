import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Branches from './components/pages/Branches';
import Accounts from './components/pages/Accounts';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register'
import PrivateRoute from './components/layout/PrivateRoute'
import store from './Store'
import { loadUser } from './components/action/auth'
import './App.css' 




class App extends Component {

  componentDidMount () {
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div >
              <Header/>
              {/* <PrivateRoute exact path="/" component={Home} /> */}
              <PrivateRoute path="/branches" component={Branches}/>
              <PrivateRoute path ="/customers" component={Customers}/>
              <PrivateRoute path ="/accounts" component={Accounts}/>
              <PrivateRoute path = "/products" component={Products}/>
              <Route path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
          </div>    
        </Router>
      </Provider>
      
      
      
    );
  }
}

export default App;