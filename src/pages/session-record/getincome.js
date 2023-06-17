import React from "react";
import "./getincome.css";
import {Link} from "react-router-dom"
import DashboardLayout from "../../componet/DashboardLayout";
import {IncomeDetail} from "../../constants"
function Getincome() {
  return (
    <DashboardLayout>
      <div className="div">
        {/* <h2>INCOME RECORDS</h2> */}
        {/* <div className="tile">
          <div className="t">
            <div>
              <h4>
                {" "}
                <br /> <br />
                <br />
                ALL DATA
              </h4>
              <p>
                Playback your sessions. Filter the records by using date and
                visitors segments.
              </p>
            </div>

            <div className="bx">
              <h5>
                <br />
                <br />
                Collect Data
              </h5>{" "}
              <br />
              <h5>
                <i class="bx bxs-stopwatch"></i> Monthly
              </h5>
              <p>Data retention</p>
            </div>
          </div>

          <div className="lie"></div>
          <h5>47 Sessions</h5>
          <p></p>
        </div> */}

        <div>
          {/* <div className="oe">
            <ul>
              <li>
                <a href="/session">ALL SESSIONS</a>
              </li>
              <li>
                <a href="/getincome">ACTIVITY LOG</a>
              </li>
            </ul>
          </div> */}

          {/* <div className="twe">
            <div className="iconic">
              {" "}
              <i class="bx bx-filter-alt"></i>
            </div>
            <div className="conic">
              <p>May 2023</p> <i class="bx bxs-down-arrow"></i>
            </div>
            <div className="onic">
              <p>Source</p> <i class="bx bxs-down-arrow"></i>
            </div>
            <div className="nic">
              <p>Report Specific Filters</p> <i class="bx bxs-down-arrow"></i>
            </div>
          </div> */}
          <br />
          <br />
          <div className="second">
            <ul>
              <li>Income</li>
              <Link to="/expenses"><li>Expenses</li></Link>
              {/* <li>Expenses</li> */}
              <li>Goals</li>
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
            <table>
            <thead>
      <tr>
        <th>SOURCE</th>
        <th>AMOUNT</th>
        <th>PERIOD</th>
        <th>CREATED ON</th>
        <th>EXAMINE</th>
        {/* <th></th> */}
      </tr>
    </thead>
    {IncomeDetail.map((detail)=>(
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
            <br />
              {/* <tr>
                <td>Running a Shop</td>
                <td>400, 000 RWF</td>
                <td>Every 2 weeks</td>
                <td>19:36 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
              <tr>
                <td>Student Scholarship</td>
                <td>200, 000 RWF</td>
                <td>Monthly</td>
                <td>20:34 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
              <tr>
                <td>Loan</td>
                <td>1000, 000 RWF</td>
                <td>09 May 2023</td>
                <td>19:34 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
              <tr>
                <td>Gifts</td>
                <td>100,000 RWF</td>
                <td>Occasionally</td>
                <td>19:50 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>

              <tr>
                <td>Others</td>
                <td>200,000 RWF</td>
                <td>Occasionally</td>
                <td>23:20 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr> */}
           
          
            {/* <h2>MONTHLY TREND ANALYSIS</h2>

            <p>
              Discover valuable insights into the growth and fluctuations of
              your income streams with trend analysis charts, empowering you to
              understand the changing patterns of your various income sources.
            </p>
            <table>
              <tr>
                <th>SOURCE</th>
                <th>INCREMENTATION</th>
                <th>AS OF</th>
                <th>CURRENT CONTRIBUTION</th>
                <th>EXAMINE</th>
              </tr>

              <tr>
                <td>Salary</td>
                <td>+100,000 RWF</td>
                <td>04 June 2023</td>
                <td>500, 000 RWF</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>

              <tr>
                <td>Running a shop</td>
                <td>+100, 000 RWF</td>
                <td>17 May 2023</td>
                <td>400,000 RWF</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
              <tr>
                <td>Other</td>
                <td>+500,000 RWF</td>
                <td>07 Apr 2023</td>
                <td>5500,000 RWF</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>

              <tr>
                <td>Gifts</td>
                <td>+200,000 RWF</td>
                <td>04 Mar 2023</td>
                <td>400, 000 RWF</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <br /> */}

            {/* <h2>COMPARISON BY CATEGORY</h2>

            <p>
              Break down your income sources into specific categories or
              subgroups and gain a detailed understanding of their contributions
              with stacked bar graphs or grouped bar graphs.
            </p>
            <table>
              <tr>
                <th>SOURCE</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
                <th>ENTERED ON</th>
                <th>EXAMINE</th>
              </tr>

              <tr>
                <td>Others</td>
                <td>Selling a property</td>
                <td>400, 000 RWF</td>
                <td>13: 50 RWF</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>

              <tr>
                <td>Gifts</td>
                <td>Family Allowance</td>
                <td>100, 000 RWF</td>
                <td>15: 23 PM</td>
                <td>
                  <button className="butn">Examine</button>
                </td>
              </tr>
            </table> */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
export default Getincome;
