
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import NavBar from '../Components/Navbar';
import SearchCars from '../Components/SearchCars';
import './SearchCarsPage.css'

const SearchCarsPage = () => {
    return(
        <div>
            <div className="searchcarspage-hero-bg">
                <NavBar />
                <Hero />
            </div>
            <SearchCars />
            <Footer />
        </div>
    )
}

export default SearchCarsPage;