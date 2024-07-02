import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import favIcon from "../../../assets/fav-icon.jpeg";
import license from "../../../assets/license.jpeg";

export default function EditOverview() {
  return (
    <div className='card-body'>
        <Row className='px-4'>

        
        <Form className='form-edit'>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>اسم الجمعية</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='اسم الجمعية' />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>رقم الترخيص</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='رقم الترخيص' />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>تاريخ انتهاء الترخيص</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='تاريخ انتهاء الترخيص' />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>مجالات العمل</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'   />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>الرقم الريدي</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='الرقم البريدي' />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>العنوان</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='العنوان' />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>الهاتف</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='tel'   />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>المدينة</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='المدينة'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>الموقع الاكتروني</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='الموقع الاكتروني'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>موقع التبرعات</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='email'  placeholder='موقع التبرعات'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>البريد الاكتروني</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='email'  placeholder='example@domain.com'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>رابط توثيق المتجر</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='رابط توثيق المتجر'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>نص تذييل الموقع</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='نص تذييل الموقع'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب سناب شات</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب سناب شات'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب الفيس بوك</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب الفيس بوك'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب تويتر</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب تويتر'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب يوتيوب</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب يوتيوب'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب الانستغرام</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب الانستغرام'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>حساب سناب شات</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='حساب سناب شات'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>رقم الواتساب</Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control type='text'  placeholder='رقم الواتساب'  />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>Fav Icon</Form.Label>
                    </Col>
                    <Col lg={3}>
                    <a href={favIcon} target='_blank' >
                        <img src={favIcon} className='img-fluid' style={{width : "80px"}}/>
                    </a>
                    </Col>
                    <Col lg={6}>
                        <Form.Control type='file'    />
                    </Col>
                </Form.Group>
               
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>صورة الترخيص</Form.Label>
                    </Col>
                    <Col lg={3}>
                    <a href={license} target='_blank' >
                        <img src={license} className='img-fluid' style={{width : "80px"}}/>
                    </a>
                    </Col>
                    <Col lg={6}>
                        <Form.Control type='file'    />
                    </Col>
                </Form.Group>
                <Form.Group className='row'>
                    <Col lg={3}>
                        <Form.Label>صورة توثيق المتجر</Form.Label>
                    </Col>
                    <Col lg={3}>
                    <a href="" target='_blank' >
                        <img src="" className='img-fluid' style={{width : "80px"}}/>
                    </a>
                    </Col>
                    <Col lg={6}>
                        <Form.Control type='file'    />
                    </Col>
                </Form.Group>
                <Form.Group className='d-flex align-items-center justify-content-end py-2' >
                    <Button variant='primary' className='fw-bold '>حفظ</Button>
                </Form.Group>
        </Form>
        </Row>
    </div>
  )
}
