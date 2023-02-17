import Footer from "../Components/Footer";
import HeroPayment2 from "../Components/HeroPayment2";
import NavBar from "../Components/Navbar";
import PaymentIns from "../Components/PaymentInstruction";



const PaymentInsPage = () => {

    return ( 
        <div>
            <NavBar />
            <HeroPayment2 />
            {/* tempat componen bagus start */}


            
            <PaymentIns />
            {/* tempat componen mas andre end */}

            
            <Footer />
            
        </div>
    );
}

export default PaymentInsPage