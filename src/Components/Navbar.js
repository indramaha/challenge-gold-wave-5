import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Navigate } from 'react-router-dom';
import LogoNavbar from '../Assets/logo.png'
import './Navbar.css'

const NavBar = () =>{
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false)
    Navigate("/");
  };

    return(
        <>
          {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="navbar-section">
              <Container>
                <Link to='/'>
                  <Navbar.Brand><img src={LogoNavbar} alt='logo' /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  className='navbar-offcan'
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      BCR
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="flex-grow-1 navbar-item">
                      <Nav.Link href="#ourservices" className='navbar-item-link'>Our Services</Nav.Link>
                      <Nav.Link href="#whyus" className='navbar-item-link'>Why Us</Nav.Link>
                      <Nav.Link href="#testimonial" className='navbar-item-link'>Testimonial</Nav.Link>
                      <Nav.Link href="#faq" className='navbar-item-link'>FAQ</Nav.Link>

                      {isLogin ? (
                        <button onClick={handleLogout}>Logout</button>
                      ) : (
                      <Link to='/SignupPage'>
                        <button className='hero-button'>Register</button>
                      </Link>
                      )}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
    )
}

export default NavBar;