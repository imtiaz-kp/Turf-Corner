import React, { useState } from 'react'
import {  Link ,useNavigate} from 'react-router-dom';
import { adminRegisterAPI } from '../Services/allAPI';
import Form from 'react-bootstrap/Form';

function Adminsignup() {
    const navigate = useNavigate();
    const [userData,setUserData]=useState({ 
    username: "",
    turfname:"",
    regno:"",
    email: "",
    turfemail:"",
    password: "",
  phon:"",
turflocation:""
})

    
    const handleRegister = async (e) => {
        e.preventDefault();
        const { username, email, password } = userData;
    
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!username || !email || !password) {
          alert("Please fill the form completely");
        } else if (username.length < 3) {
          alert("Username should be at least 3 characters long");
        } else if (!emailRegex.test(email)) {
          alert("Invalid email address");
        } else {
          const result = await adminRegisterAPI(userData);
          if (result.status === 200) {
            alert(`${result.data.username} has registered successfully!!`);
            setUserData({
                username: "",
                turfname:"",
                regno:"",
                email: "",
                turfemail:"",
                password: "",
                phon:"",
                turflocation:"",
            });
            navigate('/adminlogin');
          } else {
            alert(result.response.data);
          }
        }
      };
  return (
    <div  style={{backgroundImage:`url("https://png.pngtree.com/background/20230412/original/pngtree-football-player-watercolor-smudged-cartoon-advertising-background-picture-image_2401982.jpg")`,backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}> 
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center'>
    <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: "none", color: 'white' ,fontSize:'20px'  }}>
         <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
        </Link>
      <div style={{backgroundImage:`url("https://img.pikbest.com/ai/illus_our/20230422/856d8f9d78ebd9ca2cd21f536c6c2baf.jpg!sw800")`,backgroundRepeat: "no-repeat",
         backgroundSize: "cover"}} className="card border-black shadow p-5 ">
        <div className='row align-items-center'>
          <div className='col-lg-6 mb-3 mb-lg-0'>
            <img className='w-100' src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-login-access-denied-vector-illustration-png-image_6041367.png" alt="" />
          </div>
          <div className='col-lg-6'>
            <div className="d-flex align-items-center flex-column">
              <h1 className='fw-bolder text-light mt-2'>
                <i className="fa-brands fa-stack-overflow fa-bounce"></i> Turf-Corner
              </h1>
              <h5 className='fw-bolder mt-4 pb-3 text-light'>
                
              </h5>
              <Form className='text-light w-100'>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Owner Name "  value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTurfname">
                    <Form.Control type="text" placeholder="Turf Name "  value={userData.turfname} onChange={e => setUserData({ ...userData, turfname: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Turf Registraction Number "  value={userData.regno} onChange={e => setUserData({ ...userData, regno: e.target.value })} />
                  </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Turf Email" value={userData.turfemail} onChange={e => setUserData({ ...userData, turfemail: e.target.value })}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })}  />
                </Form.Group>
           
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Phon Number(google pay, whatsapp)" value={userData.phon} onChange={e => setUserData({ ...userData, phon: e.target.value })}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Turf Location Link( google map)" value={userData.turflocation} onChange={e => setUserData({ ...userData, turflocation: e.target.value })}  />
                </Form.Group>
                
                  <div>
                    <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                    <p>Already have an account? Click here to <Link to={'/adminlogin'}>Login</Link></p>
                  </div>
                
                
               
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Adminsignup