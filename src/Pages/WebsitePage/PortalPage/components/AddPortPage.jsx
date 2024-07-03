import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import EditorComponent from '../smallComponents/EditorComponent';

export default function AddPortPage() {
  const dispatch = useDispatch();
  const [title , setTitle] = useState("");
  const [link , setLink] = useState("");
  const [arrange , setArrange] = useState("");
  const [content, setContent] = useState('');
  const handleOnSubmit = (e)=>{
      e.preventDefault();
      dispatch();
  }
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <Container fluid className=''>
      <Container fluid className='bg-white rounded py-3 px-4 border border-2'>
      <Row className='mt-4'>
        <Form onSubmit={handleOnSubmit}>
          <h5 >انشاء صفحة</h5>
          <hr className='mt-0 mb-4'/>
          <Form.Group className='row mb-4'>
            <Col lg={2} className=''>
              <Form.Label htmlFor='title'>عنوان الصفحة</Form.Label>
            </Col>
            <Col lg={10}> 
              <Form.Control id='title' type='text' placeholder='عنوان الصفحة'  name='title' onChange={(e)=>{setTitle(e.target.value)}} required/>
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>رابط خارجي</Form.Label>
            </Col>
            <Col lg={10}>
              <Form.Control id='link' type='text'  name='link' onChange={(e)=>{setLink(e.target.value)}} required />
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>ترتيب الصفحة</Form.Label>
            </Col>
            <Col lg={10}>
              <Form.Control id='arrange' type='number'  name='arrange' onChange={(e)=>{setArrange(e.target.value)}} required />
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>اظهار في القائمة العلوية</Form.Label>
            </Col>
            <Col lg={10}>
              <input type='checkbox' required />
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>اظهار في القائمة السفلية</Form.Label>
            </Col>
            <Col lg={10}>
              <input type='checkbox' required />
            </Col>
          </Form.Group>
          <Form.Group className='row mb-4'>
            <Col lg={2}>
              <Form.Label>محتوي الصفحة</Form.Label>
            </Col>
            <Col lg={10} className='' >
            <EditorComponent initialValue={content} onChange={handleEditorChange}  />
            
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
