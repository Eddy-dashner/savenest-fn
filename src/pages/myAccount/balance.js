import React, { useState } from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import Button from "../../properties/Button";

import "./balance.css";

function Balance() {
  const [show, setShow] = useState(true);
  const toggleHiddenSection = () => {
    setShow(!show);
  };

  return (
    <DashboardLayout>
      <div className="balance-page">
        <div className="balance-description">
          <p className="balance-intro">
            Please be informed that your account balance is currently zero. To
            kickstart your savings, simply click on the "Save" button and start
            building your funds.
          </p>
        </div>
        <div className="balance-amount">
          <p className="balance-par">
            Amount: <span>0.0$</span>
          </p>
        </div>
        <div className="balance-btn">
          {" "}
          <button onClick={toggleHiddenSection}>Start saving</button>
          <br />
        </div>
        {!show && (
          <div className="balance-show">
            <div className="balance-form-btn">
              <form>
                <input type="text" placeholder="Amount to be saved" />
                <Button btnName="Save"></Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Balance;
