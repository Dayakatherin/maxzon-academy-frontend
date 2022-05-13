import React from 'react'
import './Attendance.css'
function Attendance() {
  return (
<div className="Attendance">
    <div className="titles">
       <h1>Attendance</h1>
    </div>
    
    <div className="attend">
    <button className='btns'>
    <h3 style={{fontSize:"16px",alignItems:"center",marginLeft:"30px"}}>March<h3 style={{marginTop:"3px"}}>2022</h3></h3>
                  <div style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"40px",marginTop:"14px"}}></div>
                  <h3 style={{marginLeft:"30px"}}>Presents <h3 style={{marginTop:"3px"}}>12</h3></h3>
                  <div style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"40px",marginTop:"14px"}}></div>
                  <h3 style={{marginLeft:"50px"}}>Absents <h3 style={{marginTop:"3px"}}>02</h3></h3>
                  <div style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"40px",marginTop:"14px"}}></div>
                  <h3 style={{marginLeft:"50px",paddingRight:"100px"}}>Holidays <h3 style={{marginTop:"3px"}}>03</h3></h3>

              </button>
    </div>
        
  <div className="presents">
   



<ul class="weekdays">
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thu</li>
  <li>Fri</li>
  <li>Sat</li>
  <li>Sun</li>
</ul>

<ul class="days">  
  <li><span class="active">01</span></li>
  <li><span class="active">01</span></li>
  <li><span class="active">01</span></li>
  <li><span className="red">01</span></li>
  <li><span class="active">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>
  <li><span className="grey">01</span></li>





</ul>

</div>
    <div className="values">
    <td style={{backgroundColor:"green",width:"30px",height:"20px"}}></td><h3>present</h3>
    <td style={{backgroundColor:"red",width:"30px",height:"20px"}}></td><h3>Absent</h3>
    <td style={{backgroundColor:"grey",width:"30px",height:"20px"}}></td><h3>Holidays</h3>
    </div>

    <div className="button">
    <button type="button" style={{backgroundColor:"#590098",width:"50px",border:"none",borderRadius:"10px"}}>Exam</button>
    <button type="button" style={{backgroundColor:"#590098",marginLeft:"10px",width:"90px",border:"none",borderRadius:"10px"}}>Exam Result</button>
    <button type="button" style={{backgroundColor:"#590098",marginLeft:"10px",width:"100px",border:"none",borderRadius:"10px"}}>Assignments</button>
    <button type="button" style={{backgroundColor:"#590098",marginLeft:"10px",width:"100px",border:"none",borderRadius:"10px"}}>Study Material</button>
    </div>

</div>

  )
}

export default Attendance