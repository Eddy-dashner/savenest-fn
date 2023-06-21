import React from 'react'
import Dashnav from '../pages/dashboard/dashnav';
import pict from "../pages/home/images/3.png"
import "./joining.css"

const Dashboard2 = () => {
  return (
    <div>
        <div className='dashboard2-container'>
            <Dashnav/>
            <div className='dash2-content'>
                <h1>Welcome to SaveNest saving assocciation Dashboard</h1>
                <img src={pict} alt="pc"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard2;