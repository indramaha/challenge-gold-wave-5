import "./PaymentInstruction.css"


const PaymentIns = () => {
    return (
        <div className="PaymentIns-Home">
            <div className="Instruction-Content">
                <div className="countdown">
                    <h3>Selesaikan Pembayaran</h3>
                    <div className="batasWaktu">Rabu, 19 Mei 2022 jam 13.00 WIB </div>
                </div>
                <div className="BankAcc">
                    <h3>Lakukan Transfer Ke</h3>
                    <div className="BankDetail">
                        Nomor Rekening
                        <input placeholder="Nomor Rekening"/>
                        Total Bayar
                        <input placeholder="Total bayar"/>
                    </div>    
                </div>
                <div className="PaymentMetod">
                    <h3>Instruksi Pembayaran</h3>
                    <div className="BankTutor">
                        <h4>ATM BCA</h4>
                        <h4>MBCA</h4>
                        <h4>BCA Klik</h4>
                        <h4>Internet Banking</h4>
                    </div>
                    <div className="list-metod"> 
                        <li>Memasukan kartu ATM, lalu PIN</li>
                        <li>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Account</li>
                        <li>Masukan nomor BCA Virtuan Account: 70020+Order ID</li>
                        <div>Contoh</div>
                        <div>No. peserta 12345678, maka ditulis 7002012345678 </div>
                        <li>Layar ATM Akan menampilkan konfirmasi, ikuti inttruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                    </div>
                </div>
            </div>
            <div className="Confirmation-Pay">
                <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button className="confirmationButton">Konfirmasi Pembayaran</button>
            </div>
        </div>
    )
}

export default PaymentIns