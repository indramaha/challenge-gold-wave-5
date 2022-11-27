import CarImage from '../Assets/img_car.png'
import './Hero.css'

const Hero = () => {
    return(
        <div className="hero-section">
            <div className='hero-desc'>
                <div>
                    <h1 className='hero-title-h1'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                </div>
                <div>
                    <p className='hero-desc-p'>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                </div>
                <div>
                    <button className='hero-button'>Mulai Sewa Mobil</button>
                </div>
            </div>
            <div>
                <img src={CarImage} alt='hero-car' className='hero-image-img'/>
            </div>
        </div>
    )
}

export default Hero;