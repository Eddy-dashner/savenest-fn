import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Signup from "../../pages/signup/signup";
import Signin from "../../pages/signup/signin";
import Dashboard from "../../pages/dashboard/index";
// import Savingacc from "../../pages/saving-account";
import Dashboardhome from "../../pages/dashboard/index";
import Records from "../../pages/session-record/session";
import RecordIncome from "../../pages/session-record/getincome";
import Goal from "../../pages/GoalSection/goal";
import Joining from "../joining";
import Cooperative from "../cooperative";


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/joining.js" element={<Joining />} />
      <Route path="/Cooperative.js" element={<Cooperative />} />
      <Route path="/signup.js" element={<Signup />} />
      <Route path="/signin.js" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recording" element={<RecordIncome />} />
      <Route path="/dashhome" element={<Dashboardhome />} />
      {/* <Route path="/savingacc" element={<Savingacc />} /> */}
      <Route path="/record" element={<Records />} />
      {/* <Route path="/goal" element={<Goal />} /> */}
      <Route path="viewgoal" element={<Viewgoal />} />
      <Route path="setgoal" element={<Setgoal />} />
    </Routes>
  );
};
export default Index;
