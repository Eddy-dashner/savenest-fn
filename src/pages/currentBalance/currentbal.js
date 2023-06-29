import React from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import "./currentbal.css";

function CurrentBalance() {
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
