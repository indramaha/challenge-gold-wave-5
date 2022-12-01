import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import LogoNavbar from '../Assets/logo.png'
import './Navbar.css'

const NavBar = () =>{
    return(
        <>
          {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="navbar-section">
              <Container>
                <Link to='/'><Navbar.Brand><img src={LogoNavbar} /></Navbar.Brand></Link>
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
                      <Nav.Link href="#action1" className='navbar-item-link'>Our Services</Nav.Link>
                      <Nav.Link href="#action2" className='navbar-item-link'>Why Us</Nav.Link>
                      <Nav.Link href="#action2" className='navbar-item-link'>Testimonial</Nav.Link>
                      <Nav.Link href="#action2" className='navbar-item-link'>FAQ</Nav.Link>
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