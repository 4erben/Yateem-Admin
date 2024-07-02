import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBuilding, FaFacebookF, FaInstagram, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa6';
import license from "../../../assets/license.jpeg";
import { TiDocumentText } from 'react-icons/ti';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { IoPhonePortraitSharp } from 'react-icons/io5';

export default function Overview() {
  return (
    <Row className='py-3'>
      <Col lg={8}>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaBuilding /> اسم الجمعية </span>
        <span>وقف الضياء بمكة</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <TiDocumentText /> رقم الترخيص</span>
        <span>4161</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <TiDocumentText /> صورة الترخيص</span>
        <span><a href='https://jod.azureedge.net/all/329393.jpeg'  target='_blank'><img src={license} className='img-fluid'  style={{width: "50px"}}/> </a></span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaCalendarAlt /> تاريخ انتهاء الترخيص</span>
        <span>4161</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaCalendarAlt /> الرقم البريدي</span>
        <span>4161</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> العنوان</span>
        <span > مكة المكرمة <CiLocationOn className='text-primary'/>  </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> الهاتف</span>
        <span > مكة المكرمة <CiLocationOn className='text-primary'/>  </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> المدينة</span>
        <span > مكة  </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> الموقع الاكتروني </span>
        <span >   </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> البريد الاكتروني </span>
        <span >   </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <CiLocationOn /> رابط توثيق المتجر </span>
        <span >   </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <TiDocumentText /> صورة توثيق المتجر </span>
        <span >   </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2 text-start'>
        <span className='ms-2'> <FaFacebookF /> حساب الفيس بوك</span>
        <span className='text-start'> https://www.facebook.com/%D9%85%D8%A8%D9%86%D9%89-%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%A1-%D8%A8%D9%85%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D9%83%D8%B1%D9%85%D8%A9-110602938578121
        </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaTwitter /> حساب تويتر </span>
        <span >https://twitter.com/mabnaldia40</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaYoutube /> حساب يوتيوب</span>
        <span ></span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaInstagram/> حساب انستغرام </span>
        <span className='text-start'>https://www.instagram.com/mabnaaldiaa1/ </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <FaSnapchat /> حساب اسناب شات</span>
        <span className='text-start'>https://www.snapchat.com/add/waqfaldiya?share_id=K6eyDwoEr90&locale=ar-SA
        </span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> <IoPhonePortraitSharp /> رقم الواتس </span>
        <span >966558997676</span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> نبذة مختصرة</span>
        <span ></span>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <span> نص تذييل الموقع</span>
        <span ></span>
      </div>
      </Col>
   
    </Row>
  )
}
