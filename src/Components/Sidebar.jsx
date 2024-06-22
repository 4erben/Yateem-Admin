import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { CgWebsite } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { LuShrink } from "react-icons/lu";

import NavItem from './NavItem';
import { switchIcons, switchMobile } from '../Redux/Slices/AppSlice';
import { Link } from 'react-router-dom';

export default function Sidebar() {
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
                <IoMdHome className='fs-5'/>
                {isIconsOn?<span>لوحة المعلومات</span>:null}
            </Link>
            <NavItem title="الموقع الاكتروني" icon={<CgWebsite/>}/>
        </div>
    </Container>
    </Col>
  )
}
