import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import  {Routes , Route, Link, useLocation, Navigate, redirect}  from "react-router-dom";
import  {Col, Container, Row} from "react-bootstrap"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import { FaHome, FaRegArrowAltCircleRight } from 'react-icons/fa';
import BannersPage from './Pages/BannersPage';
import AddCarouselItem from './Pages/AddCarouselItem';
import AddGiftItem from './Pages/AddGiftItem';
import LoginPage from './Pages/LoginPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './Redux/Slices/authSlice';
import RegisterPage from './Pages/RegisterPage';
import RemoveGiftItem from './Pages/RemoveGiftItem';
import EditGiftItem from './Pages/EditGiftItem';
import { getBanners } from './Redux/Slices/bannerSlice';
import EditCarouselItem from './Pages/editCarouselItem';
import { getProducts } from './Redux/Slices/cardSlice';


function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch(setUser(user));
      dispatch(getBanners());
      dispatch(getProducts());
    }
  },[])

  return (
    <Container fluid className='px-0' dir='rtl'>
      {user && 
       <Row className='mx-0 px-0 header'>
        <Header />
      </Row>
      }
     
      
      <Row className='mx-0 px-0'>
        {user &&  <Sidebar/>
        
        }
       
        {/* Main Info */}
        <Col className='px-0'>
        {user &&<><Row className='py-3 px-4  bg-white'>
          <div className='fs-5'>
            <span className='mx-2'> <FaRegArrowAltCircleRight /> </span>
            <span>الرئيسية - لوحة المعلومات</span>
          </div>
        </Row>
        <hr className='m-0'/>
        <Row className='py-3 px-4 align-items-center bg-c-lighter-grey mx-0'>
          <div >
            <span><FaHome/>  </span>
            <Link className='' to="/">الرئيسية</Link>
            <span className='mx-2'>/</span> 
            <span className='fs-7'> {location.pathname== "/"?"لوحة المعلومات":"بانر الموقع الاكتروني"}</span>
          </div>
        </Row>
        <hr className='m-0'/></> }
          
        {/* Routes */}
        <Container fluid className='mx-0 px-0 py-4 bg-c-grey'>
            <Routes>
              <Route path='/' element={ user ? <HomePage/>:
                <Navigate to="/login"/>  
            }
              />
              <Route path='/banner' element={user ? <BannersPage/>: <Navigate to="/login"/>}  />
              <Route path='/banner/add' element={user? <AddCarouselItem/> : <Navigate to="/login" />}/>
              <Route path='/banner/modify' element={user? <EditCarouselItem/> : <Navigate to="/login" />}/>
              <Route path='/carts/add' element={user?<AddGiftItem />: <Navigate to="/login" />} />
              <Route path='/carts/remove' element={user?<RemoveGiftItem />: <Navigate to="/login" />} />
              <Route path='/carts/edit' element={user?<EditGiftItem />: <Navigate to="/login" />} />
              <Route path='/login'  element={!user? <LoginPage />: <Navigate to="/"/>}/>
              <Route path='/register'  element={!user? <RegisterPage />: <Navigate to="/"/>}/>
            </Routes>
        </Container>
          </Col>
      </Row>

    </Container>
  )
}

export default App
