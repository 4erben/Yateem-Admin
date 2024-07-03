import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useDispatch , useSelector } from 'react-redux';
import { createNewCard } from '../../Redux/Slices/cardSlice';

export default function AddProject() {

    const [title, setTitle] = useState(" ");
    const [totalMoney, setTotalMoney] = useState(0);
    const [gained, setGainedMoney] = useState(0);
    const [category, setCategory] = useState(" ");

    const [img, setImageFile] = useState(null);

    const [Sahm1, setSahm1] = useState(" ");
    const [Sahm2, setSahm2] = useState(" ");
    const [Sahm3, setSahm3] = useState(" ");

    const dispatch = useDispatch();
    const status = useSelector(state=>state.card.status);
    const isLoading = useSelector(state=>state.card.isLoading);
    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        dispatch(createNewCard({title,totalMoney,gained,category,img,Sahm1,Sahm2,Sahm3}));
    }
  return (
    <Container fluid>
        <Container fluid className='bg-white rounded py-3 px-4 border bordr-2'>
            <Row>
                <h6>اضافة مشروع</h6>
            </Row>
            <Row className='mt-5'>
                <Form onSubmit={handleOnSubmit}>
                    <Row>
                        {/* Right Column */}
                    <Col lg={6} className=''>
                    <Row className='my-2'>
                        <div className='d-flex align-items-center '>
                        <IoDocumentTextOutline  className='ms-3'/>
                        <span>بيانات الاهداءات</span>
                        </div>
                        <hr />
                    </Row>

                    <Form.Group className='row my-3 align-items-center'>
                        <Col lg={4}>
                            <Form.Label className='text-nowrap'>العنوان علي المنصة<span className='text-danger fw-bold'>*</span></Form.Label>
                        </Col>
                        <Col lg={8} className='d-flex jusitfy-content'>
                            <Form.Control  type='text' name='title'  onChange={(e)=>{setTitle(e.target.value)}} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className='row my-3 align-items-center'>
                        <Col lg={4}>
                            <Form.Label className='text-nowrap'>المبلغ المطلوب<span className='text-danger fw-bold'>*</span></Form.Label>
                        </Col>
                        <Col lg={8} className='d-flex jusitfy-content'>
                            <Form.Control  type='number' name='totalMoney'  onChange={(e)=>{setTotalMoney(e.target.value)}} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className='row my-3 align-items-center'>
                        <Col lg={4}>
                            <Form.Label className='text-nowrap'>التصنيف<span className='text-danger fw-bold'>*</span></Form.Label>
                        </Col>
                        <Col lg={8} className='d-flex jusitfy-content'>
                        <select className='form-control' onChange={(e)=>{setCategory(e.target.value)}} required>
                            <option value="مباني">مباني</option>
                            <option value="سقيا الماء">سقيا الماء</option>
                            <option value="كفالات">كفالات</option>
                            <option value="الفقراء">الفقراء</option>
                        </select>
                        </Col>
                    </Form.Group>

                    </Col>
                    {/* Left Column */}
                    <Col lg={6}>
                    <Row className='my-2'>
                        <div className='d-flex align-items-center '>
                        <FaHeart className='ms-3'/>
                        <span>اعدادات الاهداء</span>
                        </div>
                        <hr />
                    </Row>
    
                    <Form.Group className='row my-3 align-items-center'>
                        <Col lg={4} className=''>
                        <Form.Label>اضافة تبرعات سابقة</Form.Label>
                        </Col>
                        <Col lg={8}>
                            <Form.Control  type='number' name='gainedMoney'  onChange={(e)=>{setGainedMoney(e.target.value)}} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className='row my-3 align-items-center'>
                        <Col lg={4} className=''>
                        <Form.Label>الصورة الرمزية</Form.Label>
                        </Col>
                        <Col lg={8}>
                            <Form.Control  type='file' name='img'  onChange={(e)=>{setImageFile(e.target.files[0])}} required/>
                        </Col>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row className='mb-3 justify-content-center'>
                    <Col lg={6}><Form.Group className='row my-3 align-items-center justify-content-center'>
                        <Col lg={4} className=''>
                            <Form.Label>اسم السهم</Form.Label>
                        </Col>
                        <Col lg={8}>
                            <Form.Control  type='text' name='Sahm1'  onChange={(e)=>{setSahm1(e.target.value)}} required/>
                    </Col>
                    </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className='row my-3 align-items-center justify-content-center'>
                        <Col lg={4} className=''>
                            <Form.Label>اسم السهمين</Form.Label>
                        </Col>
                        <Col lg={8}>
                            <Form.Control  type='text' name='Sahm2'  onChange={(e)=>{setSahm2(e.target.value)}} required/>
                    </Col>
                    </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className='row my-3 align-items-center justify-content-center'>
                        <Col lg={4} className=''>
                            <Form.Label>اسم  ثلاث اسهم</Form.Label>
                        </Col>
                        <Col lg={8}>
                            <Form.Control  type='text' name='Sahm3'  onChange={(e)=>{setSahm3(e.target.value)}} required/>
                    </Col>
                    </Form.Group>
                    </Col>
                    
                    </Row>
                    <Row > 
                        <Col className='d-flex justify-content-center'>
                            <Button type='submit' variant='success' > حفظ</Button>
                        </Col>
                    </Row>
                    { status &&
                        <Row className='my-3 justify-content-center text-center'>
                            <Col lg={8}>
                            {
                                status === "success" ? <Alert variant="success">تم الحفظ</Alert> :
                                status === "failed" ? <Alert variant="danger">لم يتم الحفظ</Alert>:
                                null
                            }
                            </Col>
                            
                        </Row>
                    }
                </Form>
            </Row>
        </Container>
    </Container>
  )
}
