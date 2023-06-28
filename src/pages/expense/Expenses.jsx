import React, { useState } from "react";
import "./expenses.css";
import DashboardLayout from "../../componet/DashboardLayout";
import { Link } from "react-router-dom";
function Expenses() {
  const [datas, setDatas] = useState([]);

  fetch("https://gleaming-clothes-pig.cyclic.app/api/v1/read")
    .then((res) => res.json())
    .then((data) => {
      setDatas(data.expenses);
    })
    .catch((error) => {
      console.error(error);
    });

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
              <Link to="/goals">
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
                    <th>AMOUNT(RWF)</th>
                    <th>PERIOD</th>
                    {/* <th>EMAIL</th> */}
                  </tr>
                  {datas.map((detail) => (
                    <tr key={detail._id}>
                      <td>{detail.expenseType}</td>
                      <td>{detail.amountSpent}</td>
                      <td>{detail.Period}</td>
                      {/* <td>{detail.email}</td> */}
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Expenses;
