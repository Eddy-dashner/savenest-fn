import React from "react";
import "../dashboard/dashboard.css";
import logo1 from "../dashboard/images/logo1.png";

import { GrClose } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { VscRecordKeys } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const Dashboardnav = () => {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src={logo1} alt="my logo" />
        </div>
        <div className="close">
          <span>
            {" "}
            <GrClose />
          </span>
        </div>
      </div>
      <div className="sidebar">
        <a href="#" className="active">
          <span>
            <MdDashboard />
          </span>{" "}
          <h2>Dashboard</h2>
        </a>
        <a href="#">
          <span></span> <AiFillHome />
          <h3>
            {" "}
            <Link to="/dashhome">Home</Link>
          </h3>
        </a>
        <a href="#">
          <MdAccountBox />
          <h3>
            <Link to="/savingacc">My Account</Link>
          </h3>
        </a>
        <a href="#">
          <GiStairsGoal />
          <h3>Goals</h3>
        </a>
        <a href="#">
          <VscRecordKeys />
          <h3>
            <Link to="/record">Record</Link>
          </h3>
        </a>
        <a href="#">
          <AiFillSetting />
          <h3>Settings</h3>
        </a>

        <div className="logout">
          <a href="#">
            <TbLogout />
            <h3>Logout</h3>
          </a>
        </div>
      </div>
    </aside>
  );
};
export default Dashboardnav;
