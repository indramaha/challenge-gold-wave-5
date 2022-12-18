import { convertToRupiah } from "../utils/function";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import {FiUsers} from 'react-icons/fi'

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


    function Category() {
        const isCategory = car.category;
        console.log(isCategory)
        if (isCategory == "small") {
            return(
                <div className='cardetail-category-bg'>
                    <div>
                        <FiUsers size={12}/>
                    </div>
                    <div className='cardetail-category-p-bg'>
                        <p className='cardetail-category-p'>2 - 4 orang</p>
                    </div>
                </div>
            )
        } else if (isCategory == "Medium") {
            return(
                <div className='cardetail-category-bg'>
                    <div>
                        <FiUsers size={12}/>
                    </div>
                    <div className='cardetail-category-p-bg'>
                        <p className='cardetail-category-p'>4 - 6 orang</p>
                    </div>
                </div>
            )
        } else if (isCategory == "large") {
            return(
                <div className='cardetail-category-bg'> 
                    <div>
                        <FiUsers size={12}/>
                    </div>
                    <div className='cardetail-category-p-bg'>
                        <p className='cardetail-category-p'>6 - 8 orang</p>
                    </div>
                </div>
            )
        } else {
            return(
                <p>ERROR...</p>
            )
        }
    }


    return ( 
        <div className="cardetail-section">
            <div className="cardetail-desc-bg">
                <p className="cardetail-desc-title-p">Tentang Paket</p>
                <div className="cardetail-desc">
                    <div>
                        <p className="cardetail-desc-title-paket-p">Include</p>
                    </div>
                    <div className="cardetail-desc-desc-li-bg">
                        {
                            props.includeDesc.map((item, i) => {
                                return(
                                    <div key={i} className='cardetail-desc-list-bg'>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cardetail-desc">
                    <div>
                        <p className="cardetail-desc-title-paket-p">Exclude</p>
                    </div>
                    <div className="cardetail-desc-desc-li-bg">
                        {
                            props.excludeDesc.map((item, i) => {
                                return(
                                    <div key={i} className='cardetail-desc-list-bg'>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cardetail-desc">
                    <div>
                        <p className="cardetail-desc-title-refund-p">Refund, Reschedule, Overtime</p>
                    </div>
                    <div className="cardetail-desc-desc-li-bg">
                        {
                            props.refundDesc.map((item, i) => {
                                return(
                                    <div key={i} className='cardetail-desc-list-bg'>
                                        <li className="cardetail-desc-list">{item.text}</li>
                                    </div>
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
                                <div className='cardetail-category'>
                                    <Category />
                                </div>
                                <div className="cardetail-result-price-bg">
                                    <div>
                                        <p className="cardetail-result-total-p">Total</p>
                                    </div>
                                    <div className="cardetail-result-price-p-bg">
                                        <p className="cardetail-result-price-p">Rp {convertToRupiah(car.price)} /hari</p>
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