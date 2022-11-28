import {FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch} from 'react-icons/fi'
import LogoFooter from '../Assets/logo.png'
import './Footer.css'

const Footer = (props) => {
    return(
        <div>
            {
                props.footerContent.map(item => {
                    return console.log(item.footer2)
                })
            }
        </div>
    )
}

export default Footer;