import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCog } from 'react-icons/fa'
import { FaGoogle, FaLink, FaRegCreditCard, FaTextHeight } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'
import { MdFormatColorText } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <Container>
        <div className='card'>
            <h3>اعدادات</h3>
            <Row className='text-primary'>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary">
                <div className="text-center">
                    <Link to="generalSettings" className="list-icons-item text-primary-600">
                    <FaCog  size={30}/>
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">اعدادات عامة</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="linking" className="list-icons-item text-primary-600">
                    <FaLink size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">اعدادات ربط الخدمات</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="payment" className="list-icons-item text-primary-600">
                    <FaRegCreditCard size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">التحكم في طرق الدفع</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="seo" className="list-icons-item text-primary-600">
                    <FaGoogle size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">اعدادات SEO</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="messages" className="list-icons-item text-primary-600">
                    <MdFormatColorText size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">التحكم في الرسائل</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="text" className="list-icons-item text-primary-600">
                    <FaTextHeight size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">التحكم في النصوص</h4>
                    </Link>
                </div>
                </div>
            </Col>
            <Col lg={3} className="py-3">
                <div className="card card-body border-top-primary ">
                <div className="text-center">
                    <Link to="maintenance" className="list-icons-item text-primary-600">
                    <IoIosWarning size={30} />
                    <br />
                    <br />
                    <h4 className="m-0 font-weight-semibold">وضع الصيانة</h4>
                    </Link>
                </div>
                </div>
            </Col>
            
            </Row>
        </div>
    </Container>
  )
}
