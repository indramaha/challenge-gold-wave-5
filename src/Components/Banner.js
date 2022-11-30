
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return(
        <div className='banner-section'>
            <div className='banner-card'>
                <div className='banner-card-title'>
                    <h3 className='banner-card-title-h3'>Sewa Mobil di (Lokasimu) Sekarang</h3>
                </div>
                <div className='banner-card-text'>
                    <p className='banner-card-text-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='banner-card-button-bg'>
                    <Link to='/searchcar'><button className='banner-card-button'>Mulai Sewa Mobil</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;