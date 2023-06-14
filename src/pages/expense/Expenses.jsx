import React from 'react'
import "./expenses.css";
import {ExpensesDetail} from "../../constants"
import DashboardLayout from "../../componet/DashboardLayout";
import {Link} from "react-router-dom"
function Expenses() {
  return (
    <DashboardLayout>
  <div className="div">
        <div className="second">
            <ul>
              
              <Link to="/recording"><li>Income</li></Link>
              <li>Expenses</li>
              <Link to="/expenses"><li>Goal</li></Link>
              {/* <li>Goals</li> */}
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
            <table>
            <thead>
      <tr>
        <th>TYPES</th>
        <th>AMOUNT</th>
        <th>PERIOD</th>
        <th>CREATED ON</th>
        <th>EXAMINE</th>
        {/* <th></th> */}
      </tr>
    </thead>
    {ExpensesDetail.map((detail)=>(
      <tr>
        <td>{detail.SOURCE}</td>
        <td>{detail.AMOUNT}</td>
        <td>{detail.PERIOD}</td>
        <td>{detail.CREATEDON}</td>
        <td> <button>{detail.button}</button></td>
      </tr>
    )
    )}
     </table>
    </div>
    </div>
    </DashboardLayout>
  )
}

export default Expenses