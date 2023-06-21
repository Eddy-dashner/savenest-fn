import React from "react";
import Goalnav from "./goalNav";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";
import { putDataInTable } from "../../constants";

function Viewgoal() {
  return (
    <div className="containerViewgoal">
      <DashboardLayout>
        <div>
          <Goalnav />
          <div className="viewgoalAll">
            <div className="viewgoal-page">
              <div className="viewgoal-search">
                <input type="search" placeholder="...." />
                <BsSearch />
              </div>
              <div className="viewgoal-table">
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
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Viewgoal;
