import React from "react";
import {
    HashRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Login from '../Login';
import Dashboard from '../Dashboard';


const Routers = () => {
    return (
      <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
            <Route  path="/dashboard" element={<Dashboard />}> </Route>
            <Route path="/" element={<Navigate replace to="/dashboard" />} ></Route>
        
      </Routes>
    </HashRouter>
    )
}
export default Routers