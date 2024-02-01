import React from 'react'

function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-succes "  style={{ backgroundColor: '#0D98BA' }} data-bs-theme="light">
    <div class="container-fluid">

      
      <div className="collapse navbar-collapse " id="navbarColor03">
        <ul className="navbar-nav  ">
          <li class="nav-item">
           
            <div style={{fontSize:"30px",color:"white"}}>TURF CORNER </div>
          </li>
       
         
          <li class="nav-item">
           
          </li>
         
        </ul>
       
      </div>
    </div>
    <div className='me-5'><button className='btn btn-danger'>logout</button></div>
  </nav></div>
  )
}

export default Header