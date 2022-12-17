import './HeroPayment.css'
import {FiArrowLeft} from 'react-icons/fi'

const HeroPayment = () => {
    return (  
        <div className='heropayment-section'>
            <div className='heropayment-left'>
                <div>
                    <FiArrowLeft size={24}/>
                </div>
                <div className='heropayment-left-text-bg'>
                    <p className='heropayment-left-text-p'>Pembayaran</p>
                </div>
            </div>
            <div className='heropayment-right'>
                <div className='heropayment-right-content'>
                    <div className='heropayment-right-content-number-bg'>
                        <p className='heropayment-right-content-number-p'>1</p>
                    </div>
                    <div className='heropayment-right-content-text-bg'>
                        <p className='heropayment-right-content-text-p'>Pilih Metode</p>
                    </div>
                </div>
                <div className='heropayment-rectangle-bg'>
                    <div className='heropayment-rectangle'></div>
                </div>
                <div className='heropayment-right-content'>
                    <div className='heropayment-right-content-number-bg'>
                        <p className='heropayment-right-content-number-p'>2</p>
                    </div>
                    <div className='heropayment-right-content-text-bg'>
                        <p className='heropayment-right-content-text-p'>Bayar</p>
                    </div>
                </div>
                <div className='heropayment-rectangle-bg'>
                    <div className='heropayment-rectangle'></div>
                </div>
                <div className='heropayment-right-content'>
                    <div className='heropayment-right-content-number-bg'>
                        <p className='heropayment-right-content-number-p'>3</p>
                    </div>
                    <div className='heropayment-right-content-text-bg'>
                        <p className='heropayment-right-content-text-p'>Tiket</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroPayment;