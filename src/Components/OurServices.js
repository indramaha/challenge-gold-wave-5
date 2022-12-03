import ServicesImage from '../Assets/img_service.png'
import {FiCheck} from 'react-icons/fi'
import './OurServices.css'

const OurServices = (props) => {
    return(
        <div className='ourservices-section' id='ourservices'>
            <div className='ourservices-image-bg'>
                <img src={ServicesImage} alt='services' className='ourservices-image-img'/>
            </div>
            <div className='ourservices-desc-bg'>
                <div className='ourservices-title'>
                    <h3 className='ourservices-title-h3'>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                </div>
                <div className='ourservices-text'>
                    <p className='ourservices-text-p'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                </div>
                <div>
                    {
                        props.servicesText.map((item, i) =>{
                            return(
                                <div className='ourservices-text-list' key={i}>
                                    <div className='ourservices-check-bg'>
                                        <FiCheck size={16} className='ourservices-check-icon'/>
                                    </div>
                                    <ul className='ourservices-text-ul'>
                                        <li className='ourservices-text-li'>{item.servicestext}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices;