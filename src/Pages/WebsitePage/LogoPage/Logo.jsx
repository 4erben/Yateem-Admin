import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { editLogo } from '../../../Redux/Slices/logoSlice';

export default function Logo() {
    const isLoading = useSelector(state=>state.banner.isLoading);
    const status = useSelector(state=> state.banner.status);
    const dispatch = useDispatch();
    const [image , setImage] = useState(null);
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(editLogo({image}))
    }
  return (
    <Container fluid className=''>
    <Container fluid className='bg-white rounded py-3 px-4 border border-2'>
    <Row className='mt-4'>
      <Form onSubmit={handleOnSubmit}>
        <h5 >تعديل اللوجو</h5>
        <hr className='mt-0 mb-4'/>
        <Form.Group className='row mb-4'>
          <Col lg={2}>
            <Form.Label>الصورة</Form.Label>
          </Col>
          <Col lg={10}>
            <Form.Control id='logoImage' type='file'  name='logoImage' onChange={(e)=>{setImage(e.target.files[0])}} required />
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
