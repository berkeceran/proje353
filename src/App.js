/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/LoginOut/Login";
import SignUp from "./Components/LoginOut/SignUp";
import MainPage from "./Components/Customer/MainPage";

function App() {
  return (
    <div className="App">
      {/*<SignUp />  <Login /> */}

      <MainPage />
      {/* 
      <Login />
      <Router>
        <div className="app">
          {localStorage.getItem("logedIn") === "true" ? (
            <Navigate to="/page" />
          ) : (
            <Navigate to="/login" />
          )}
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
      */}
    </div>
  );
}

export default App;
