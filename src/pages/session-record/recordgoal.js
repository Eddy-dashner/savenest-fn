import React from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";
import { putDataInTable } from "../../constants";
import "./recordgoals.css";

function RecordGoal() {
  return (
    <div className="record-containerViewgoal">
      <DashboardLayout>
        <div className="record-viewgoalAll">
          <div className="record-viewgoal-page">
            <div className="record-viewgoal-search">
              <input type="search" placeholder="...." />
              <BsSearch />
            </div>
            <div className="record-viewgoal-table">
              <table cellSpacing={1} border={0}>
                <tr>
                  <th>Title</th>
                  <th>Starting Time</th>
                  <th>Ending Time</th>
                  <th>Amount Required</th>
                  <th>Goal Details</th>
                  <th>Action</th>
                </tr>
                {putDataInTable.map((row) => (
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.startingDate}</td>
                    <td>{row.endingDate}</td>
                    <td>{row.amount}</td>
                    <td>{row.description}</td>
                    <td></td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default RecordGoal;
