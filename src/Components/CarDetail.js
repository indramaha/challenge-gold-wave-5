import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap'

import './CarDetail.css'

const CarDetail = (props) => {
    const {id} = useParams();
    const [car, setCar] = useState([])

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((res) => {
                setCar(res.data)
            })
            .catch((err) => console.log(err.message))
    },[])

    return ( 
        <div className="cardetail-section">
            <div className="cardetail-desc-bg">
                <p className="cardetail-desc-title-p">Tentang Paket</p>
                <div className="cardetail-desc">
                    <div>
                        <p className="cardetail-desc-title-paket-p">Include</p>
                    </div>
                    <div>
                        {
                            props.includeDesc.map((item) => {
                                return(
                                    <ul>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <p className="cardetail-desc-title-paket-p">Exclude</p>
                    </div>
                    <div>
                        {
                            props.excludeDesc.map((item) => {
                                return(
                                    <ul>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <p className="cardetail-desc-title-paket-p">Refund, Reschedule, Overtime</p>
                    </div>
                    <div>
                        {
                            props.refundDesc.map((item) => {
                                return(
                                    <ul>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    Object.entries(car).length ? (
                        <div className="cardetail-result">
                            <div className="cardetail-img-bg">
                                <img src={car.image} alt={car.name} className='cardetail-img'/>
                            </div>
                            <div className="cardetail-result-desc">
                                <div className="cardetail-result-title-p-bg">
                                    <p className="cardetail-result-title-p">{car.name}</p>
                                </div>
                                <div className="cardetail-result-price-bg">
                                    <div>
                                        <p className="cardetail-result-total-p">Total</p>
                                    </div>
                                    <div className="cardetail-result-price-p-bg">
                                        <p className="cardetail-result-price-p">Rp.{car.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(<div className='carsshow-loading'><Spinner animation='grow' variant='primary'/></div>)
                }
            </div>
        </div>
    );
}

export default CarDetail;