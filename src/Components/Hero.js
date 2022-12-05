import CarImage from '../Assets/img_car.png'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = (props) => {

    return(
        <div className={props.isContentShow ? "hero-section" : "hero-section-disable"} >
            <div className={props.isContentShow ? 'hero-desc' : 'hero-desc-disable'}>
                <div className='hero-title-bg'>
                    <h1 className='hero-title-h1'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                </div>
                <div className='hero-desc-bg'>
                    <p className='hero-desc-p'>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                </div>
                <div>
                    {
                        props.isBtnShow ? (<Link to='/searchcar'>
                        <button className='hero-button'>Mulai Sewa Mobil</button>
                        </Link>): null
                    }
                </div>
            </div>
            <div>
                <img src={CarImage} alt='hero-car' className={props.isContentShow ? 'hero-image-img' : 'hero-image-img-disable' }/>
            </div>
        </div>
    )
}

export default Hero;