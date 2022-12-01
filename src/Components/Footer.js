import {FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LogoFooter from '../Assets/logo.png'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer-section'>
            <div>
                <div className='footer-address'>
                    <p className='footer-address-p'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                </div>
                <div className='footer-gmail'>
                    <p className='footer-gmail-p'>binarcarrental@gmail.com</p>
                </div>
                <div className='footer-phone'>
                    <p className='footer-phone-p'>081-233-334-808</p>
                </div>
            </div>
            <div>
                <div className='footer-navbar'>
                    <p className='footer-navbar-p'>Our services</p>
                </div>
                <div className='footer-navbar'>
                    <p className='footer-navbar-p'>Why Us</p>
                </div>
                <div className='footer-navbar'>
                    <p className='footer-navbar-p'>Testimonial</p>
                </div>
                <div className='footer-navbar'>
                    <p className='footer-navbar-p'>FAQ</p>
                </div>
            </div>
            <div>
                <div className='footer-socmed-title'>
                    <p className='footer-socmed-title-p'>Connect with us</p>
                </div>
                <div className='footer-icons'>
                    <div className='footer-icons-bg'>
                        <FiFacebook className='footer-icons-icon'/>
                    </div>
                    <div className='footer-icons-bg'>
                        <FiInstagram className='footer-icons-icon'/>
                    </div>
                    <div className='footer-icons-bg'>
                        <FiTwitter className='footer-icons-icon'/>
                    </div>
                    <div className='footer-icons-bg'>
                        <FiMail className='footer-icons-icon'/>
                    </div>
                    <div className='footer-icons-bg'>
                        <FiTwitch className='footer-icons-icon'/>
                    </div>
                </div>
            </div>
            <div>
                <div className='footer-copyright'>
                    <p className='footer-copyright-p'>Copyright Binar 2022</p>
                </div>
                <div>
                    <Link to='/'><img src={LogoFooter} alt='logo-footer' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;