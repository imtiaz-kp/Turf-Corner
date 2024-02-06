import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../Services/baseurl';
import { editTurfOwnerProfileAPI, editTurfProfileAPI } from '../Services/allAPI';

function Admindashboard() {
    const [existingImage, setExistingImage] = useState("");
    const [preview, setPreview] = useState("");
    const [existingImage2, setExistingImage2] = useState("");
    const [preview2, setPreview2] = useState("");
    const [userProfile, setUserProfile] = useState({
        username: "", turfname: "", regno: "", email: "", turfemail: "", password: "", phon: "", turflocation: "",profile:"",profile2:"", id: ""
    });
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"));
        setUserProfile({ ...userProfile, username: user.username, turfname: user.turfname, regno: user.regno, email: user.email, turfemail: user.turfemail, password: user.password, phon: user.phon, turflocation: user.turflocation,profile:"",profile2:"", id: user._id });
        setExistingImage(user.profile); 
        setExistingImage2(user.profile2); 

    }, []);
 useEffect(() => {
    if (userProfile.profile) {
      setPreview(URL.createObjectURL(userProfile.profile));
    } else {
      setPreview("");
    }
    if (userProfile.profile2) {
        setPreview2(URL.createObjectURL(userProfile.profile2));
      } else {
        setPreview2("");
      }
  }, [userProfile.profile,userProfile.profile2]);

 const handleOwnerProfileUpdate = async ()=>{
    const {username,email,phon,profile2}=userProfile
    if(!username||!email||!phon){
        alert("fill the form completely");
    }else{
        const reqBody= new FormData();
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("phon",phon)
        preview2 ? reqBody.append("profile2", profile2) : reqBody.append("profile2", existingImage2);
        const token = sessionStorage.getItem("token");

        if (preview2) {
            const reqHeader = {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
            };
    
            try {
              const result = await editTurfOwnerProfileAPI(reqBody, reqHeader);
              if (result.status === 200) {
                alert("updated successfully")
                sessionStorage.setItem("existingUser", JSON.stringify(result.data));
              } else {
            
                alert(result.response.data);
              }
            } catch (error) {
              alert("Error updating profile:", error);
            }
          } else {
            const reqHeader = {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            };
    
            try {
              const result = await editTurfOwnerProfileAPI(reqBody, reqHeader);
              if (result.status === 200) {
                alert("updated successfully")
                sessionStorage.setItem("existingUser", JSON.stringify(result.data));
              } else {
              
             alert(result.response.data);
              }
            } catch (error) {
              alert("Error updating profile:", error);
            }
          }


    }
 }

 
  const handleProfileUpdate = async () => {
    const { username, turfname, regno, email, turfemail, password,phon,turflocation,profile } = userProfile;
    if (!turfname || !turfemail|| !turflocation) {
      alert("Fill out the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("turfname", turfname);
      reqBody.append("regno", regno);
      reqBody.append("email", email);
      reqBody.append("turfemail", turfemail);
      reqBody.append("password", password);
      reqBody.append("phon", phon);
      reqBody.append("turflocation", turflocation);
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage);

      const token = sessionStorage.getItem("token");
     
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };

        try {
          const result = await editTurfProfileAPI(reqBody, reqHeader);
          if (result.status === 200) {
            alert("updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
          } else {
        
            alert(result.response.data);
          }
        } catch (error) {
          alert("Error updating profile:", error);
        }
      } else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        try {
          const result = await editTurfProfileAPI(reqBody, reqHeader);
          if (result.status === 200) {
            alert("updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
          } else {
          
         alert(result.response.data);
          }
        } catch (error) {
          alert("Error updating profile:", error);
        }
      }
    }
  };








    return (
        <>
            <Header></Header>
            <div style={{ backgroundImage: `url("https://png.pngtree.com/background/20230412/original/pngtree-football-match-cartoon-illustration-advertising-background-picture-image_2402122.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", }}>
                <div className='row p-5 '>
                    <div className='row mb-4'><span className='fw-bolder' style={{ fontSize: "30px", color: 'orange' }}>Welcome {userProfile.username}</span></div>
                    <div className='col-lg-7 rounded shadow p-4 border'>
                        <div className=' rounded p-3 text-center' style={{ color: 'white', fontSize: '30px' }}>Turf Details</div>
                        <div className='mt-3 mb-3'>
                            <Link to={'/timeallowt'}>  <button className='btn btn-primary'>Allout time</button></Link>

                        </div>                        <div style={{ color: 'white' }}>   </div>
                        <div className='  row'>
                            <label className='text-center'>
                                <input id='profile' style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile: e.target.files[0] })}/>
                            {existingImage!==""?
                                <img width={'700px'} height={'300px'} className='  border rounded-3 p-1' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload picture" />:
                                <img width={'700px'} height={'300px'} className='  border rounded-3 p-1'  src={preview ? preview :``} alt="upload picture" />
                            }
                            </label>

                            <div className='col-lg-12 col-md-6 mt-3'>
                                <label htmlFor="" style={{ color: 'white' }}>Turf Name</label>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Turf Name' value={userProfile.turfname} onChange={e => setUserProfile({ ...userProfile, turfname: e.target.value })} />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <label htmlFor="" style={{ color: 'white' }}>Turf Register No (you can't Update)</label>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Turf Register No' value={userProfile.regno} />
                            </div>

                            <div className='col-lg-12 col-md-6 mt-3'>
                                <label htmlFor="" style={{ color: 'white' }} >Turf LocationLink</label>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Turf Location Link' value={userProfile.turflocation} onChange={e => setUserProfile({ ...userProfile, turflocation: e.target.value })} />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <label htmlFor="" style={{ color: 'white' }} >Turf Email</label>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Turf-Email' value={userProfile.turfemail} onChange={e => setUserProfile({ ...userProfile, turfemail: e.target.value })} />
                            </div>
                            <div className='col-lg-12 mt-3 text-center'>
                                <button type="text" className='btn btn-warning' onClick={handleProfileUpdate} >Update</button>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-1'></div>

                    <div className='col-lg-4 '>
                        <div className='  row shadow border rounded p-3'>
                            <div className=' rounded p-3 text-center' style={{ color: 'white', fontSize: '30px' }}>Owner Details</div>

                            <label className='text-center'>
                                <input id='profile2' style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile2: e.target.files[0] })}/>
                                 
                                {existingImage2!==""?
                                <img width={'200px'} height={'200px'}  className='rounded-circle' src={preview2 ? preview2 : `${BASE_URL}/uploads/${existingImage2}`} alt="upload picture" />:
                                <img width={'200px'} height={'200px'}   className='rounded-circle' src={preview2 ? preview2 :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vNcnuDrDcWb-fg4zotZPU0uoCCsO7j_T2BKFxdo6qASgQXXtIwcIjgDPbT7AnO505KE&usqp=CAU`} alt="upload picture" />
                            }
                            </label>


                              
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Username' value={userProfile.username} onChange={e => setUserProfile({ ...userProfile, username: e.target.value })} />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Email' value={userProfile.email} onChange={e => setUserProfile({ ...userProfile, email: e.target.value })} />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Phon-no' value={userProfile.phon} onChange={e => setUserProfile({ ...userProfile, phon: e.target.value })} />
                            </div>

                            <div className='col-lg-12 mt-3 text-center'>
                                <button type="text" className='btn btn-warning' onClick={handleOwnerProfileUpdate} >Update</button>
                            </div>
                        </div>
                        <div className='row'></div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Admindashboard