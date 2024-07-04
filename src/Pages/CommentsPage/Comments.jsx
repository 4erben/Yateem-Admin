import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function Comments    () {
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
                 <h5 className='px-4'>التعليقات</h5>
              <Row className='my-3 px-3 justify-content-between'>
                <Col lg={6}>
                    <Form.Control type='text' placeholder='كلمة البحث' />
                </Col>
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
                        <th>المشروع</th>
                        <th>العميل</th>
                        <th>الرسالة</th>
                        <th>تاريخ الارسال</th>
                        <th>الرد</th>
                        <th>تاريخ الرد</th>
                        <th>الخيارات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTransfers.map((transfer) => (
                        <tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.reference}</td>
                        <td>{transfer.date}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.amount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </Row>

        </div>
    </Container>
  )
}
