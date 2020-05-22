import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./UserForm"
import ValueList from "./ValueList"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserForm/>
      <ValueList/>
    </div>
  );
}

export default App;
