import React from 'react'
import TableComponent from '../../../Components/TableComponent'
import { Container , Row , Col , Button } from 'react-bootstrap'
import { TiDocumentAdd } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'

export default function PortalPages({data}) {
    data = [ {id : 1, title:"asdasd"}];
    const navigate = useNavigate();
    const handleModify = (data)=>{
        navigate("modify",{state:{data:data,itemName: "الموقع الاكتروني",pageName:"صفحات الموقع" , subName: "تعديل صفحة"}})
    }
  return (
    <Container fluid className='banner'>
    <Container className='bg-white rounded py-4 banner-table' fluid>
    <div className='d-flex py-2 px-3 mb-3'>
        <Col className='col-8'>
            <span>صفحات الموقع الاكتروني</span>
        </Col>
        <Col className='col-4 d-flex justify-content-between '>
            <Link to="add" className=' mx-1 btn btn-info text-white' state={{itemName: "الموقع الاكتروني",pageName:"صفحات الموقع" , subName: "اضافة صفحة"}}>
            <TiDocumentAdd className='fs-5'/>
            <span className='mx-1'>اضافة صفحة للموقع</span>
            </Link>
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
                                <Button  to="modify" className='mx-1 btn btn-info text-white' onClick={()=>handleModify(caro)}>تعديل</Button>
                                <Button to="deleteCarousel" className='btn btn-danger text-white' onClick={()=>handleDelete(caro.id)}>حذف</Button>
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
