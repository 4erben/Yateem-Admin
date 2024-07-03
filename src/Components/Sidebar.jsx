import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { CgWebsite } from "react-icons/cg";
import { IoMdHome, IoMdLink } from "react-icons/io";
import { FaArrowRight, FaBuilding, FaCircleExclamation, FaCommentSms, FaDollarSign, FaEnvelope, FaFolder, FaViacoin } from "react-icons/fa6";
import { FaCommentAlt, FaExpandArrowsAlt } from "react-icons/fa";
import { LuShrink } from "react-icons/lu";
import { GrArticle, GrGallery } from "react-icons/gr";
import { CiBitcoin, CiDollar, CiGift, CiSettings, CiShoppingCart } from "react-icons/ci";
import { HiDocumentAdd } from "react-icons/hi";
import { HiDocumentRemove } from "react-icons/hi";
import { MdArticle, MdEditDocument, MdOutlineQueryStats } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiSolidCoinStack } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { LiaComments } from "react-icons/lia";
import NavItemMenu from './NavItem';
import { switchIcons, switchMobile } from '../Redux/Slices/AppSlice';
import { Link, useNavigate } from 'react-router-dom';
import { IoPeopleSharp, IoPhonePortraitSharp, IoQrCodeOutline, IoSettings } from 'react-icons/io5';
import { PiArticle } from "react-icons/pi";
import menus from "../data/data.jsx";

export default function Sidebar() {
    const { websiteMenu , projectsMenu  , giftsMenu , donationsMenu , transfersMenu , donorsMenu , commentsMenu , messagesMenu , adsMenu , reqMenu , supportMenu , associationMenu } = menus;
    const isIconsOn = useSelector(state=>state.app.isIconOn);
    const isMobileOn = useSelector(state=>state.app.isMobileOn);

    const dispatch = useDispatch();
    const [isExpanded , setExpanded] = useState(false);
    const handleExpanded = ()=>{
        setExpanded(!isExpanded);
    }
    const handleMobile = ()=>{
        dispatch(switchMobile());
        dispatch(switchIcons());
    }

  return (
    <Col lg={3} className={`px-0 d-md-block d-none sidebar  ${isIconsOn?"toggled":""} ${isMobileOn?"mobile":""} ${isExpanded?"expanded":""}`}>
    <Container fluid className='text-white px-0'>
        <div className='mobile-nav'>
            <span onClick={handleMobile}><FaArrowRight /></span>
            <span>Navigation</span>
            <span onClick={handleExpanded}>{!isExpanded?<FaExpandArrowsAlt />:<LuShrink/> } </span>
        </div>
        <div className='sidebar-container d-flex flex-column  justify-content-center'>
            <div className='nav-item-header mx-4 fs-6 text-secondary fw-bold'>
                {!isIconsOn?<i className="fa-solid fa-ellipsis"></i>:<span>القائمة</span>}
            </div>
            <Link className='nav-item' to="/">
               <span className='nav-item-icon'> <IoMdHome className=''/></span>
               <span className='nav-item-text'> لوحة المعلومات  </span>
            </Link>
            <NavItemMenu title="جمعيتي" titleIcon={<FaBuilding />} itemsMenu ={associationMenu}/>
            <NavItemMenu title="المشاريع و الانشطة" titleIcon={<CiHeart/>} itemsMenu ={projectsMenu}/>
            <NavItemMenu title="الاهداءات" titleIcon={<CiGift/>} itemsMenu ={giftsMenu}/>
            <NavItemMenu title="التبرعات" titleIcon={<BiSolidCoinStack/>} itemsMenu ={donationsMenu}/>
            <NavItemMenu title="ادارة التحويلات" titleIcon={<BiSolidCoinStack/>} itemsMenu ={transfersMenu}/>
            
            <Link className='nav-item' to="/generalReport">
               <span className='nav-item-icon'> <MdOutlineQueryStats /></span>
               <span className='nav-item-text'> الاحصائيات </span>
            </Link>
            <Link className='nav-item' to="/donations/cart">
               <span className='nav-item-icon'> <CiShoppingCart /></span>
               <span className='nav-item-text'> السلات المتروكة</span>
            </Link>
            <NavItemMenu title="المتبرعين" titleIcon={<BsFillPeopleFill />} itemsMenu ={donorsMenu}/>
            <NavItemMenu title="تعليقات و تقيمات" titleIcon={<FaCommentAlt />} itemsMenu ={commentsMenu}/>
            <NavItemMenu title="روابط الاعلانات" titleIcon={<IoMdLink />} itemsMenu ={adsMenu}/>
            <Link className='nav-item' to="/settings">
               <span className='nav-item-icon'> <IoSettings /></span>
               <span className='nav-item-text'> الاعدادات</span>
            </Link>
            <NavItemMenu title="المراسلات" titleIcon={<FaEnvelope />} itemsMenu ={messagesMenu}/>
            <NavItemMenu title="الموقع الاكتروني" titleIcon={<CgWebsite/>} itemsMenu ={websiteMenu}/>
            <NavItemMenu title="الطلبات" titleIcon={<PiArticle />} itemsMenu ={reqMenu}/>
            <Link className='nav-item' to="/systemUpdate">
               <span className='nav-item-icon'> <FaCircleExclamation /></span>
               <span className='nav-item-text'> قائمة التنبيهات</span>
            </Link>
            <NavItemMenu title="الدعم الفني" titleIcon={<PiArticle />} itemsMenu ={supportMenu}/>
            <Link className='nav-item' to="/permissions">
               <span className='nav-item-icon'> <IoPeopleSharp /></span>
               <span className='nav-item-text'> الصلاحيات و المستخدمين</span>
            </Link>
        </div>
    </Container>
    </Col>
  )
}
