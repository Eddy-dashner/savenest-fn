import React from 'react'
import {teamCards }from "../constants"
import picture from "../pages/home/images/4.png"
import Dashnav from '../pages/dashboard/dashnav';
import "./joining.css"

const Cooperative = () => {
  return (
    <div>
    <div className='cooperative-container'>
      <div className='head-navbar'>
       <Dashnav/>
      </div>
      <div className='cooperative-content'>
         <div className='welcome'>
              <h1>Welcome to SaveNest saving assocciation Dashboard</h1>
              </div>
        <div className="here" >
        <h1  className="head-card">HERE COMES THE LIST OF ALL AVAILABLE TEAMS.</h1> 
        <div className="whole-cards">
        {teamCards.map((card)=>(
           <div class="cardsTeam"> 
           <h1>{card.heading}</h1>
           <img src={picture} alt='new'/>
           <p>{card.par}</p>
           <button>{card.button}</button> <button>{card.btn}</button>
           </div>
        ))}
   </div>
   </div>
   </div>   
    </div>
    </div>
  )
}

export default Cooperative;