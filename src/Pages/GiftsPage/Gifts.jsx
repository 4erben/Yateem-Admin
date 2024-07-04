import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { HiDocumentAdd } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


export default function GiftsPage() {

    const navigate = useNavigate();

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
      // Function to handle add gift button
      const handleAddGift = ()=>{
        navigate("add")
      }

  return (
    <Container className=''>
        <div className='card py-4'>

            
            <Row className='px-4'>
                <Col lg={6}>
                    <h4>الاهداءات الحالية</h4>
                </Col>
                <Col lg={6} className='row'>
                    <Col lg={6}>
                        <button className='btn btn-primary w-100' onClick={handleAddGift}> 
                            <HiDocumentAdd />
                            <span>اضافة اهداء</span>
                        </button>
                    </Col>
                    <Col lg={6}>
                        <button className='btn btn-dark mx-2 w-100'>فلتر نتائج البحث <FaFilter /></button>
                    </Col>
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
            <hr/>
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead>
                    <tr>
                        <th>صورة الاهداء</th>
                        <th>كود الاهداء</th>
                        <th>اسم الاهداء</th>
                        <th>التصنيفات</th>
                        <th>المبلغ المطلوب</th>
                        <th>اجمالي الاهداء</th>
                        <th>الحالة</th>
                        <th>نوع التبرع</th>
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
