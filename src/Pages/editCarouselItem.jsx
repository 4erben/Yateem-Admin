import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { createNewBanner, editBanner } from '../Redux/Slices/bannerSlice';

export default function EditCarouselItem() {
    const isLoading = useSelector(state=>state.banner.isLoading);
    const status = useSelector(state=> state.banner.status);
    const dispatch = useDispatch();
    const [title , setTitle] = useState("");
    const [bannerId , setBannerId] = useState(null);
    const [image , setImage] = useState(null);
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(editBanner(title,image,bannerId));
    }
  return (
    <Container fluid className=''>
      <Container fluid className='bg-white rounded py-3 px-4 border border-2'>
      <Row className='mt-4'>
        <Form onSubmit={handleOnSubmit}>
          <h5 >تعديل عنصر بانر</h5>
          <hr className='mt-0 mb-4'/>
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''>
              <Form.Label htmlFor='bannerId'>رقم البانر</Form.Label>
            </Col>
            <Col lg={10}> 
              <Form.Control id='bannerId' type='text' placeholder='ادخل  رقم البانر'  name='bannerName' onChange={(e)=>{setBannerId(e.target.value)}} required/>
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''>
              <Form.Label htmlFor='bannerName'>اسم البانر</Form.Label>
            </Col>
            <Col lg={10}> 
              <Form.Control id='bannerName' type='text' placeholder='ادخل اسم البانر'  name='bannerName' onChange={(e)=>{setTitle(e.target.value)}} required/>
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
            <Button className='me-auto' variant='success' type='submit' disabled={isLoading}>حفظ</Button>
          </Form.Group>
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
