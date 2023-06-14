import React from 'react'
import {teamCards }from "../constants"
import picture from "../pages/home/images/4.png"

const Cooperative = () => {
  return (
    <div>
        <h1  className="head-card">WANT TO JOIN OUR TEAM, HERE COMES THE LIST OF ALL AVAILABLE TEAMS.</h1> 
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
  )
}

export default Cooperative;