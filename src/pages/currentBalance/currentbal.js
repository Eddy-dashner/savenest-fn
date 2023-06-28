import React, { useState } from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import Balance from "../myAccount/balance";
import "./currentbal.css";

function CurrentBalance() {
  // const [data, setData] = useState(0);
  // const handleChange = () => {
  //   setData(data);
  // };
  // const [balValue, setBalValue] = useState(
  //   localStorage.getItem("balValue") || "0"
  // );
  // // const [balValue, setBalValue] = useState([]);

  // fetch("https://better-red-colt.cyclic.app/api/v1/readgoal")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setViewgoals(data.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <div className="current-containerBalanceSec">
      <DashboardLayout>
        <div className="current-balance-page">
          <div className="current-balance-description">
            <p className="current-balance-intro">
              Please be informed that this is your account balance. To kickstart
              your savings, simply keep saving by finding more means of income
              but spending less and start building your funds.
            </p>
          </div>
          <div className="current-balance-amount">
            <p className="current-balance-par">
              Amount: <span>{}</span>
            </p>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default CurrentBalance;
