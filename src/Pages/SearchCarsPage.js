
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import NavBar from '../Components/Navbar';
import SearchCars from '../Components/SearchCars';
import './SearchCarsPage.css'

const SearchCarsPage = () => {
    return(
        <div>
            <NavBar />
            <Hero />
            <SearchCars />
            <Footer />
        </div>
    )
}

export default SearchCarsPage;