import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Signup from "../../pages/signup/signup";
import Signin from "../../pages/signup/signin";
import Dashboard from "../../pages/dashboard";
// import Savingacc from "../../pages/saving-account";
// import Dashboardhome from "../../pages/dashboard/index";
// import Records from "../../pages/session-record/session";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup.js" element={<Signup />} />
      <Route path="/signin.js" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/dashhome" element={<Dashboardhome />} /> */}
      {/* <Route path="/savingacc" element={<Savingacc />} /> */}
      {/* <Route path="/record" element={<Records />} /> */}
    </Routes>
  );
};
export default Index;
