import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import SimbolSukses from "../Assets/SimbolSukses.png"
import "./PaymentBerhasilPage.css"
import HeroPayment3 from "../Components/HeroPayment3";


const PaymentBerhasil = () => {

    return (
        <div>
            <NavBar/>
            <HeroPayment3 />
            <div className="Payment-Sukses-Icon">
                <center><img src={SimbolSukses}/></center>
                <center><h4> Pembayaran Berhasil </h4></center>
                <center><p> Tunjukan invoice ini ke petugas BCR di titik temu</p></center>
            </div>

            <center>
            <div className="Payment-Berhasil"> 
                <div className="Payment-Berhasil-Card">
                    <div>
                        <h3> Invoice</h3>
                        <p> *no invoice</p>
                    </div>
                    <div>
                        <button>Unduh</button>
                    </div>
                </div>
                <div>
                    PDF VIEWER
                </div>
            </div>
           
            </center>


            <Footer />

        </div>
    )
}

export default PaymentBerhasil