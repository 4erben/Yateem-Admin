import React, { useState } from 'react';
import {Container , Row , Col} from "react-bootstrap";
import { CiCreditCard1, CiHeart } from 'react-icons/ci';
import { FiFileText } from "react-icons/fi";
import { IoIosColorPalette } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';
import { GoMention } from "react-icons/go";
import { Link, Outlet } from 'react-router-dom';
import "./association.css";

export default function Associtation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index);
      };
  return (
    <Container fluid  className='asscociation-page py-2 '> 
        <Row className='mx-0 px-0'> 
            <Col lg={3} md={3} className=''>
            <div class="card">
                    <div class="card-body text-center">
                        <div class="card-img-actions d-inline-block mb-3">
                            <a href="https://jod.azureedge.net/all/441009.jpeg" target='_blank' className="" data-popup="lightbox" rel="group">
                                <img class="img-fluid " src="https://jod.azureedge.net/all/441009.jpeg" width="170" height="170" alt=""/>
                            </a>
                        </div>
                        <h6 class="font-weight-black  mb-0 font-size-lg">وقف الضياء بمكة المكرمة</h6>
                        <span class="d-block text-muted font-size-sm">رقم ترخيص : 4161</span>
                    </div>
                </div>
            </Col>
            <Col lg={9} md={9} >
            <div className="card py-2">
                    <div className="d-flex justify-content-between px-3 py-2">
                        <h5 className=" ">بيانات الجمعية</h5>
                        <div className="">
                            <Link to="edit" className="btn btn-primary text-white"><LuPencil /> تعديل بيانات الجمعية</Link>
                        </div>
                    </div>
                    <div className="nav-tabs-responsive bg-light border-top ">
                        <div className="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0 overflow-x-auto">
                            <Link to="" className={`nav-link nav-item ${activeIndex === 0? "onActive":""}`} data-toggle="tab" onClick={()=>handleClick(0)}><FiFileText size={18} /> البيانات الأساسية</Link>
                            <Link to="course-attendes" className={`nav-link nav-item ${activeIndex === 1? "onActive":""}`} data-toggle="tab" onClick={()=>handleClick(1)}><GoMention size={18} /> بيانات التواصل</Link>
                            <Link to="course-schedule" className={`nav-link nav-item ${activeIndex === 2? "onActive":""}`} data-toggle="tab" onClick={()=>handleClick(2)}> <CiCreditCard1 size={18} /> الحسابات البنكية</Link>
                            <Link to="course-cats" className={`nav-link nav-item ${activeIndex === 3? "onActive":""}`} data-toggle="tab" onClick={()=>handleClick(3)}><CiHeart size={18} /> أقسام التبرعات </Link>
                          {/*   <Link to="themes" className={`nav-link nav-item ${activeIndex === 4? "onActive":""}`} data-toggle="tab" onClick={()=>handleClick(4)}><IoIosColorPalette size={18} /> الواجهة</Link> */}
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                    
                </div>
            </Col>
        </Row>
    </Container>
  )
}
