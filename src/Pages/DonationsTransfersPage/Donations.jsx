import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./transfers.css";
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function DonationsTransfers() {
    const transferData = [
        { id: 16324, reference: "3470cf3f-8be2-4915-8c81-305785774534", date: "Jun 24 2024 6:29AM", amount: 721.55, fee: 5.2, operations: 21 },
        { id: 15542, reference: "77c6dc39-7387-4658-8405-42f30dec012e", date: "Jun 12 2024 6:44AM", amount: 578.8, fee: 5.2, operations: 10 },
        { id: 15312, reference: "dbc88b7c-72a7-4c53-b98a-4772f8163ad8", date: "Jun 11 2024 7:52AM", amount: 329.34, fee: 5.2, operations: 16 },
        { id: 15084, reference: "b43444b9-3edb-40c2-bc5a-3f092261fdfb", date: "Jun 10 2024 7:23AM", amount: 1_039.96, fee: 5.2, operations: 24 },
        { id: 14858, reference: "af5fc2e6-da3f-4294-891e-d0856dc5257e", date: "Jun 9 2024 7:39AM", amount: 866.78, fee: 5.2, operations: 31 }
      ];

        const [appointmentsPerPage,setPerPage] = useState(10);
        const [stateAppointment , setAppointments] = useState(transferData);
        const [currentPage, setCurrentPage] = useState(1);
        // Calculate the index of the first and last appointment to display on the current page
        const indexOfLastAppointment = currentPage * appointmentsPerPage;
        const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
        const currentTransfers = stateAppointment.slice(indexOfFirstAppointment, indexOfLastAppointment);
        


        // Function to handle pagination
        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
  return (
    <Container className=''>
        <div className='card py-4'>

            
            <div className='justify-content-between d-flex my-2 px-4'>
                <h4>قائمة التحويلات</h4>
                <div>
                    <button className='btn btn-dark mx-2'>فلتر نتائج البحث <FaFilter /></button>
                    <button className='btn btn-success'>تحديث النتائج <FaSearch /></button>
                </div>
            </div>
            <Row className='my-3 px-3'>
                <Col lg={4}>
                    <Form.Control type='text' placeholder='كلمة البحث'  />
                </Col>
                <Col lg={3}>
                    <Form.Control type='date'   />
                </Col>
                <Col lg={3}>
                    <Form.Control type='date' placeholder='كلمة البحث'  />
                </Col>
            </Row>
            <Row className='my-2 px-3'>
                <Col lg={2} >
                <Form.Control type='text' placeholder='المبلغ من'  />
                </Col>
                <Col lg={2}>
                <Form.Control type='text' placeholder='المبلغ الي'  />
                </Col>
            </Row>
            <div className='my-2 px-4'>
                <button className='btn btn-primary'>
                <FaSearch className='mx-2' />
                بحث
                </button>
            </div>
            <hr/>
            <Row className='justify-content-end'>
                <Col className='col-2'>
                    <span className='mx-2'>اظهر</span>
                    <select onChange={(e)=>setPerPage(e.target.value)} defaultValue={appointmentsPerPage}>
                        <option value={10}>
                            10
                        </option>
                        <option value={25}>
                            25
                        </option>
                        <option value={50}>
                            50
                        </option>
                    </select>
                </Col>
            </Row>
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead>
                    <tr>
                        <th>رقم عملية التحويل</th>
                        <th>مرجع التحويل في ميسر</th>
                        <th>تاريخ التحويل</th>
                        <th>المبلغ</th>
                        <th>الرسوم البنكية</th>
                        <th>عدد العمليات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTransfers.map((transfer) => (
                        <tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.reference}</td>
                        <td>{transfer.date}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.fee}</td>
                        <td>{transfer.operations}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </Row>
            {/* Pagination buttons */}
            <Row className='my-4'>         
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button 
                        variant='info'
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        >
                            السابق
                        </Button>
                        <span className='fw-bold mx-4'>Page: {currentPage}</span>
                        <Button
                        variant='info' 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={indexOfLastAppointment >= transferData.length}
                        >
                            التالي
                        </Button>
                    </div>
                    </Row>

        </div>
    </Container>
  )
}
