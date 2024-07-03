import React, { useState } from 'react'
import { Button, Col, Container, Form, Row ,Alert} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { removeCard } from '../../Redux/Slices/cardSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function AllProjects() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ cardId , setCardId] = useState(null);
    const cards = useSelector(state=>state.card.cards);
    const status = useSelector(state=>state.card.status);
    const isLoading = useSelector(state=>state.card.isLoading);
    const error = useSelector(state=>state.card.err);
    const handleEdit = (card)=>{
        navigate("/projects/edit",{state:{card}})
    }
    const handleDelete = (id)=>{
        dispatch(removeCard({cardId: id}))
    }
  return (
    <Container fluid>
        <Container fluid className='bg-white rounded py-3 px-4 border bordr-2'>
            <Row className='pb-3'>
                <h6 className='fw-bold'>جميع المشاريع الحالية</h6>
            </Row>
            <Row className='w-100'>
            <Col className='col-12 '>
            <table className='table  text-end'>
                <thead>
                    <tr role='row text-center'>
                        <th>رقم الكارت</th>
                        <th>اسم الكارت</th>
                        <th>ما تم جمعة</th>
                        <th >الصنف</th>
                        <th className='text-center'>الخيارات</th>
                    </tr>
                </thead>
                <tbody>
                    {cards && cards.map((caro)=>{
                        return(
                            <tr key={caro.id}>
                                <td>{caro.id}</td>
                                <td>{caro.title}</td>
                                <td>{caro.gained}</td>
                                <td>{caro.category}</td>
                                <td className='d-flex justify-content-around'>
                                    <Button  className='mx-1 btn btn-info text-white' onClick={()=>{handleEdit(caro)}}>تعديل</Button>
                                    <Button  className='btn btn-danger text-white' onClick={()=>{handleDelete(caro.id)}}>حذف</Button>
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
