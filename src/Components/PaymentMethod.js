import './PaymentMethod.css'
import {FiCheck, FiUsers} from 'react-icons/fi'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'moment/locale/id'
import moment from "moment/moment";

const PaymentMethod = () => {
    const [car, setCar] = useState({})
    const {id} = useParams()
    const startDate = moment(localStorage.getItem("start"))
    const endDate = moment(localStorage.getItem("end"))

    useEffect(() => {
        getDetailCar()
        // eslint-disable-next-line
    },[])

    const getDetailCar = () => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((res) => {
                // console.log(res.data)
                setCar(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (  
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
                                <p>{car.name}</p>
                            </div>
                        </div>
                        <div className='paymentmethod-paymentdetail-input-bg'>
                            <div>
                                <p className='paymentmethod-paymentdetail-desc-title-p'>Kategori</p>
                            </div>
                            <div className='paymentmethod-paymentdetail-desc-content'>
                                {(() => {
                                    if (car.category === "small"){
                                        return(
                                            <p>2 - 4 orang</p>
                                        )
                                    } else if (car.category === "Medium"){
                                        return(
                                            <p>4 - 6 orang</p>
                                        )
                                    } else if (car.category === "large"){
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
                        <div className='paymentmethod-bank-option'>
                            <div className='paymentmethod-bank-option-bank-logo'>
                                <p className='paymentmethod-bank-option-bank-p'>BCA</p>
                            </div>
                            <div className='paymentmethod-bank-option-desc'>
                                <p className='paymentmethod-bank-option-p'>BCA Transfer</p>
                            </div>
                            <div className='paymentmethod-bank-option-check-bg'>
                                <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                            </div>
                        </div>
                        <hr className='paymentmethod-bank-hr'/>
                        <div className='paymentmethod-bank-option'>
                            <div className='paymentmethod-bank-option-bank-logo'>
                                <p className='paymentmethod-bank-option-bank-p'>BNI</p>
                            </div>
                            <div className='paymentmethod-bank-option-desc'>
                                <p className='paymentmethod-bank-option-p'>BNI Transfer</p>
                            </div>
                            <div className='paymentmethod-bank-option-check-bg'>
                                <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                            </div>
                        </div>
                        <hr className='paymentmethod-bank-hr'/>
                        <div className='paymentmethod-bank-option'>
                            <div className='paymentmethod-bank-option-bank-logo'>
                                <p className='paymentmethod-bank-option-bank-p'>Mandiri</p>
                            </div>
                            <div className='paymentmethod-bank-option-desc'>
                                <p className='paymentmethod-bank-option-p'>Mandiri Transfer</p>
                            </div>
                            <div className='paymentmethod-bank-option-check-bg'>
                                <FiCheck size={24} className='paymentmethod-bank-option-check'/>
                            </div>
                        </div>
                        <hr className='paymentmethod-bank-hr'/>
                    </div>
                </div>
                <div className='paymentmethod-next'>
                    <div>
                        <div>
                            <p className='paymentmethod-next-carname-p'>{car.name}</p>
                        </div>
                        <div className='paymentmethod-next-category-bg'>
                            <div>
                                <FiUsers size={12}/>
                            </div>
                            <div >
                                <p className='paymentmethod-next-category-p'>
                                    {(() => {
                                        if (car.category === "small"){
                                            return(
                                                "2 - 4 orang"
                                            )
                                        } else if (car.category === "Medium"){
                                            return(
                                                "4 - 6 orang"
                                            )
                                        } else if (car.category === "large"){
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
                                            <p className='paymentmethod-next-accord-title-price-p'>Rp3.500.000</p>
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
                                                        <li className='paymentmethod-next-accord-body-price-li'>Sewa Mobil Rp.500.000 x 7 Hari</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='paymentmethod-next-accord-body-price-p'>Rp 3.500.000</p>
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
                                                <p className='paymentmethod-next-accord-total-bottom-p'>Rp 3.500.000</p>
                                            </div>
                                        </div>
                                        <div className='paymentmethod-next-accord-button-bg'>
                                            <button className='paymentmethod-next-accord-button'>Bayar</button>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;