import React from "react";
import './session.css'

function Session(){
    return(
        <div className="divv">
        
        <h2>SESSIONS RECORDS</h2>
    <div className="title"> 
    <div className="to">  
    <div>
        <h4> <br/><br/><br/>ALL DATA</h4>
        <p>Playback your sessions. Filter the records by using date and visitors segments.</p>
    
       
        </div>

       <div className="bxs">
        <h5><br/><br/>Collect Data</h5> <br/>
        <h5><i class='bx bxs-stopwatch' ></i> Monthly</h5>
        <p>Data retention</p>
       </div> 
       </div> 
       
       <div className="line"></div>
        <h5>47 Sessions</h5>
        <p></p>
        </div>

        <div>
        <div className="one">
            <ul>
            <li><a href="/sessions">ALL SESSIONS</a></li>
        <li><a href="/getincome">ACTIVITY LOG</a></li>
        </ul>
        </div>
        
        <div className="view">
            <p>View All</p>
            <p>Saved records</p>
        </div>

        <div className="two">
            <div className="icon">  <i class='bx bx-filter-alt' ></i></div>
            <div className="ico"><p>May 2023</p> <i class='bx bxs-down-arrow' ></i></div>
            <div className="ic"><p>Sessions</p>  <i class='bx bxs-down-arrow' ></i></div>
            <div className="io"><p>Report Specific Filters</p>  <i class='bx bxs-down-arrow' ></i></div>
        </div> <br/> <br/> 
        <div className="three">
         
       <div className="table">
        <table border={0}>   
        
        <tr border='2px' className="m">
            <th> <input type="checkbox" className="box"/>LOCATION/SOURCE</th>
            <th>PAGES</th>
            <th>DURATION</th>
            <th>DEVICE/BROWSER/OS</th>
            <th>CREATED ON</th>
            <th>VISUALIZE</th>
            </tr>
            <tr>
                <td><input type="checkbox" className="box"/> Kigali-Rwanda</td>
                <td>3</td>
                <td>4:35</td>
                <td><i class='bx bx-laptop'></i>/<i class='bx bxl-chrome'></i>/<i class='bx bxl-windows' ></i></td>
                <td>14:29 PM</td>
                <td><button className="botn">PLAY</button></td>

            </tr>

            <tr>
                <td><input type="checkbox" className="box"/> Bugesera-Rwanda</td>
                <td>5</td>
                <td>2:45</td>
                <td><i class='bx bx-mobile'></i>/<i class='bx bxl-chrome'></i>/<i class='bx bxl-android'></i></td>
                <td>16:29 PM</td>
                <td><button className="botn">PLAY</button></td>

            </tr>
        </table>
        </div>

        </div>
        </div>
</div>
    )
}

export default Session;