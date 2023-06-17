import React from "react";
import "./expenses.css";
import { ExpensesDetail } from "../../constants";
import DashboardLayout from "../../componet/DashboardLayout";
import { Link } from "react-router-dom";
function Expenses() {
  return (
    <div className="recordExpenseCont">
      <DashboardLayout>
        <div className="div">
          <div className="second">
            <ul>
              <Link to="/recording">
                <li>Income</li>
              </Link>
              <li className="bold">Expenses</li>
              <Link to="/goal">
                <li>Goal</li>
              </Link>
            </ul>
          </div>
          <br />
          <div className="al">
            <h3>ALL EXPENSES</h3>

            <p>
              Visualize the proportionate distribution of your income sources
              with a pie chart, allowing you to quickly understand how your
              earnings are divided among different sources.
            </p>
            <div className="PutDatainTable">
              <table>
                <thead>
                  <tr>
                    <th>TYPES</th>
                    <th>AMOUNT</th>
                    <th>PERIOD</th>
                  </tr>
                </thead>
                {ExpensesDetail.map((detail) => (
                  <tr>
                    <td>{detail.SOURCE}</td>
                    <td>{detail.AMOUNT}</td>
                    <td>{detail.PERIOD}</td>
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

export default Expenses;
