import React from "react";
import Index from "./pages/dashboard/index";
import Session from "./pages/session-record/session";
import Getincome from "./pages/session-record/getincome";

import Account from "../src/pages/saving-account/index";
import Home from "./pages/home/home";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./componet/routes";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
