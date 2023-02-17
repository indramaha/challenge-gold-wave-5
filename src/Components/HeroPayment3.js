import './HeroPayment3.css'
import {FiArrowLeft} from 'react-icons/fi'
import { useLocation, useParams } from 'react-router-dom'

const HeroPayment3 = () => {
   const {id} = useParams()

    return (  
        <div className='heropayment3-section'>
            <div className='heropayment3-left'>
                <div>
                    <FiArrowLeft size={24}/>
                </div>
                <div className='heropayment3-left-text-bg'>
                    <p className='heropayment3-left-text-p'>Tiket</p>
                    <p className='heropayment3-left-text-p'>Order ID {`${id}`} </p>
                </div>
            </div>
            <div className='heropayment3-right'>
                <div className='heropayment3-right-content'>
                    <div className='heropayment3-right-content-number-bg'>
                        <p className='heropayment3-right-content-number-p'>1</p>
                    </div>
                    <div className='heropayment3-right-content-text-bg'>
                        <p className='heropayment3-right-content-text-p'>Pilih Metode</p>
                    </div>
                </div>
                <div className='heropayment3-rectangle-bg'>
                    <div className='heropayment3-rectangle'></div>
                </div>
                <div className='heropayment3-right-content'>
                    <div className='heropayment3-right-content-number-bg'>
                        <p className='heropayment3-right-content-number-p'>2</p>
                    </div>
                    <div className='heropayment3-right-content-text-bg'>
                        <p className='heropayment3-right-content-text-p'>Bayar</p>
                    </div>
                </div>
                <div className='heropayment3-rectangle-bg'>
                    <div className='heropayment3-rectangle'></div>
                </div>
                <div className='heropayment3-right-content'>
                    <div className='heropayment3-right-content-number-bg'>
                        <p className='heropayment3-right-content-number-p'>3</p>
                    </div>
                    <div className='heropayment3-right-content-text-bg'>
                        <p className='heropayment3-right-content-text-p'>Tiket</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroPayment3;