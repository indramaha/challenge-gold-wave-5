import './HeroPayment2.css'
import {FiArrowLeft} from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

const HeroPayment2 = () => {
    const bank = localStorage.getItem('bank')

    const {state} = useLocation()
    const orderid = state.id 

    return (  
        <div className='heropayment2-section'>
            <div className='heropayment2-left'>
                <div>
                    <FiArrowLeft size={24}/>
                </div>
                <div className='heropayment2-left-text-bg'>
                    <p className='heropayment2-left-text-p'>{bank} Transfer</p>
                    <p className='heropayment2-left-text-p'>Order Id {orderid} </p>
                </div>
            </div>
            <div className='heropayment2-right'>
                <div className='heropayment2-right-content'>
                    <div className='heropayment2-right-content-number-bg1'>
                        <p className='heropayment2-right-content-number-p1'>1</p>
                    </div>
                    <div className='heropayment2-right-content-text-bg'>
                        <p className='heropayment2-right-content-text-p'>Pilih Metode</p>
                    </div>
                </div>
                <div className='heropayment2-rectangle-bg'>
                    <div className='heropayment2-rectangle'></div>
                </div>
                <div className='heropayment2-right-content'>
                    <div className='heropayment2-right-content-number-bg2'>
                        <p className='heropayment2-right-content-number-p2'>2</p>
                    </div>
                    <div className='heropayment2-right-content-text-bg'>
                        <p className='heropayment2-right-content-text-p'>Bayar</p>
                    </div>
                </div>
                <div className='heropayment2-rectangle-bg'>
                    <div className='heropayment2-rectangle'></div>
                </div>
                <div className='heropayment2-right-content'>
                    <div className='heropayment2-right-content-number-bg3'>
                        <p className='heropayment2-right-content-number-p3'>3</p>
                    </div>
                    <div className='heropayment2-right-content-text-bg'>
                        <p className='heropayment2-right-content-text-p'>Tiket</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroPayment2;