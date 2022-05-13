import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className="header">
          <img src="logo.png"
            alt="logo"
          />
        <div className="header-items">
          <p>Exam</p>
          <p>ExamResult</p>
          <p>Assignments</p>
          <p>Study Material</p>
        </div>

      </div>
    </div>

  )
}

export default Navbar