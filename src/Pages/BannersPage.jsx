import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { TiDocumentAdd } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { removeBanner } from '../Redux/Slices/bannerSlice';


export default function BannersPage() {
    const dispatch = useDispatch();
    const banners = useSelector(state=>state.banner.banners);


    console.log(banners);

  return (
    <Container fluid className='banner'>
        <Container className='bg-white rounded py-4 banner-table'>
        <div className='d-flex py-2 px-3 mb-3'>
            <Col className='col-8'>
                <span>بانر الموقع الاكتروني</span>
            </Col>
            <Col className='col-4 d-flex justify-content-between '>
                <Link to="add" className=' mx-1 btn btn-info text-white'>
                <TiDocumentAdd className='fs-5'/>
                <span className='mx-1'>اضافة بانر</span>
                </Link>
                {/* <Link  className='btn btn-success text-white '>
                <TiDocumentAdd/>
                <span className='mx-1'>ترتيب العناصر</span>
                </Link> */}
            </Col>
        </div>
        <Row className='w-100'>
            <Col className='col-12 '>
            <table className='table  text-end'>
                <thead>
                    <tr role='row'>
                        <th>#</th>
                        <th>اسم البانر</th>
                        <th>العنوان الرئيسي</th>
                        <th>العنوان الفرعي</th>
                        <th>الخيارات</th>
                    </tr>
                </thead>
                <tbody>
                    {banners && banners.map((caro)=>{
                        return(
                            <tr key={caro.id}>
                                <td>{caro.id}</td>
                                <td>{caro.title}</td>
                                <td></td>
                                <td></td>
                                <td className='d-flex justify-content-around'>
                                    <Link  to="modify" className='mx-1 btn btn-info text-white'>تعديل</Link>
                                    <Button to="deleteCarousel" className='btn btn-danger text-white' onClick={()=>{dispatch(removeBanner({bannerId: caro.id}))}}>حذف</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}
