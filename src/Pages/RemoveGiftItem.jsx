import React, { useState } from 'react'
import { Button, Col, Container, Form, Row ,Alert} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { removeCard } from '../Redux/Slices/cardSlice';
import { Link } from 'react-router-dom';

export default function RemoveGiftItem() {
    const dispatch = useDispatch();
    const [ cardId , setCardId] = useState(null);
    const cards = useSelector(state=>state.card.cards);
    const status = useSelector(state=>state.card.status);
    const isLoading = useSelector(state=>state.card.isLoading);
    const error = useSelector(state=>state.card.err);
    const handleOnSubmit = (e)=>{
        dispatch(removeCard({cardId}));
    }
  return (
    <Container fluid>
        <Container fluid className='bg-white rounded py-3 px-4 border bordr-2'>
            <Row>
                <h6>حذف اهداء</h6>
            </Row>
            <Row className='w-100'>
            <Col className='col-12 '>
            <table className='table  text-end'>
                <thead>
                    <tr role='row text-center'>
                        <th>id</th>
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
                                    <Link  to="edit" className='mx-1 btn btn-info text-white'>تعديل</Link>
                                    <Button to="deleteCarousel" className='btn btn-danger text-white' onClick={()=>{dispatch(removeCard({cardId: caro.id}))}}>حذف</Button>
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
