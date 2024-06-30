import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { createNewBanner } from '../Redux/Slices/bannerSlice';

export default function AddCarouselItem() {
  const dispatch = useDispatch();
  const [title , setTitle] = useState("");
  const [num , setNum] = useState("");
  const [image_url , setImage] = useState(null);
  const handleOnSubmit = (e)=>{
      e.preventDefault();
      dispatch(createNewBanner(title,image_url,num));
  }
  return (
    <Container fluid className=''>
      <Container fluid className='bg-white rounded py-3 px-4 border border-2'>
      <Row className='mt-4'>
        <Form onSubmit={handleOnSubmit}>
          <h5 >اضافة عنصر بانر</h5>
          <hr className='mt-0 mb-4'/>
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''>
              <Form.Label htmlFor='bannerName'>اسم البانر</Form.Label>
            </Col>
            <Col lg={10}> 
              <Form.Control id='bannerName' type='text' placeholder='ادخل اسم البانر'  name='bannerName' onChange={(e)=>{setTitle(e.target.value)}} required/>
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''>
              <Form.Label htmlFor='bannerNum'>ترتيب البانر</Form.Label>
            </Col>
            <Col lg={10}> 
              <Form.Control id='bannerNum' type='number' placeholder='ادخل ترتيب البانر'  name='bannerNum' onChange={(e)=>{setNum(e.target.value)}} required/>
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>الصورة</Form.Label>
            </Col>
            <Col lg={10}>
              <Form.Control id='bannerImage' type='file'  name='bannerImage' onChange={(e)=>{setImage(e.target.files[0])}} required />
              <Form.Label htmlFor='bannerImage' className='w-100 text-center mt-1 text-danger ' >
                <IoMdInformationCircle className='mx-1 fs-5'/>
                <small className='fw-light'>صورة نموذج العرض بمقاس 1600x578 px ويمكنكم استخدام مقاسات أخرى بعرض 1600 px وتوحيد أطوال البنرات</small>
              </Form.Label>
            </Col>
          </Form.Group>
          <Form.Group className='d-flex'>
            <Button className='me-auto' variant='success' type='submit'>حفظ</Button>
          </Form.Group>
        </Form>
      </Row>
      </Container>
    </Container>
  )
}
