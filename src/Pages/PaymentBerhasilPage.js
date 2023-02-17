import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import SimbolSukses from "../Assets/SimbolSukses.png"
import "./PaymentBerhasilPage.css"
import HeroPayment3 from "../Components/HeroPayment3";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const PaymentBerhasil = () => {
    const price = localStorage.getItem ('price')
    const orderid = localStorage.getItem ('order-ID')

    const downloadPdf = () => {
        const input = document.getElementById('Invoice'); //ini id yang sama dengan line 52
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'pt', 'a4');
          pdf.addImage(imgData, 'JPEG', 10, 50);
          pdf.save('InvoiceMobil'); //nama PDF setelah download
        });
      };

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
                        <button onClick={downloadPdf}>Unduh</button>
                    </div>
                </div>


                <div id="Invoice">
                    PDF VIEWER
                    <p>total bayar : {price}</p>
                    <p>order id : {orderid}</p>
                </div>
            </div>
           
            </center>


            <Footer />

        </div>
    )
}

export default PaymentBerhasil