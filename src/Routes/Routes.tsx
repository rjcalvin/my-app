import React from "react";
import {
    HashRouter,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Login from '../Login';
import Dashboard from '../Dashboard';
import AuthRoute from "./AuthRoute";
import UnAuthRoute from "./UnAuthRoute";


const RoutesDefinitions = () => {
    return (
      <HashRouter>
      <Switch>
        <UnAuthRoute path="/login" component={Login}/>
        <AuthRoute  path="/dashboard" component={Dashboard} exact/>
          
        <Redirect exact strict from="/"  to="/dashboard" />
        
      </Switch>
    </HashRouter>
    )
}
export default RoutesDefinitions