import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { createNewBanner } from '../Redux/Slices/bannerSlice';

export default function AddCarouselItem() {
  const dispatch = useDispatch();
  const [title , setTitle] = useState("");
  const [image , setImage] = useState(null);
  const [imageUrl , setImageUrl] = useState("");
  const handleOnSubmit = (e)=>{
      e.preventDefault();
      dispatch(createNewBanner(title,image,imageUrl));
  }
  return (
    <Container fluid className=''>
      <Container fluid className='bg-white rounded py-3 px-4 border border-2'>
      <Row className='mt-4'>
        <Form onSubmit={handleOnSubmit}>
          <h5 >اضافة / تعديل عنصر بانر</h5>
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
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''><Form.Label htmlFor='imageLink'>اضافة رابط للصورة</Form.Label></Col>
            <Col lg={10}> <Form.Control id='imageLink' type='text' placeholder='يمكنك ترك الرابط فارغ'  name='imageLink' onChange={(e)=>{setImageUrl(e.target.value)}}/></Col>
          </Form.Group>
          <h5 className=' mt-5'>خيارات اضافية</h5>
          <hr className='m-0'/>
          <Form.Group className='row my-4'>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='mainAddress'>العنوان الرئيسي</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='mainAddress' type='text' name='mainAddress' />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='subAddress'>العنوان الثانوي</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='subAddress' type='text' name='subAddress' />
                </Col>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group className='row'>
            <Col lg={3}><Form.Label htmlFor='bannerDescription'>وصف مختصر</Form.Label></Col>
            <Col lg={9}><Form.Control type='text' id='bannerDescription' name='bannerDescription'/></Col>
          </Form.Group>
          <Form.Group className='row my-5'>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='firstButtonAddress'>عنوان الزر الاول</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='firstButtonAddress' type='text'  name='firstButtonAddress'/>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='firstButtonLink'>رابط الزر الاول</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='firstButtonLink' type='text' name='firstButtonLink' />
                </Col>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group className='row my-5'>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='secondButtonAddress'>عنوان الزر الثاني</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='secondButtonAddress' type='text' name='secondButtonAddress'  />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} className=''>
                  <Form.Label htmlFor='secondButtonLink'>رابط الزر الثاني</Form.Label>
                </Col>
                <Col lg={6} className=''>
                  <Form.Control id='secondButtonLink' type='text' name='secondButtonLink' />
                </Col>
              </Row>
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
