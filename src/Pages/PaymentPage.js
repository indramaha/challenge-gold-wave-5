import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/Navbar";
import PaymentMethod from "../Components/PaymentMethod";

const PaymentPage = () => {
    return ( 
        <div>
            <NavBar />
            <HeroPayment />
            {/* tempat componen bagus start */}
            <PaymentMethod />
            {/* tempat componen bagus end */}

            {/* tempat componen mas andre start */}

            {/* tempat componen mas andre end */}
        </div>
    );
}

export default PaymentPage;