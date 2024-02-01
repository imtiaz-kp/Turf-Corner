import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handilRedirectinToUserDashboard = () => {
        navigate('/login')
    }
    const handilRedirectinToAdminDashboard = () => {
        navigate('/adminlogin')
    }


    return (
        <div>

            <div style={{ backgroundImage: `url("https://png.pngtree.com/background/20230412/original/pngtree-football-match-cartoon-illustration-advertising-background-picture-image_2402122.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <span className='ms-5 mt-3' style={{ fontSize: '30px ', color: 'white', fontWeight: '10px', position: 'fixed' }}>TURF-CORNER</span> <img width={40} src="" alt="" />
                <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center'>
                    <div className='w-100 container' >

                        {/* <Link to={'/register'} style={{ textDecoration: "none", color: 'blue' }}>
        <i className="fa-solid fa-arrow-left me-1"></i>Register to book
      </Link> */}
                        <div style={{ fontSize: '20px', color: 'black',  backgroundColor: 'rgb(211,211,211,0.6)' }} className='p-2 rounded mt-5 mb-5'>
                            <div className='row mb-3 rounded ' >
                                <div className='col-lg-12  p-3 mt-5 ' >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam quis, atque veniam maiores molestiae ea ipsa sit repellendus,
                                    ducimus beatae. Non molestiae rerum quam veniam deleniti illum optio. Ad?</div>
                            </div>
                            <div className='row  mt-5  text-center '  >
                                <div className='col-lg-4 align-items-center justify-content-center d-flex mb-2'>
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img class="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2023/8/331009298/DA/ZK/HO/56657667/dombivali-marvel-turf-1-500x500.jpg" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 align-items-center justify-content-center d-flex mb-2' >
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img class="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2023/8/331009298/DA/ZK/HO/56657667/dombivali-marvel-turf-1-500x500.jpg" alt="Card image cap" />
                                        <div class="card-body ">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 align-items-center justify-content-center d-flex mb-2'>
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img class="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2023/8/331009298/DA/ZK/HO/56657667/dombivali-marvel-turf-1-500x500.jpg" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                            <div className='row shadow mt-5 ' >
                                <div className='row  p-2'>
                                    <div className=' col-lg-6  rounded  p-5 '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam consectetur ad suscipit magni maiores beatae dicta, sit dolorum non placeat sunt tenetur rerum nihil labore sed. Cupiditate, saepe fugiat.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus saepe veniam, mollitia, sed necessitatibus sequi asperiores magni natus sint libero vero rerum. Quo placeat laudantium sint, officiis velit fuga?
                                        <div className='d-flex align-items-center justify-content-center mt-5'> <button onClick={handilRedirectinToUserDashboard} className='  btn border-black btn-success'>book Turf</button></div>
                                    </div>
    
                                    <div className='col-lg-6  rounded  p-5' >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam consectetur ad suscipit magni maiores beatae dicta, sit dolorum non placeat sunt tenetur rerum nihil labore sed. Cupiditate, saepe fugiat.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus saepe veniam, mollitia, sed necessitatibus sequi asperiores magni natus sint libero vero rerum. Quo placeat laudantium sint, officiis velit fuga?
                                        <div className='d-flex align-items-center justify-content-center mt-5'> <button onClick={handilRedirectinToAdminDashboard} className='  btn border-black btn-success'>Add your turf</button></div>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
                        </div>
                    <hr />    </div></div>
        </div>
    )
}

export default Home