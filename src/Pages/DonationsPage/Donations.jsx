import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./donations.css";
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function Donations() {
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
    <Container className=''>
        <div className='card py-4'>

            
            <div className='justify-content-between d-flex my-2 px-4'>
                <h4>التبرعات الحالية</h4>
                <div>
                    <button className='btn btn-sucess mx-2'>عمليات غير مكتملة بالفيزا<FaSearch /></button>
                    <button className='btn btn-dark'>استعلام عن عملية في ميسر<FaSearch /></button>
                    <button className='btn btn-primary mx-2'>فلتر نتائج البحث <FaFilter /></button>
                </div>
            </div>
            <Row className='my-3 px-3'>
                <Col lg={2}>
                    <Form.Control type='text' placeholder='كود العملية'  />
                </Col>
                <Col lg={2}>
                    <Form.Control type='text' placeholder='رقم الجوال'  />
                </Col>
                <Col lg={2}>
                    <select placeholder="طريقة الدفع">
                        <option value="طريقة الدفع">طريقة الدفع</option>
                        <option value="تحويل بنكي">تحويل بنكي</option>
                        <option value="بطاقة ائتمانية">بطاقة ائتمانية</option>
                        <option value="فروع - تحويل بنكي">فروع - تحويل بنكي</option>
                        <option value="فروع - نقاط بيع">فروع - نقاط بيع</option>
                        <option value="فروع - شيك بنكي">فروع - شيك بنكي</option>
                    </select>
                </Col>
                <Col lg={2}>
                    <select placeholder="طريقة الدفع">
                        <option value="طريقة الدفع">كل الحالات</option>
                        <option value="تحويل بنكي">عمليو غير مكتملة</option>
                        <option value="بطاقة ائتمانية">في انتظار المراجعة</option>
                        <option value="فروع - تحويل بنكي">عملية مقبولة</option>
                        <option value="فروع - نقاط بيع">عملية مرفوضة</option>
                        <option value="فروع - شيك بنكي">عملية مستردة</option>
                    </select>
                </Col>
                <Col lg={2}>
                    <Form.Control type='text' placeholder='المبلغ من '  />
                </Col>
                <Col lg={2}>
                <Form.Control type='text' placeholder='المبلغ الي'  />
                </Col>
            </Row>
            <Row className='my-2 px-3'>
                <Col lg={4} >
                <Form.Control type='date'   />
                </Col>
                <Col lg={4} >
                <Form.Control type='date'   />
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
