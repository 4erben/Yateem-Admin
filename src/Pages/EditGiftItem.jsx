import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editCard } from '../Redux/Slices/cardSlice';

export default function EditGiftItem() {
    const dispatch = useDispatch();
    const [ cardId , setCardId] = useState(null);
    const [ title , setTitle] = useState("");
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(editCard({cardId,title}));
    }
  return (
    <Container fluid>
        <Container fluid className='bg-white rounded py-3 px-4 border bordr-2'>
            <Row>
                <h6>تعديل الاهداء</h6>
            </Row>
            <Row className='mt-5'>
                <Form onSubmit={handleOnSubmit}>
                    <Row>
                        <Col lg={6}>
                        <Form.Label>ادخل رقم الاهداء</Form.Label>
                        </Col>
                        <Col lg={6}>
                        <Form.Control  type='text' onChange={(e)=>{setCardId(e.target.value)}} required/>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col lg={6}>
                        <Form.Label>ادخل العنوان الجديد</Form.Label>
                        </Col>
                        <Col lg={6}>
                        <Form.Control  type='text' onChange={(e)=>{setTitle(e.target.value)}} required/>
                        </Col>
                    </Row>
                    <Row className='mt-5'> 
                        <Col className='d-flex justify-content-center'>
                            <Button type='submit' variant='success'> حذف</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
           
        </Container>
    </Container>
  )
}
