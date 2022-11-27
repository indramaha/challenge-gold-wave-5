import { useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/Navbar";
import OurServices from "../Components/OurServices";

import './LandingPage.css'

const LandingPage = () => {
    const [servicesDesc, setServicesDesc] = useState([
        {
            no: 1,
            servicestext: "Sewa Mobil Dengan Supir di Bali 12 Jam",
        },
        {
            no: 2,
            servicestext: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        },
        {
            no: 3,
            servicestext: "Sewa Mobil Jangka Panjang Bulanan",
        },
        {
            no: 4,
            servicestext: "Gratis Antar - Jemput Mobil di Bandara",
        },
        {
            no: 5,
            servicestext: "Layanan Airport Transfer / Drop In Out",
        },
    ])
    return(
        <div>
            <div className="navbar-hero-bg">
                <NavBar />
                <Hero />
            </div>
            <OurServices servicesText={servicesDesc}/>
        </div>
    )
}

export default LandingPage;