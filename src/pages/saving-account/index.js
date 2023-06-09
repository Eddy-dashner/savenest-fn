import React from 'react'
import './saving.css'
// import { Icon } from 'boxicons';
// import { Location } from 'boxicons/icons'

const Saving=()=>{
    return(
        <>
        <div className='all'>
            <div className='head'>
               <h2 id="title">Monthly</h2> 
            <h3>Monthly date</h3>
            </div>
            <div className='second'>
               <div className='one'>
                <div className='dash'></div>
                <div className='dashboard'>
                <div>
                 {/* <Icon name={Location.name} /> */}
                </div>
               <h4>Dashboard</h4>
                <div className='side'>
                <i class='bx bxs-dashboard'></i><a href="#">Home</a><br/><br/>
                <i class='bx bxs-dashboard'></i><a href="#">My Account</a><br/><br/>
                <i class='bx bxs-dashboard'></i><a href="#">Goals</a><br/><br/>
                <i class='bx bxs-dashboard'></i><a href="#">Records</a><br/><br/>
                <i class='bx bx-cog' ></i><a href="#">Settings</a><br/><br/><br/><br/>
                <i class='bx bx-exit'></i><a href="#">Logout</a>
                </div>
                </div>
               </div>
               <div className='two'>
                <h3 id="month">Monthly Income</h3><br/>
                <div className='in'>
                 <h3 id="a">Amount</h3> 
                 <h3 id="b">Description</h3> 
                 <h3 id="c">Date</h3> <br/>
                 <input type="date" id="date"/>
                 <input type="text" id="text"/>
                 <input type="number" id="amount"/><br/>
                 <button id="save">Keep Records</button>
                </div>
                <h3 id="goal">Set Goal/Target</h3><br/><br/>
                <input type="text" id="item" placeholder="Item's Name"/><br/>
                <input type="text" id="timeline" placeholder="Timeline"/><br/>
                <input type="text" id="Amountrequired" placeholder="Amount Required"/><br/>
                <button id="goalo">Save Goal</button>
               </div>
               <div className='three'>
                <label id="d">Initial Balance:</label><input type='number'id="initial" /><br/>
                <h2 id="tobe">Amount To be Saved monthly</h2><br/>
                <input type="number" id="comp" placeholder="Compulsory Amount"/><br/> <br/>
                <div className="links"><a href="#"id="a1">I agree</a><br/><br/>
                <a href="#" id="a2"> I disagree</a></div><br/><br/> 
                  <h1 id="exp">Monthly Expenses</h1><br/><br/> 
                  <input type='text' id="exp2" placeholder='Expenses Type'/>
                  <input type='number' id="exp3" placeholder='Amount Spent'/>
                  <input type='text' id="exp4" placeholder='Expenses Type'/>
                  <input type='number' id="exp5" placeholder='Amount Spent'/><br/>
                  <button id="exp6">the total Expenses</button>
               </div>
               
            </div>
         
        </div>
        </>
    )

}
export default Saving;