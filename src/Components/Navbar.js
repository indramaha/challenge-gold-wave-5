import LogoNavbar from '../Assets/logo.png'
import {FiMenu, FiX} from 'react-icons/fi'
import './Navbar.css'
import { useState } from 'react'

const NavBar = () =>{
    const [click, setClick] = useState(false)
    const handleClick = () => {
        return(
            setClick(!click)
        )
    }

    return(
        <header >
            <nav className='navbar-section'>
                <div>
                    <img src={LogoNavbar} alt='logo-navbar' className='navbar-logo-img'/>
                </div>
                <div className={click ? "navbar-text" : "navbar-text"}>
                    <a href='' className='navbar-text-a'>Our Services</a>
                    <a href='' className='navbar-text-a'>Why Us</a>
                    <a href='' className='navbar-text-a'>Testimonial</a>
                    <a href='' className='navbar-text-a'>FAQ</a>
                </div>
                <div className='navbar-hamburger' onClick={handleClick} >
                    {click ? (<FiX />) : (<FiMenu />)}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;