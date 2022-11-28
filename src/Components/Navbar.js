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
                        <a href='' className='navbar-text-a'>Our Services</a>
                        <a href='' className='navbar-text-a'>Why Us</a>
                        <a href='' className='navbar-text-a'>Testimonial</a>
                        <a href='' className='navbar-text-a'>FAQ</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;