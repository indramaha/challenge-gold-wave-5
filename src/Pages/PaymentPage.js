import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/Navbar";
import PaymentIns from "../Components/PaymentInstruction";

const PaymentPage = () => {
    return ( 
        <div>
            <NavBar />
            <HeroPayment />
            {/* tempat componen bagus start */}

            {/* tempat componen bagus end */}

            {/* tempat componen mas andre start */}
            <PaymentIns />

            {/* tempat componen mas andre end */}
        </div>
    );
}

export default PaymentPage;