import axios from 'axios'
import { useEffect, useState } from 'react'
import FilterCars from '../Components/FilterCars';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import NavBar from '../Components/Navbar';
import CarsShow from '../Components/CarsShow';
import './SearchCarsPage.css'

const SearchCarsPage = () => {
    const [carData,setCarData] = useState([])
    
    useEffect(() =>{
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
            .then((ress) =>{
                setCarData(ress.data.cars)
            })
            .catch((err) => console.log(err.message))
    },[])

    const handleFilter = (e) => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}`)
            .then((res) => {
                console.log(res.data.cars)
                setCarData(res.data.cars)
            })
            .catch((err) => console.log(err.message));
    }

    const [fName, setFName] = useState('')
    const handleChangeName = (e) => {
        setFName(e.target.value)
    }

    const [fCategory, setFCategory] = useState('')
    const handleChangeCategory = (e) => {
        setFCategory(e.target.value)
    }

    return(
        <div>
            <NavBar />
            <Hero isBtnShow={false}/>
            <FilterCars 
                handleSearchButton={handleFilter} 
                nameFilter={handleChangeName}
                categoryFilter={handleChangeCategory}
                fCategory={fCategory}
            />
            <CarsShow allCars={carData} />
            <Footer />
        </div>
    )
}

export default SearchCarsPage;