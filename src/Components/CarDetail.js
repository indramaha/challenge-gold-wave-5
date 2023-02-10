import { convertToRupiah } from "../utils/function";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";
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
    },[id])

    const [dateRange, setDateRange] = useState([null,null]);
    const [startDate,endDate] = dateRange;
    console.log(startDate)
    console.log(endDate)

    const handleButtonLP = () =>{
        localStorage.setItem("start",startDate)
        localStorage.setItem("end",endDate)
    }


    function PriceTotal(){
        const isPrice = car.price
        const dateCount = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))
        const totalPrice = isPrice * (dateCount+1)
        if ((dateCount >= 0) && (dateCount < 7)) {
            return convertToRupiah(totalPrice)
        } else if (dateCount < 0) {
            return 0
        } else {
            return "- (Lebih dari 7 hari)"
        }
    }


    function Category() {
        const isCategory = car.category;
        // console.log(isCategory)
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

    function ButtonLP(){
        if(startDate !== null && endDate !== null){
            return(
            <Link to={`/payment/${car.id}`}>
            <button onClick={handleButtonLP} className="cardetail-result-button">Lanjutkan Pembayaran</button>
            </Link>
            )
            
        }else{
            return(
            <button className="cardetail-result-button">pilih tanggal</button>
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
                            <div className="cardetail-result-date-input">
                                <p>Tentukan lama sewa mobil (max 7 hari)</p>
                                <DatePicker
                                    selectsRange={true}
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={new Date()}
                                    onChange = {(update)=>{
                                        setDateRange(update);
                                    }}
                                    dateFormat="dd MMMM yyyy"
                                    isClearable={true}
                                    placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                                    showDisableMonthNavigation
                                />
                        
                            <div className="cardetail-result-price-bg">
                                <div>
                                    <p className="cardetail-result-total-p">Total</p>
                                </div>
                                <div className="cardetail-result-price-p-bg">
                                    <p className="cardetail-result-price-p">Rp <PriceTotal/></p>
                                </div>
                            </div>
                            <ButtonLP />
                            
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