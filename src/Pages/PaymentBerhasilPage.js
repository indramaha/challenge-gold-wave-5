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
    const NamaMobil = localStorage.getItem ('Nama-Mobil')
    const Mulai = localStorage.getItem ('Mulai-Sewa')
    const Berakhir = localStorage.getItem ('Berakhir-Sewa')

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
                        
                    </div>
                    <div>
                        <button onClick={downloadPdf}>Unduh</button>
                    </div>
                </div>


                <div className="Pdf-Viewer" id="Invoice">
                    <h3>BINAR CAR RENTAL INVOICE</h3>

                    <div className="Info-Mobil"> 
                        <p>Order ID : {orderid}</p>
                        <p>Jenis Mobil : {NamaMobil}</p>
                        <p>Total Bayar : Rp. {price},-</p>
                    </div>
                    <div className="JangkaWaktu-Sewa"> 
                        <p>Mulai Sewa : {Mulai}</p>
                        <p>Berakhir Sewa : {Berakhir}</p>
                    </div>
                    
                </div>
            </div>
           
            </center>


            <Footer />

        </div>
    )
}

export default PaymentBerhasil