import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {  FaSearch } from 'react-icons/fa';
import { MdNotes } from 'react-icons/md';
import "./report.css";


export default function ReportPage() {
    const [startDate ,setStartDate] = useState("");
    const [endDate ,setEndDate] = useState("");
  return (
    <Container fluid className='reports-page'>
        <div className="card">
            <div className="card-header bg-white">
                التقارير
            </div>
            <div className="card-body">
                <Row className=' justify-content-center align-items-center py-2'>
                    <Col lg={3} md={3} sm={3} xs={6} className='text-center fw-bold fs-8'>
                        <Form.Control   id="StartDate" name="StartDate" placeholder="من تاريخ"  type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={6} className='text-center fw-bold fs-8 '>
                        <Form.Control   id="EndDate" name="EndDate" placeholder="حتي تاريخ"  type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={6} className='text-center'>
                        <Button variant='info' className='text-white'>
                            <FaSearch  />
                            <span className='mx-2'>بحث</span> 
                        </Button>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={6} className='text-center'>
                        <Button variant='info' className='text-white '>
                            <MdNotes />
                            <span className='mx-2'>طباعة</span> 
                        </Button>
                    </Col>
                </Row>
                <Row>
                <Col lg={6} md={6} sm={6} xl={6} >
                    <div className="card">
                        <div className="card-header ">
                            <h5 className="card-title">التبرعات</h5>
                        </div>
                        <div className="card-body ">
                            <div className="row text-center">
                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">2 ريال</h5>
                                        <span className="text-muted font-size-sm">اجمالي التبرعات</span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">1 عملية</h5>
                                        <span className="text-muted font-size-sm">عمليات التبرع</span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">1 متبرع</h5>
                                        <span className="text-muted font-size-sm">عدد المتبرعين</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xl={6}>
                    <div className="card">
                        <div className="card-header ">
                            <h5 className="card-title">متوسط عمليات التبرع</h5>
                        </div>
                        <div className="card-body ">
                            <div className="row text-center justify-content-center">
                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">2</h5>
                                        <span className="text-muted font-size-sm">ريال</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* Sales Stats */}
                <Col lg={6} md={6} sm={6} xl={6}>
                <div className="card">
                    <div className="card-header header-elements-inline">
                        <h5 className="card-title">الأيام الأكثر طلباً</h5>
                        <div className="header-elements">
                            <div className="list-icons">
                            </div>
                        </div>
                    </div>
                    <div className="card-body py-0">
                        <div className="row text-center">
                            <div className="col-12">
                                <div className="mb-3">
                                    <h5 className="font-weight-semibold mb-0">1 طلبات</h5>
                                    <span className="text-muted font-size-sm">السبت - 29 يونيو 2024 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} md={6} sm={6} xl={6}>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">الساعات الأكثر طلباً</h5>
                        </div>
                        <div className="card-body py-0">
                            <div className="row text-center">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">1 طلبات</h5>
                                        <span className="text-muted font-size-sm">04 - صباحا </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xl={6}>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">المشروعات الأكثر تبرعاً</h5>
                            
                        </div>
                        <div className="card-body py-0">
                            <div className="row text-center">
                                <div className="col-12">
                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th>المشروع</th>
                                                <th> اجمالي التبرعات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                    <tr>
                                                        <th>سقيا الماء</th>
                                                        <th> 2</th>
                                                    </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xl={6}>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">المتبرعين الأكثر دفعاً</h5>
                            
                        </div>
                        <div className="card-body py-0">
                            <div className="row text-center">
                                <div className="col-12">
                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th>رقم جوال المتبرع</th>
                                                <th> اجمالي التبرعات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                    <tr>
                                                        <th>966562110906</th>
                                                        <th> 2</th>
                                                    </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xl={6}>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">المتبرعين الأكثر طلباً</h5>
                            <div className="header-elements">
                                <div className="list-icons">
                                </div>
                            </div>
                        </div>
                        <div className="card-body py-0">
                            <div className="row text-center">
                                <div className="col-12">
                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th>رقم جوال المتبرع</th>
                                                <th> عدد الطلبات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                    <tr>
                                                        <th>966562110906</th>
                                                        <th> 1</th>
                                                    </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
        </div>
    </Container>
  )
}
