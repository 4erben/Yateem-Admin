import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function Donors() {
    const transferData = [

    ];

   

  return (
    <Container className='financialReport'>
        <div className='card py-4'>
            <div className='d-flex justify-content-between px-4'>
                <h5>المتبرعين الحاليين</h5>
                <button className='btn  btn-dark mx-2 '>فلتر نتائج البحث <FaFilter /></button>
            </div>
              <Row className='my-3 px-3'>
                <Col lg={2}>
                <Form.Select aria-label="Default select example" >
                        <option value="كل المشاريع">متبرع سابق</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                   </Form.Select>
                </Col>
                <Col lg={2}>
                   <Form.Control type='text' placeholder='كلمة البحث' />
                </Col>
                <Col lg={2}>
                <Form.Select aria-label="Default select example" >
                        <option value="كل المشاريع">حالة المتبرع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                        <option value="كل المشاريع">كل المشاريع</option>
                   </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Control  type='number' placeholder='المبلغ الي'  />
                </Col>
                <Col lg={2}>
                    <button className='btn  btn-primary mx-2 w-100'>البحث <FaSearch /></button>
                </Col>
            </Row>
           
            <hr/>
            
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead>
                    <tr>
                        <th>اسم المتبرع</th>
                        <th>الهاتف</th>
                        <th>البريد الاكتروني</th>
                        <th>الخيارات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transferData.map((transfer) => (
                        <tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.reference}</td>
                        <td>{transfer.date}</td>
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
