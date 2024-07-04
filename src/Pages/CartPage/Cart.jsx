import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function Cart() {
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
              <Row className='my-3 px-3'>
                <Col lg={4}>
                <Form.Select aria-label="Default select example" >
                        <option value="كل المشاريع">كل المشاريع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                   </Form.Select>
                </Col>
                <Col lg={4}>
                   <Form.Select aria-label="Default select example" >
                        <option value="كل المشاريع">التصنيفات</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                   </Form.Select>
                </Col>
                <Col lg={2}>
                  <Form.Control  type='number' placeholder='المبلغ من'  />
                </Col>
                <Col lg={2}>
                  <Form.Control  type='number' placeholder='المبلغ الي'  />
                </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <Form.Control type='date'  />
              </Col>
              <Col lg={3}>
                <Form.Control type='date'  />
              </Col>
              <Col lg={3}>
                <button className='btn  btn-primary mx-2 w-100'>البحث <FaSearch /></button>
              </Col>
            </Row>
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
                        <th>م</th>
                        <th>المشروع</th>
                        <th>الفئة</th>
                        <th>اسم المتبرع</th>
                        <th>رقم الجوال</th>
                        <th>تاريخ البداية</th>
                        <th>تاريخ النهاية</th>
                        <th>الدفعة القادمة</th>
                        <th>الدفعة القادمة</th>
                        <th>حالة التفعيل</th>
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
