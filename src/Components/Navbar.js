import LogoNavbar from '../Assets/logo.png'
import './Navbar.css'

const NavBar = () =>{
    return(
        <header >
            <nav className='navbar-section'>
                <div>
                    <img src={LogoNavbar} alt='logo-navbar' className='navbar-logo-img'/>
                </div>
                <div>
                    <div className='navbar-text'>
                        <a href=''>Our Services</a>
                        <a href=''>Why Us</a>
                        <a href=''>Testimonial</a>
                        <a href=''>FAQ</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;