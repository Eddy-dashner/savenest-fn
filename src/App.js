import React from "react";
import Index from "./pages/dashboard/index";
import Session from "./pages/session-record/session";
import Getincome from "./pages/session-record/getincome";

import Home from "./pages/home/home";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Index />
      <Session />
      <Getincome />
    </div>
  );
}

export default App;
