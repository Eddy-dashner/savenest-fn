import React, { useState } from "react";
import Imge from "./images/logo.png";
import "../dashboard/dashboard.css";
import { GrClose } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { VscRecordKeys } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navdashboard() {
  const [list, setList] = useState(false);
  const [accountlist, setAccountlist] = useState(false);
  return (
    <div>
      <div className="dashboard-cont">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={Imge} alt="my logo" />
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
              <Link to="/dashhome">
                <h2>Dashboard</h2>
              </Link>
            </a>
            <a href="#">
              <span></span> <AiFillHome />
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </a>
            <a href="#">
              <MdAccountBox />
              <h3>My Account</h3>
              <div className="myaccount-sectionone">
                {!accountlist && (
                  <AiOutlineArrowDown onClick={() => setAccountlist(true)} />
                )}
                {accountlist && (
                  <AiOutlineArrowDown onClick={() => setAccountlist(false)} />
                )}
              </div>
              {accountlist && (
                <div className="myaccount-nav">
                  <ul className="myaccount-nav-list">
                    <li className="myaccount-nav-link">
                      <Link to="/record">
                        <a>Incomes</a>
                      </Link>
                    </li>
                    <li className="myaccount-nav-link">
                      <Link to="/recording">Expenses</Link>
                    </li>
                    <li className="myaccount-nav-link">
                      <Link to="/balance">Balance</Link>
                    </li>
                  </ul>
                </div>
              )}
            </a>
            <a href="#">
              <GiStairsGoal />
              <Link to="/setgoal">
                <h3>Goals</h3>
              </Link>
            </a>
            <a href="#">
              <VscRecordKeys />
              <h3>Record</h3>
              <div className="record-sectionone">
                {!list && <AiOutlineArrowDown onClick={() => setList(true)} />}
                {list && <AiOutlineArrowDown onClick={() => setList(false)} />}
              </div>
              {list && (
                <div className="record-nav">
                  <ul className="record-nav-list">
                    <li className="record-nav-link">
                      <Link to="/record">All Session</Link>
                    </li>
                    <li className="record-nav-link">
                      <Link to="/recording">Incomes</Link>
                    </li>
                  </ul>
                </div>
              )}
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
      </div>
    </div>
  );
}

export default Navdashboard;
