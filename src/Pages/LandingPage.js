import { useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/Navbar";
import OurServices from "../Components/OurServices";
import WhyUs from "../Components/WhyUs";
import ThumbsUpIcon from '../Assets/fi_thumbs-up.png'
import TagPriceIcon from '../Assets/fi_tag.png'
import ClockIcon from '../Assets/fi_clock.png'
import AwardIcon from '../Assets/fi_award.png'
import RatingTesti from '../Assets/Star 1.png'

import './LandingPage.css'
import Testimonial from "../Components/Testimonial";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

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
    const [whyUsCardDesc, setWhyUsCardDesc] = useState([
        {
            no: 1,
            icon: <div className="whyus-thumbs-icon-bg"><img src={ThumbsUpIcon} alt='thumbs' className="whyus-thumbs-icon-img"/></div>,
            title: 'Mobil Lengkap',
            desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
        },
        {
            no: 2,
            icon: <div className="whyus-tag-icon-bg"><img src={TagPriceIcon} alt='tag' className="whyus-tag-icon-img"/></div>,
            title: 'Harga Murah',
            desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
        },
        {
            no: 3,
            icon: <div className="whyus-clock-icon-bg"><img src={ClockIcon} alt='clock' className="whyus-clock-icon-img"/></div>,
            title: 'Layanan 24 Jam',
            desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
        },
        {
            no: 4,
            icon: <div className="whyus-award-icon-bg"><img src={AwardIcon} alt='award' className="whyus-award-icon-img"/></div>,
            title: 'Sopir Profesional',
            desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
        },
    ])
    const [ratingTesti, setRatingTesti] = useState([
        {
            no: 1,
            rating: <img src={RatingTesti} alt='star'/>,
        },
        {
            no: 2,
            rating: <img src={RatingTesti} alt='star'/>,
        },
        {
            no: 3,
            rating: <img src={RatingTesti} alt='star'/>,
        },
        {
            no: 4,
            rating: <img src={RatingTesti} alt='star'/>,
        },
        {
            no: 5,
            rating: <img src={RatingTesti} alt='star'/>,
        },
    ])
    return(
        <div>
            <NavBar />
            <Hero isBtnShow={true} isContentShow={true}/>
            <OurServices servicesText={servicesDesc}/>
            <WhyUs whyUsCardText={whyUsCardDesc}/>
            <Testimonial star={ratingTesti}/>
            <Banner />
            <FAQ />
            <Footer />
        </div>
    )
}

export default LandingPage;