import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
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
        <div>
            <div>
                <h1>desc</h1>
            </div>
            <div>
                {
                    Object.entries(car).length ? (
                        <div>
                            <div>
                                <img src={car.image}/>
                            </div>
                            <div>
                                <p>{car.name}</p>
                            </div>
                            <div>
                                <p>{car.price}</p>
                            </div>
                        </div>
                    ):(null)
                }
            </div>
        </div>
    );
}

export default CarDetail;