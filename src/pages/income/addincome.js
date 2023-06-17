import React from 'react'
import Navdashboard from '../dashboard/navdashboard';
import "./addincome.css"

const Addincome = () => {
  return (
    <div>
      <div className="income-container">
        <Navdashboard/>
        <div className='income-content'>
          <input type='text' placeholder='Income type'/> <br/>
          <input type='text' placeholder='Income amount'/><br/>
          <button type='submit'>Save</button>
        </div>
      </div>
      
    </div>
  )
}

export default Addincome;