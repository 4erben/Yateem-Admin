import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaUserLock, FaUserTie } from 'react-icons/fa6'

export default function EditAttendes() {
  return (
    <div className="card-body">
        <Row>
            <Form>
                <Form.Group className='attendes-form'>
                    <p className='text-primary'>
                    <FaUserTie className='ms-3' />
                    <span>مدير الموقع</span>
                    </p>
                    <hr/>
                    <Row>
                        <Col lg={3}><Form.Label>الاسم</Form.Label></Col>
                        <Col lg={9}><Form.Control type='text' placeholder='الاسم' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>الجوال</Form.Label></Col>
                        <Col lg={9}><Form.Control type='tel' placeholder='05XXXXXXX' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>البريد الاكتروني</Form.Label></Col>
                        <Col lg={9}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>جوال الاشعارات</Form.Label></Col>
                        <Col lg={9}><Form.Control type='text' placeholder='05XXXXXXXX' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>تعفيل اشعار التحويل البنكي</Form.Label></Col>
                        <Col lg={9}><input type='checkbox' className='ms-3' /> <small>نعم</small></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>تفعيل اشعار عمليات الفيزا</Form.Label></Col>
                        <Col lg={9}><input type='checkbox' className='ms-3' /><small>نعم</small></Col>
                    </Row>
                </Form.Group>
                <Form.Group className='attendes-form'>
                    <p className='text-primary'>
                    <FaUserTie className='ms-3' />
                    <span>المدير التنفيذي</span>
                    </p>
                    <hr/>
                    <Row>
                        <Col lg={3}><Form.Label>الاسم</Form.Label></Col>
                        <Col lg={9}><Form.Control type='text' placeholder='الاسم' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>الجوال</Form.Label></Col>
                        <Col lg={9}><Form.Control type='tel' placeholder='05XXXXXXX' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>البريد الاكتروني</Form.Label></Col>
                        <Col lg={9}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                    </Row>

                </Form.Group>
                <Form.Group className='attendes-form'>
                    <p className='text-primary'>
                    <FaUserLock className='ms-3' />
                    <span>المسؤل التقني</span>
                    </p>
                    <hr/>
                    <Row>
                        <Col lg={3}><Form.Label>الاسم</Form.Label></Col>
                        <Col lg={9}><Form.Control type='text' placeholder='الاسم' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>الجوال</Form.Label></Col>
                        <Col lg={9}><Form.Control type='tel' placeholder='05XXXXXXX' /></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Label>البريد الاكتروني</Form.Label></Col>
                        <Col lg={9}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                    </Row>

                </Form.Group>
                <Form.Group className='attendes-form'>
                    <p className='text-primary'>
                    <FaUserLock className='ms-3' />
                    <span>حسابات شركات التسويق</span>
                    </p>
                    <hr/>
                    <Row>
                        <Col lg={4}><Form.Label>البريد الاكتروني للحساب التسويقي</Form.Label></Col>
                        <Col lg={4}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                        <Col lg={4}><small className='text-danger fs-10'>صاحب الحساب المضاف يضطلع على إحصائيات الأداء لمتجر الجمعية</small></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Label>البريد الاكتروني للحساب التسويقي</Form.Label></Col>
                        <Col lg={4}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                        <Col lg={4}><small className='text-danger fs-10'>صاحب الحساب المضاف يضطلع على إحصائيات الأداء لمتجر الجمعية</small></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Label>البريد الاكتروني للحساب التسويقي</Form.Label></Col>
                        <Col lg={4}><Form.Control type='email' placeholder='example@domain.com' /></Col>
                        <Col lg={4}><small className='text-danger fs-10'>صاحب الحساب المضاف يضطلع على إحصائيات الأداء لمتجر الجمعية</small></Col>
                    </Row>
                </Form.Group>
                <Form.Group className='d-flex justify-content-end pt-4'>
                    <Button type='submit' variant='primary'>حفظ</Button>
                </Form.Group>
            </Form>
        </Row>
    </div>
  )
}
