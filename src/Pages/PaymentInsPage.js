import Footer from "../Components/Footer";
import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/Navbar";
import PaymentIns from "../Components/PaymentInstruction";


const PaymentInsPage = () => {
    return ( 
        <div>
            <NavBar />
            <HeroPayment />
            {/* tempat componen bagus start */}
            
            <PaymentIns />

            {/* tempat componen mas andre end */}
            <Footer />
        </div>
    );
}

export default PaymentInsPage