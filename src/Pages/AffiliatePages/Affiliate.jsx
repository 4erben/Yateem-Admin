import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { HiDocumentAdd } from 'react-icons/hi';

export default function Affiliate() {
    const transferData = [

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
    <Container className='financialReport'>
        <div className='card py-4'>
            <div className='d-flex justify-content-between px-2' >
                <h5 className='px-4'>روابط الاعلانات</h5>
                <button className='btn btn-primary mx-2'><HiDocumentAdd /> اضافة</button>
            </div>
            <Row> 
                <Col lg={3} className='my-2'>
                    <Form.Select aria-label="Default select example">
                        <option>كل المنسقين</option>
                        <option>كل المنسقين</option>
                        <option>كل المنسقين</option>
                    </Form.Select>
                </Col>
                <Col lg={2} className='my-2'>
                    <Form.Control type='text' placeholder='كلمة البحث' />
                </Col>
                <Col lg={3} className='my-2'>
                    <Form.Control type='date'  />
                </Col>
                <Col lg={3} className='my-2'>
                    <Form.Control type='date'  />
                </Col>
                <Col lg={2} className='my-2'>
                <button className=' btn btn-primary px-4'><FaSearch/> ابحث</button>
                </Col>
            </Row>
            <hr/>
            <Row className='my-3 px-3 justify-content-end'>

                <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Form.Label className='me-5 ms-2 '>اظهر</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>setPerPage(e.target.value)} defaultValue={appointmentsPerPage} >
                        <option value={10}>
                            10
                        </option>
                        <option value={25}>
                            25
                        </option>
                        <option value={50}>
                            50
                        </option>
                   </Form.Select>
                </Col>
            </Row>
            <hr/>
            
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>العنوان</th>
                        <th>اسم المعلن</th>
                        <th>رقم جوال المعلن</th>
                        <th>البريد الاكتروني</th>
                        <th>كلمة دلالية مخصصة</th>
                        <th>تاريخ الاضافة</th>
                        <th>الزيارات</th>
                        <th>المتبرعين الجدد</th>
                        <th>عمليات التبرع</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTransfers.map((transfer) => (
                        <tr key={transfer.id}>
                        <td><Form.Control type='checkbox' /></td>
                        <td>{transfer.id}</td>
                        <td>{transfer.reference}</td>
                        <td>{transfer.date}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.amount}</td>
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
