import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { TiDocumentAdd } from "react-icons/ti";

export default function BannersPage() {
    const carousels = [
        {
            no: 1,
            name: "مشروع التطبيق الجديد",
            mainAddress: "الشارع الرئيسي، المدينة الكبرى",
            subAddress: "الطابق الثاني، مكتب رقم 203",
            modifyLink: "https://example.com/modify/1",
            deleteLink: "https://example.com/delete/1"
        },
        {
            no: 2,
            name: "حملة الصيف الكبرى",
            mainAddress: "ميدان الشهداء، الواحة الكبرى",
            subAddress: "قاعة المؤتمرات الكبرى",
            modifyLink: "https://example.com/modify/2",
            deleteLink: "https://example.com/delete/2"
        },
        {
            no: 3,
            name: "معرض الفنون الحديثة",
            mainAddress: "شارع الفنون، الحي الثقافي",
            subAddress: "القاعة الرئيسية",
            modifyLink: "https://example.com/modify/3",
            deleteLink: "https://example.com/delete/3"
        },
        {
            no: 4,
            name: "دورة التسويق الرقمي",
            mainAddress: "شارع المعرفة، المدينة الذكية",
            subAddress: "مركز التعلم المستدام",
            modifyLink: "https://example.com/modify/4",
            deleteLink: "https://example.com/delete/4"
        },
        {
            no: 5,
            name: "مهرجان الأفلام الدولي",
            mainAddress: "ساحة السينما، البلدة القديمة",
            subAddress: "المسرح الرئيسي",
            modifyLink: "https://example.com/modify/5",
            deleteLink: "https://example.com/delete/5"
        }
    ];
  return (
    <Container fluid className='banner'>
        <Container className='bg-white rounded py-4 banner-table'>
        <div className='d-flex py-2 px-3 mb-3'>
            <Col className='col-8'>
                <span>بانر الموقع الاكتروني</span>
            </Col>
            <Col className='col-4 d-flex justify-content-between '>
                <Link to="carouselItem" className=' mx-1 btn btn-info text-white'>
                <TiDocumentAdd className='fs-5'/>
                <span className='mx-1'>اضافة بانر</span>
                </Link>
                <Link  className='btn btn-success text-white '>
                <TiDocumentAdd/>
                <span className='mx-1'>ترتيب العناصر</span>
                </Link>
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
                    {carousels.map((caro)=>{
                        return(
                            <tr key={caro.no}>
                                <td>{caro.no}</td>
                                <td>{caro.name}</td>
                                <td>{caro.mainAddress}</td>
                                <td>{caro.subAddress}</td>
                                <td className='d-flex justify-content-around'>
                                    <Link  to="modifyCarousel" className='mx-1 btn btn-info text-white'>تعديل</Link>
                                    <Button to="deleteCarousel" className='btn btn-danger text-white'>حذف</Button>
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
