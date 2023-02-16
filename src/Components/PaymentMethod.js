import './PaymentMethod.css'
import {FiCheck, FiUsers} from 'react-icons/fi'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'moment/locale/id'
import moment from "moment/moment";
import { convertToRupiah } from '../utils/function';

const PaymentMethod = () => {
    const [order, setOrder] = useState({})
    console.log(order)
    const {id} = useParams()
    const startDate = moment(order.start_rent_at)
    const endDate = moment(order.finish_rent_at)
    const [bca, setBca] = useState(false)
    const [bni, setBni] = useState(false)
    const [mandiri, setMandiri] = useState(false)

    useEffect(() => {
        getDetailOrder()
        // eslint-disable-next-line
    },[])

    const getDetailOrder = async() => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token,
            }
        }

        const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
        try {
            // console.log(res.data)
            setOrder(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log (getDetailOrder)

    const handleBcaMethode = () => {
        setBca(true)
        setBni(false)
        setMandiri(false)
        localStorage.setItem("bank", "bca")
    }

    const handleBniMethode = () => {
        setBca(false)
        setBni(true)
        setMandiri(false)
        localStorage.setItem("bank", "bni")
    }

    const handleMandiriMethode = () => {
        setBca(false)
        setBni(false)
        setMandiri(true)
        localStorage.setItem("bank", "mandiri")
    }

    // const isPrice = order.Car.price
    const dateCount = (Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))) +1
    // const totalPrice = isPrice * (dateCount)

    const PriceTotal = (isPrice) => {
        const dateCount = (Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))) +1
        const totalPrice = isPrice * (dateCount)
        if ((dateCount >= 0) && (dateCount < 7)) {
            return convertToRupiah(totalPrice)
        } else if (dateCount < 0) {
            return 0
        } else {
            return "- (Lebih dari 7 hari)"
        }
    }

    return (  
        <div>
            {
                Object.entries(order).length ? (
                    <div>
                        <div className='paymentmethod-paymentdetail-bg'>
                            <div className="paymentmethod-paymentdetail">
                                <div>
                                    <p className='paymentmethod-paymentdetail-title-p'>Detail Pesananmu</p>
                                </div>
                                <div className='paymentmethod-paymentdetail-desc-bg'>
                                    <div className='paymentmethod-paymentdetail-input-bg'>
                                        <div>
                                            <p className='paymentmethod-paymentdetail-desc-title-p'>Nama/Tipe Mobil</p>
                                        </div>
                                        <div className='paymentmethod-paymentdetail-desc-content'>
                                            <p>{order.Car.name}</p>
                                        </div>
                                    </div>
                                    <div className='paymentmethod-paymentdetail-input-bg'>
                                        <div>
                                            <p className='paymentmethod-paymentdetail-desc-title-p'>Kategori</p>
                                        </div>
                                        <div className='paymentmethod-paymentdetail-desc-content'>
                                            {(() => {
                                                if (order.Car.category === "small"){
                                                    return(
                                                        <p>2 - 4 orang</p>
                                                    )
                                                } else if (order.Car.category === "Medium"){
                                                    return(
                                                        <p>4 - 6 orang</p>
                                                    )
                                                } else if (order.Car.category === "large"){
                                                    return(
                                                        <p>6 - 8 orang</p>
                                                    )
                                                } else {
                                                    return(
                                                        <p> - </p>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    <div className='paymentmethod-paymentdetail-input-bg'>
                                        <div>
                                            <p className='paymentmethod-paymentdetail-desc-title-p'>Tanggal Mulai Sewa</p>
                                        </div>
                                        <div className='paymentmethod-paymentdetail-desc-content'>
                                            <p>{startDate.format('LL')}</p>
                                        </div>
                                    </div>
                                    <div className='paymentmethod-paymentdetail-input-bg'>
                                        <div>
                                            <p className='paymentmethod-paymentdetail-desc-title-p'>Tanggal Akhir Sewa</p>
                                        </div>
                                        <div className='paymentmethod-paymentdetail-desc-content'>
                                            <p>{endDate.format('LL')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='paymentmethod-bank-pay-bg'>
                            <div className='paymentmethod-bank'>
                                <div>
                                    <p className='paymentmethod-bank-title-p'>Pilih Bank Transfer</p>
                                </div>
                                <div className='paymentmethod-bank-desc-bg'>
                                    <p className='paymentmethod-bank-desc-p'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                                </div>
                                <div className='paymentmethod-bank-option-bg'>
                                    <div className='paymentmethod-bank-option' onClick={handleBcaMethode}>
                                        <div className='paymentmethod-bank-option-bank-logo'>
                                            <p className='paymentmethod-bank-option-bank-p'>BCA</p>
                                        </div>
                                        <div className='paymentmethod-bank-option-desc'>
                                            <p className='paymentmethod-bank-option-p'>BCA Transfer</p>
                                        </div>
                                        {
                                            bca === true ? (
                                                <div className='paymentmethod-bank-option-check-bca'>
                                                    <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                                                </div>
                                            ):(null)
                                        }
                                        
                                    </div>
                                    <hr className='paymentmethod-bank-hr'/>
                                    <div className='paymentmethod-bank-option' onClick={handleBniMethode}>
                                        <div className='paymentmethod-bank-option-bank-logo'>
                                            <p className='paymentmethod-bank-option-bank-p'>BNI</p>
                                        </div>
                                        <div className='paymentmethod-bank-option-desc'>
                                            <p className='paymentmethod-bank-option-p'>BNI Transfer</p>
                                        </div>
                                        {
                                            bni === true ? (
                                                <div className='paymentmethod-bank-option-check-bni'>
                                                    <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                                                </div>
                                            ):(null)
                                        }
                                        
                                    </div>
                                    <hr className='paymentmethod-bank-hr'/>
                                    <div className='paymentmethod-bank-option' onClick={handleMandiriMethode}>
                                        <div className='paymentmethod-bank-option-bank-logo'>
                                            <p className='paymentmethod-bank-option-bank-p'>Mandiri</p>
                                        </div>
                                        <div className='paymentmethod-bank-option-desc'>
                                            <p className='paymentmethod-bank-option-p'>Mandiri Transfer</p>
                                        </div>
                                        {
                                            mandiri === true ? (
                                                <div className='paymentmethod-bank-option-check-mandiri'>
                                                    <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                                                </div>
                                            ):(null)
                                        }
                                        
                                    </div>
                                    <hr className='paymentmethod-bank-hr'/>
                                </div>
                            </div>
                            <div className='paymentmethod-next'>
                                <div>
                                    <div>
                                        <p className='paymentmethod-next-carname-p'>{order.Car.name}</p>
                                    </div>
                                    <div className='paymentmethod-next-category-bg'>
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div >
                                            <p className='paymentmethod-next-category-p'>
                                                {(() => {
                                                    if (order.Car.category === "small"){
                                                        return(
                                                            "2 - 4 orang"
                                                        )
                                                    } else if (order.Car.category === "Medium"){
                                                        return(
                                                            "4 - 6 orang"
                                                        )
                                                    } else if (order.Car.category === "large"){
                                                        return(
                                                            "6 - 8 orang"
                                                        )
                                                    } else {
                                                        return(
                                                            " - "
                                                        )
                                                    }
                                                })()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='paymentmethod-next-accord'>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className='paymentmethod-next-accord-title-bg'>
                                                    <div>
                                                        <p className='paymentmethod-next-accord-total-p'>Total</p>
                                                    </div>
                                                    <div className='paymentmethod-next-accord-title-price'>
                                                        <p className='paymentmethod-next-accord-title-price-p'>Rp. {PriceTotal(order.Car.price)}</p>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='paymentmethod-next-accord-body'>
                                                    <div>
                                                        <div>
                                                            <p className='paymentmethod-next-accord-body-price-title-p'>Harga</p>
                                                        </div>
                                                        <div className='paymentmethod-next-accord-body-price-desc'>
                                                            <div>
                                                                <ul>
                                                                    <li className='paymentmethod-next-accord-body-price-li'>Sewa Mobil Rp.{(order.Car.price)}  x {dateCount} Hari</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p className='paymentmethod-next-accord-body-price-p'>Rp. {PriceTotal(order.Car.price)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='paymentmethod-next-accord-body-anotherbill'>
                                                        <div>
                                                            <p className='paymentmethod-next-accord-body-anotherbill-title-p'>Biaya Lainnya</p>
                                                        </div>
                                                        <div className='paymentmethod-next-accord-body-anotherbill-desc'>
                                                            <div>
                                                                <ul>
                                                                    <li className='paymentmethod-next-accord-body-anotherbill-li'>Pajak</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p className='paymentmethod-next-accord-body-anotherbill-p'>Termasuk</p>
                                                            </div>
                                                        </div>
                                                        <div className='paymentmethod-next-accord-body-anotherbill-desc'>
                                                            <div>
                                                                <ul>
                                                                    <li className='paymentmethod-next-accord-body-anotherbill-li'>Biaya makan sopir</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p className='paymentmethod-next-accord-body-anotherbill-p'>Termasuk</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='paymentmethod-next-accord-body-exclude'>
                                                        <div>
                                                            <p className='paymentmethod-next-accord-body-exclude-title-p'>Belum Termasuk</p>
                                                        </div>
                                                        <div className='paymentmethod-next-accord-body-exclude-desc'>
                                                            <ul>
                                                                <li className='paymentmethod-next-accord-body-exclude-li'>Bensin</li>
                                                            </ul>
                                                        </div>
                                                        <div className='paymentmethod-next-accord-body-exclude-desc'>
                                                            <ul>
                                                                <li className='paymentmethod-next-accord-body-exclude-li'>Tol dan parkir</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='paymentmethod-next-accord-total-bottom'>
                                                        <div>
                                                            <p className='paymentmethod-next-accord-total-bottom-p'>Total</p>
                                                        </div>
                                                        <div>
                                                            <p className='paymentmethod-next-accord-total-bottom-p'>Rp. {PriceTotal(order.Car.price)}</p>
                                                        </div>
                                                    </div>
                                                    {(() => {
                                                        if((bca === true) || (bni === true) || (mandiri === true)){
                                                            return(
                                                                <div className='paymentmethod-next-accord-button-bg'>
                                                                    <Link to={`/paymentIns/${order.id}`}
                                                                    state = {{
                                                                        price: PriceTotal (order.Car.price),
                                                                        id: order.id,
                                                                    }}
                                                                
                                                                    >
                                                                        
                                                                        <button className='paymentmethod-next-accord-button' >Bayar</button>
                                                                    </Link>
                                                                </div>
                                                            )
                                                            
                                                        } else {
                                                            return(
                                                                <div className='paymentmethod-next-accord-button-bg'>
                                                                    <button className='paymentmethod-next-accord-button-disable'>Bayar</button>
                                                                </div>
                                                            )
                                                            
                                                        }
                                                    })()}
                                                    
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(<p>loading...</p>)
            }
        </div>
    );
}

export default PaymentMethod;