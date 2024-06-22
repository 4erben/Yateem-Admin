import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import  {Routes , Route, Link, useLocation}  from "react-router-dom";
import  {Col, Container, Row} from "react-bootstrap"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import { FaHome, FaRegArrowAltCircleRight } from 'react-icons/fa';
import BannersPage from './Pages/BannersPage';
import AddCarouselItem from './Pages/AddCarouselItem';


function App() {
  const location = useLocation();

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
        <hr className='m-0'/>
        {/* Routes */}
        <Container fluid className='mx-0 px-0 py-4 bg-c-grey'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/banner' element={<BannersPage/>}/>
              <Route path='/banner/carouselItem' element={ <AddCarouselItem/>}/>
            </Routes>
        </Container>
          </Col>
      </Row>

    </Container>
  )
}

export default App
