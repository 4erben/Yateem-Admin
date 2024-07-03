import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import  {Routes , Route, Link, useLocation, Navigate, useNavigate}  from "react-router-dom";
import  {Col, Container, Row} from "react-bootstrap"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { FaHome, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import LoginPage from './Pages/AuthPages/LoginPage.jsx';
import RegisterPage from './Pages/AuthPages/RegisterPage.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  setUser } from './Redux/Slices/authSlice';

import { getBanners } from './Redux/Slices/bannerSlice';
import { getProducts } from './Redux/Slices/cardSlice';
import { getChart, getPayments, getStats } from './Redux/Slices/statsSlice';
import PortPages from './Pages/WebsitePage/PortalPage/PortalPages.jsx';
import AddPortPage from './Pages/WebsitePage/PortalPage/components/AddPortPage.jsx';
import Logo from './Pages/LogoPage/Logo';
import Associtation from './Pages/AssociationPage/associtation';
import Overview from './Pages/AssociationPage/main-components/Overview';
import Attendes from './Pages/AssociationPage/main-components/Attendes';
import Cats from './Pages/AssociationPage/main-components/Cats';
import Schedule from './Pages/AssociationPage/main-components/Schedule';
import Themes from './Pages/AssociationPage/main-components/Themes';
import EditAssoc from './Pages/AssociationPage/EditAssoc';
import EditOverview from './Pages/AssociationPage/edit-components/EditOverview';
import EditAttendes from './Pages/AssociationPage/edit-components/EditAttendes';
import EditCats from './Pages/AssociationPage/edit-components/EditCats';
import EditSchedule from './Pages/AssociationPage/edit-components/EditSchedule';
import AddProject from './Pages/ProjectsPage/AddProject';
import EditProject from './Pages/ProjectsPage/EditProject';
import AllProjects from './Pages/ProjectsPage/AllProjects';
import BannersPage from './Pages/WebsitePage/BannersPage/BannersPage.jsx';
import AddCarouselItem from './Pages/WebsitePage/BannersPage/components/AddCarouselItem.jsx';
import EditCarouselItem from './Pages/WebsitePage/BannersPage/components/editCarouselItem.jsx';
import HomePage from './Pages/Homepage/HomePage.jsx';
import EditPortal from './Pages/WebsitePage/PortalPage/components/EditPortal.jsx';
import ReportPage from './Pages/generalReportPage/ReportPage.jsx';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  const localUser = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    
    if(!user && localUser){
      dispatch(setUser(localUser));
    }
    if(user){
      dispatch(getBanners());
      dispatch(getProducts());
      dispatch(getPayments());
      dispatch(getStats());
      dispatch(getChart());
    }
  },[user]);
  
  const handleGoBack= ()=> {
    navigate(-1);
  }
  const handleGoForward= ()=> {
    navigate(+1);
  }





  if(!localUser){
    return(
      <Routes>
        <Route path='/' element={ <LoginPage />}  />
        <Route path='/register' element={<RegisterPage />}  />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    )}
  return (
    
    <Container fluid className='px-0' dir='rtl'>
      
       <Row className='mx-0 px-0 header'>
        <Header />
      </Row>
      
     
      
      <Row className='mx-0 px-0'>
        <Sidebar/>
        
        
       
        {/* Main Info */}
        <Col className='px-0'>
        <Row className='py-3 px-4  bg-white'>
          <div className='fs-5 d-flex justify-content-between'>
            <div>
            <span className='mx-2 cursor-pointer' onClick={handleGoBack}> <FaRegArrowAltCircleRight /> </span>
            <span>الرئيسية - لوحة المعلومات</span>
            </div>
            <div className='cursor-pointer' onClick={handleGoForward}><FaRegArrowAltCircleLeft /> </div>
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
        <hr className='m-0'/>
          
        {/* Routes */}
        <Container fluid className='mx-0 px-0 py-4 bg-c-grey'>
            <Routes>
              <Route path='/' element={  <HomePage/>}/>
              <Route path='/website/banner' element={ <BannersPage/>}  />
              <Route path='/website/banner/add' element={ <AddCarouselItem/>}/>
              <Route path='/website/banner/modify'  element={ <EditCarouselItem/>}/>
              <Route path='/website/logo'  element={<Logo /> }/>
              <Route path='/website/logo/modify'  element={ <EditCarouselItem/> }/>
              <Route path='/website/portalPages'  element={ <PortPages/> }/>
              <Route path='/website/portalPages/add'  element={ <AddPortPage/> }/>
              <Route path='/website/portalPages/modify'  element={ <EditPortal/> }/>
              <Route path='/generalReport'  element={ <ReportPage /> }/>

              <Route path='/projects/add' element={<AddProject />} />
              <Route path='/projects' element={<AllProjects />} />
              <Route path='/projects/edit' element={<EditProject />} />
              <Route path='/association' element={<Associtation /> } >
                      <Route path='/association/' element={<Overview />} />
                      <Route path='/association/course-attendes' element={<Attendes />} />
                      <Route path='/association/course-cats' element={<Cats />} />
                      <Route path='/association/course-schedule' element={<Schedule />} />
                      <Route path='/association/themes' element={<Themes />} />
              </Route>
              <Route path='/association/edit' element={<EditAssoc /> }>
                      <Route path='/association/edit' element={<EditOverview />} />
                      <Route path='/association/edit/course-attendes' element={<EditAttendes />} />
                      <Route path='/association/edit/course-cats' element={<EditCats />} />
                      <Route path='/association/edit/course-schedule' element={<EditSchedule />} />
                      <Route path='/association/edit/themes' element={<Themes />} />
              </Route>
            </Routes>
        </Container>
          </Col>
      </Row>

    </Container>
   
  )
}

export default App
