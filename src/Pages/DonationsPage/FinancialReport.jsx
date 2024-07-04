import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { MdNotes } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';
import { ImUserTie } from "react-icons/im";
import "./donations.css"

export default function FinancialReport() {
    const transferData = [

      ];

  return (
    <Container className='financialReport'>
        <div className='card py-4'>

            
            <div className='justify-content-between d-flex my-2 px-4'>
                <h4>تقرير المشرف المالي</h4>
                <div>
                    <button className='btn btn-dark mx-2'>فلتر نتائج البحث <FaFilter /></button>
                </div>
            </div>
            <Row className='my-3 px-3'>
                <Col lg={3}>
                    <Form.Control type='date'  />
                </Col>
                <Col lg={3}>
                    <Form.Control type='date'  />
                </Col>
                <Col lg={2}>
                    <button className='btn w-100 btn-primary mx-2'>البحث <FaFilter /></button>
                </Col>
                <Col lg={2}>
                    <button className='btn w-100 btn-primary mx-2'>طباعة <MdNotes /></button>
                </Col>
            </Row>
            <div className='text-primary fw-bold px-2'>
            <IoMdMore size={20} />
            <span className='mx-2'>الاجمالي</span>
            </div>
            <hr/>
            <div className='text-primary fw-bold px-2'>
            <ImUserTie size={20} />
            <span className='mx-2'>تبرعات المشروع</span>
            </div>
            <hr/>
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead className='bg-dark'>
                    <tr>
                        <th>اسم المشروع</th>
                        <th>بطاقة ائتمانية</th>
                        <th>تحويل بنكي</th>
                        <th>اجمالي</th>
                        <th>التفاصيل</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transferData.map((transfer) => (
                        <tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.reference}</td>
                        <td>{transfer.date}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.fee}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </Row>
            <div className='text-primary fw-bold px-2'>
            <ImUserTie size={20} />
            <span className='mx-2'>تبرع سريع</span>
            </div>
            <hr/>
            <Row className='tblTransfers'>
                <table className="table  text-center">
                    <thead className='bg-dark'>
                    <tr>
                        <th>التصنيف</th>
                        <th>بطاقة ائتمانية</th>
                        <th>تحويل بنكي</th>
                        <th>اجمالي</th>
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
