import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../properties/Button'
import DashboardLayout from '../../componet/DashboardLayout'
import "../addexpenses/addexpense.css"
function Addexpense() {
  return (
    <DashboardLayout>
    <div className='addnew'>
        <div className='addexpense'>
            <h2>ADD EXPENSE</h2>
            <input type='text' placeholder='Expense type'></input>
            <input type='text' placeholder='Amount spent'></input>
            <div className='addbtn'>
            <Link to="/expenses">
            <Button btnName="SAVE"></Button>
          </Link>
          <Button btnName="ADD NEW"></Button>
          </div>
        </div>

    </div>
    </DashboardLayout>
  )
}

export default Addexpense