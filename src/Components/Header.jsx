import React from 'react'
import { Button, Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import AlarmIcon from './AlarmIcon'
import { useDispatch, useSelector } from 'react-redux'
import { switchIcons, switchMobile } from '../Redux/Slices/AppSlice';
import { logOut } from '../Redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const user = useSelector(state=>state.auth.user);
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSwitchIcons = ()=>{
        dispatch(switchIcons());
    }
    const handleSideBar = ()=>{
      dispatch(switchIcons());
      dispatch(switchMobile());

    }
    const handleLogOut = ()=>{
      dispatch(logOut());
      navigate("/")
    }
  return (
    <header className='px-0'>
    <Navbar expand="md" className="bg-c-dark text-white px-2 py-0" dir='rtl' >
      <Container fluid className='align-items-center'>
        <Navbar.Brand href="#home" className='text-white fs-6'>وقف الضياء بمكة المكرمة</Navbar.Brand>

        <div className='me-auto me-5 d-flex align-items-center'>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className='text-white mx-2'>
            <i className="fa-solid fa-share-nodes "></i>
            </Navbar.Toggle>
            <Nav.Link className='mx-2 me-5 d-none d-md-block' onClick={handleSwitchIcons}>
                <i className="fa-solid fa-align-justify fs-5"></i>
            </Nav.Link>
            <Nav.Link className='mx-2  d-md-none' onClick={handleSideBar}>
                <i className="fa-solid fa-align-justify fs-5"></i>
            </Nav.Link>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'> 
          <Nav className=" text-white my-2   ">
            <Nav.Link href="#home" className='my-auto'>
                <AlarmIcon  number={10}/>
                <span className='mx-2 d-md-none'>قائمة التحديثات</span>
            </Nav.Link>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'  variant="white" className='text-white'>
                {user?.name}
                </Dropdown.Toggle>
                <Dropdown.Menu className='text-end'>
                    <Dropdown.Item as="button" >
                    تغيير كلمة المرور
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='btn-white' onClick={handleLogOut}>
                    تسجيل الخروج
                    </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
