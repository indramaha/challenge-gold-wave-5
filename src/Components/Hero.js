import CarImage from '../Assets/img_car.png'
import { Link } from 'react-router-dom'
import './Hero.css'
import { useState } from 'react'

const Hero = (props) => {
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(false)
    }

    return(
        <div className="hero-section">
            <div className='hero-desc'>
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
                        <button onClick={handleClick} className='hero-button'>Mulai Sewa Mobil</button>
                        </Link>): null
                    }
                    
                </div>
            </div>
            <div>
                <img src={CarImage} alt='hero-car' className='hero-image-img'/>
            </div>
        </div>
    )
}

export default Hero;