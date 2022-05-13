import React from 'react'
import './Banner.css'
function Banner() {
  return (
<div className="banner">

    <div className="title">
       <h1>Time Table</h1>
    </div>
    <div className="join">
    <h1>Monday 9am - 10am English</h1>
    <h2>Click to Join</h2>
    </div>
    <div className="timetable">
    <table>
    <tr>
    <th></th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
    <th>9am - 10am</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td style={{backgroundColor:"white",color:"black"}}>English</td>
    <td>English</td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
    <td className="td-sub"></td>
  </tr>
  <tr>
    <td>Monday</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
  </tr>
  <tr>
    <td>Monday</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  
  </tr>
  <tr>
    <td>Monday</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  
  </tr>
  <tr>
    <td>Monday</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
  </tr>
 
</table>

    </div>
</div>    
  )
}

export default Banner