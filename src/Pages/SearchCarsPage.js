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
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}&isRented=${fStatus}`)
            .then((res) => {
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

    const [fMinPrice, setFMinPrice] = useState('')
    const handleMinPrice = (e) => {
        setFMinPrice(e.target.value)
    }

    const [fMaxPrice, setFMaxPrice] = useState('')
    const handleMaxPrice = (e) => {
        setFMaxPrice(e.target.value)
    }

    const [fStatus, setFStatus] = useState('')
    const handleStatus = (e) => {
        setFStatus(e.target.value)
    }

    // console.log(fName)

    return(
        <div>
            <NavBar />
            <Hero isBtnShow={false} isContentShow={true}/>
            <FilterCars 
                handleSearchButton={handleFilter} 
                nameFilter={handleChangeName}
                categoryFilter={handleChangeCategory}
                fCategory={fCategory}
                fName={fName}
                fMinPrice={fMinPrice}
                fMaxPrice={fMaxPrice}
                fStatus={fStatus}
                minPriceFilter={handleMinPrice}
                maxPriceFilter = {handleMaxPrice}
                statusFilter = {handleStatus}
                isInputDisable={false}
                isHeroShow={true}
                isBtnShow={true}
            />
            <CarsShow allCars={carData} />
            <Footer />
        </div>
    )
}

export default SearchCarsPage;