import React from "react";
import Goalnav from "./goalNav";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";
import { tableData } from "../../constants";

function Viewgoal() {
  return (
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
                {/* { tableData.map((row) => (
             <tr>
              <td>{row.title}</td>
             </tr>
            ))} */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Viewgoal;
