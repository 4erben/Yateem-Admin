import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import { BsDashLg } from 'react-icons/bs'
import { FaUserCheck, FaUserLock, FaUserTie } from 'react-icons/fa6'
import { GoMention } from 'react-icons/go'
import { IoPhonePortraitSharp } from 'react-icons/io5'

export default function Attendes() {
  return (
    <Row>
      <div className="card-body">
        <div className="card card-body p-2">
          <Row className='align-items-center py-3'>
            <Col className="col-1" ><FaUserTie className='text-muted opacity-25' size={50} /></Col>
            <Col className='col-11'>
              <div>
                <span className='ms-3'>مدير الموقع: </span>
                <span>علي احمد الدوسري</span>
              </div>
              <div className='quote-footer py-1'>
              <BsDashLg /> 
              <p className='mx-2'>
                <IoPhonePortraitSharp /> 
                الجوال: 9665414963407   
              </p>
              <p>
                <IoPhonePortraitSharp /> 
                بريد الاشعارات :
               <span><GoMention /> Ali_ahmed2030@gami.com@gmail.com</span> 
              </p>
              </div>
            </Col>
          </Row>        
        </div>
      </div>
      <div className="card-body">
        <div className="card card-body p-2">
          <Row className='align-items-center py-3'>
            <Col className="col-1" ><FaUserCheck className='text-muted opacity-25' size={50} /></Col>
            <Col className='col-11'>
              <div>
                <span className='ms-3'>المدير التنفيذي:</span>
                <span></span>
              </div>
              <div className='quote-footer py-1'>
              <BsDashLg /> 
              <p className='mx-2'>
                <IoPhonePortraitSharp /> 
                الجوال:    
              </p>
              </div>
            </Col>
          </Row>        
        </div>
      </div>
      <div className="card-body">
        <div className="card card-body p-2">
          <Row className='align-items-center py-3'>
            <Col className="col-1" ><FaUserLock className='text-muted opacity-25' size={50} /></Col>
            <Col className='col-11'>
              <div>
                <span className='ms-3'>المسؤل التقني</span>
                <span></span>
              </div>
              <div className='quote-footer py-1'>
              <BsDashLg /> 
              <p className='mx-2'>
                <IoPhonePortraitSharp /> 
                الجوال:    
              </p>
              </div>
            </Col>
          </Row>        
        </div>
      </div>
      <div className="card-body">
        <div className="card card-body p-2">
          <Row className='align-items-center py-3'>
            <Col className="col-1" ><FaUserLock className='text-muted opacity-25' size={50} /></Col>
            <Col className='col-11'>
              <div>
                <span className='ms-3'>حسابات شركات التسويق</span>
                <span></span>
              </div>
              <div className='quote-footer py-1'>
              <BsDashLg /> 
              <p className='mx-2'>
                 <GoMention />
              wefaqalmjd.2019@gmail.com 
              </p>
              </div>
            </Col>
          </Row>        
        </div>
      </div>
    </Row>
  )
}
