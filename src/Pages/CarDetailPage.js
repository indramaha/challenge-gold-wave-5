import { useState } from 'react';
import CarDetail from '../Components/CarDetail';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar'
import CarsShow from '../Components/CarsShow';
import FilterCars from '../Components/FilterCars';


const CarDetailPage = () => {
    const [include, setInclude] = useState([
        {
            no:1 ,
            text: 'Apa saja yang termasuk dalam paket misal durasi max 12 jam',
        },
        {
            no:2,
            text: 'Sudah termasuk bensin selama 12 jam',
        },
        {
            no:3,
            text: 'Sudah termasuk Tiket Wisata',
        },
        {
            no:4,
            text: 'Sudah termasuk pajak',
        },
    ])
    const [exclude, setExclude] = useState([
        {
            no:1 ,
            text: 'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        },
        {
            no:2 ,
            text: 'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        },
        {
            no:3 ,
            text: 'Tidak termasuk akomodasi penginapan',
        },
    ])
    const [refund, setRefund] = useState([
        {
            no:1 ,
            text: 'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        },
        {
            no:2 ,
            text: 'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        },
        {
            no:3 ,
            text: 'Tidak termasuk akomodasi penginapan',
        },
        {
            no:4 ,
            text: 'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        },
        {
            no:5 ,
            text: 'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        },
        {
            no:6 ,
            text: 'Tidak termasuk akomodasi penginapan',
        },
        {
            no:7 ,
            text: 'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        },
        {
            no:8 ,
            text: 'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        },
        {
            no:9 ,
            text: 'Tidak termasuk akomodasi penginapan',
        },
    ])

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
    return ( 
        <div>
            <Navbar />
            <Hero isContentShow={false}/>
            <FilterCars 
                isInputDisable={true} 
                isHeroShow={false}
                isBtnShow={false}
                fCategory={fCategory}
                fName={fName}
                fMinPrice={fMinPrice}
                fMaxPrice={fMaxPrice}
                fStatus={fStatus}
            />
            <CarDetail includeDesc={include} excludeDesc={exclude} refundDesc={refund}/>
            <Footer />
        </div>
     );
}
 
export default CarDetailPage;