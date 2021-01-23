import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Components/login';
import SignUp from './Components/signup';
import Register from './Components/register';
import ShopProfile from './Components/shopProfile';
import App from './App';
import Shop from './shopping/shop';
import EnterPhno from './Components/enterphno';
import EnterOTP from './Components/enterOTP';
import ForgotPass from './Components/forgotpass';
import ShoppingCart from './addingItems/shoppingcart';

ReactDOM.render(
  
  <Router >
   
   <Switch>
          <Route exact path="/" component={Login} /> 
          <Route path="/register" component={Register} />
          <Route path="/signup" component={SignUp} />
          <Route path="/shopProfile" component={ShopProfile } />
          <Route path="/app" component={App} />
          <Route path="/shops" component={Shop} />
          <Route path="/enterphn" component={EnterPhno} />
          <Route path="/enterotp" component={EnterOTP} />
          <Route path="/forgotpass" component={ForgotPass} />
          <Route path="/items" component={ShoppingCart} />

   </Switch>

  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
