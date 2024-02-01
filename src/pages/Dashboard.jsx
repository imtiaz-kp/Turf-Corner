import React from 'react'
import Header from '../components/Header'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function Dashboard() {






    return (
        <>
            <Header></Header>
            <div style={{ backgroundImage: `url("https://png.pngtree.com/background/20230412/original/pngtree-football-match-cartoon-illustration-advertising-background-picture-image_2402122.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: '100vh' }}>
                <div className='row p-5 '>
                    <div className='row mb-4'><span className='fw-bolder' style={{ fontSize: "30px", color: 'orange' }}>Welcome User</span></div>
                    <div className='col-lg-7 rounded shadow p-4 border'>
                        <div className='mt-3 mb-3'>
                            <Link to={'/bookingpage'}>  <button className='btn btn-primary'>BOOK TURF</button></Link>

                        </div>                        <div style={{ color: 'white' }}>   Book History</div>
                        <Table striped bordered hover>

                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Turf</th>
                                    <th> Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>tnm</td>
                                    <td>9/12/23</td>
                                    <td>rs 1500</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>bay club</td>
                                    <td>2/12/23</td>
                                    <td>rs 1200</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-lg-1'></div>

                    <div className='col-lg-4 shadow border rounded p-3'>
                        <div className='  row'>
                            <label className='text-center'>
                                <input id='profile' style={{ display: 'none' }} type="file" />

                                <img width={'200px'} height={'200px'} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vNcnuDrDcWb-fg4zotZPU0uoCCsO7j_T2BKFxdo6qASgQXXtIwcIjgDPbT7AnO505KE&usqp=CAU" alt="upload picture" />

                            </label>

                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Username' />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className='col-lg-12 col-md-6 mt-3'>
                                <input style={{ color: "gray" }} type="text" className='form-control' placeholder='Phon-no' />
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Dashboard