import React from 'react'
import "./balance.css"
import DashboardLayout from '../../componet/DashboardLayout'
import { Expense, Income ,T_balance} from '../../constants'
function Balance() {
  return (
    <DashboardLayout>
        <div className='balance-cont'>
    <h2>Income</h2>
    <table>
            <thead>
      <tr>
        <th>DATE</th>
        <th>SOURCE</th>
        <th>AMOUNT</th>
      </tr>
    </thead>
    {Income.map((detail)=>(
      <tr>
        <td>{detail.DATE}</td>
        <td>{detail.SOURCE}</td>
        <td>{detail.AMOUNT}</td>
      </tr>
    )
    )}
     </table>

     <h2>Expense</h2>
    <table>
            <thead>
      <tr>
        <th>DATE</th>
        <th>CATEGORY</th>
        <th>AMOUNT</th>
      </tr>
    </thead>
    {Expense.map((detail)=>(
      <tr>
        <td>{detail.DATE}</td>
        <td>{detail.SOURCE}</td>
        <td>{detail.AMOUNT}</td>
      </tr>
    )
    )}
     </table>
     <h2>Total Balance</h2>
    <table>
            <thead>
      <tr>
        <th>TOTAL INCOME</th>
        <th>TOTAL EXPENCE</th>
        <th>TOTAL BALANCE</th>
      </tr>
    </thead>
    {T_balance.map((detail)=>(
      <tr>
        <td>{detail.DATE}</td>
        <td>{detail.SOURCE}</td>
        <td>{detail.AMOUNT}</td>
      </tr>
    )
    )}
     </table>
     <h2>OVER VEIW ON GOAL</h2>
     <p>Congratulations on your savings progress this month!<br></br>
      You've made great strides towards your financial goals. <br></br>
     Let's review your achievements:<br></br><br></br>

Total savings: [Amount]<br></br>
Monthly savings goal: [Goal]<br></br>
Percentage of goal achieved: [Percentage]<br></br><br></br>
Your dedication and commitment to saving are commendable. Keep up the good work and continue building a secure financial future!

Remember, consistent saving habits lead to long-term financial stability.Don't hesitate to explore additional features and resources in the app to optimize your savings strategy.<br></br>

Thank you for trusting our savings app to help you on your journey to financial success. We look forward to seeing your progress next month!"

</p>
    </div>
    
      
    
   </DashboardLayout>
  )
}

export default Balance