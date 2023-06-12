import React from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import "./goal.css";

const Goal = () => {
  return (
    <DashboardLayout>
      <div className="goal-container">
        <div className="goal-navbar">
          <ul className="goal-list">
            <li className="goal-link">Create Goals</li>
            <li className="goal-link">View Goals</li>
            <li className="goal-link"></li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Goal;
