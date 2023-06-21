import React from "react";
import "./getincome.css";
import { Link } from "react-router-dom";
import DashboardLayout from "../../componet/DashboardLayout";
import { IncomeDetail } from "../../constants";
function Getincome() {
  return (
    <div className="recordIncomeCont">
      <DashboardLayout>
        <div className="divAll">
          <div>
            <div className="second">
              <ul>
                <li className="bold">Income</li>
                <Link to="/expenses">
                  <li>Expenses</li>
                </Link>
                <Link to="/goal">
                  <li>Goals</li>
                </Link>
              </ul>
            </div>
            <br />
            <div className="al">
              <h3>Income Contributions</h3>
              <p>
                Visualize the proportionate distribution of your income sources
                with a pie chart, allowing you to quickly understand how your
                earnings are divided among different sources.
              </p>
              <div className="getincomeTable">
                <table>
                  <thead>
                    <tr>
                      <th>SOURCE</th>
                      <th>AMOUNT</th>
                      <th>PERIOD</th>
                    </tr>
                  </thead>
                  {IncomeDetail.map((detail) => (
                    <tr>
                      <td>{detail.SOURCE}</td>
                      <td>{detail.AMOUNT}</td>
                      <td>{detail.PERIOD}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
export default Getincome;
