import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-aside">
          
        </div>

        <div className="app-form">
          
          <div className="page-switcher">
            <NavLink to="/sign-in" exact className="page-switcher-item" activeClassName="page-switcher-item-active">Sign In</NavLink>
            <NavLink to="/" exact className="page-switcher-item" activeClassName="page-switcher-item-active">Sign Up</NavLink>
          </div>
          
          <div className="form-title">
            <NavLink exact to="/sign-in" className="form-title-link" activeClassName="form-title-link-active">Sign In</NavLink>
             or 
             <NavLink exact to="/" className="form-title-link" activeClassName="form-title-link-active">Sign Up</NavLink>
          </div>

          <Route exact path="/" component={ SignUpForm }>
          </Route>
          <Route exact path="/sign-in" component={ SignInForm }>
          </Route>
        </div>

      </div>
    </Router>
  );
}

export default App;
