import React from 'react'
import TableComponent from '../Components/TableComponent'
import { Container , Row , Col , Button } from 'react-bootstrap'
import { TiDocumentAdd } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function PortPages({data}) {
    data = [ {no : 1, title:"asdasd"}]
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
                    <th>الترتيب</th>
                    <th>عنوان الصفحة</th>
                    <th>الخيارات</th>
                </tr>
            </thead>
            <tbody>
                { data?.map((caro)=>{
                    return(
                        <tr key={caro.id}>
                            <td>{caro.id}</td>
                            <td>{caro.title}</td>
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
