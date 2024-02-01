import React from 'react'
import Turfs from '../components/Turfs'
import { Col, Row } from 'react-bootstrap';



function Bookingpage() {
  return (
    <div style={{ backgroundImage: `url("https://png.pngtree.com/background/20230412/original/pngtree-football-match-cartoon-illustration-advertising-background-picture-image_2402122.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: '100vh' }}>
  
        
        <Row className='container-fluid align-items-center justify-content-center text-center  '>
            
            <Col sm={12} md={12} lg={4} className='mt-5 align-items-center justify-content-center d-flex btn '>
             <Turfs></Turfs>
            </Col>
            <Col sm={12} md={12} lg={4} className='mt-5 align-items-center justify-content-center d-flex'>
             <Turfs></Turfs>
            </Col>
            <Col sm={12} md={12} lg={4} className='mt-5 align-items-center justify-content-center d-flex'>
             <Turfs></Turfs>
            </Col>
            <Col sm={12} md={12} lg={4} className='mt-5 align-items-center justify-content-center d-flex'>
             <Turfs></Turfs>
            </Col>
           
         
          </Row>
        
        </div>

  )
}

export default Bookingpage