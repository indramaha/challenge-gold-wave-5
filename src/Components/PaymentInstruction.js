import { useState } from "react"
import "./PaymentInstruction.css"


const PaymentIns = () => {
    
   
      
    return (
        <div className="PaymentIns-Home">
            <div className="Instruction-Content">
                <div className="countdown">
                    <h3 className="countdownH3">Selesaikan Pembayaran</h3>
                    <div className="batasWaktu">Rabu, 19 Mei 2022 jam 13.00 WIB </div>
                </div>
                <div className="BankAcc">
                    <h3 className="BankAccH3">Lakukan Transfer Ke</h3>
                    <div className="NorekBCR">
                        <div className="BoxBCA"> 
                        <p> BCA </p>
                        </div>
                        <div> 
                        <p> BCA Transfer </p>
                        <p> a.n Binar Car Rental</p>
                        </div>
                    </div>
                    <div className="BankDetail">
                        Nomor Rekening
                        <input placeholder="54104257877"/>
                        Total Bayar
                        <input placeholder="Total bayar"/>
                    </div>    
                </div>
                <div className="PaymentMetod">
                    <h3 className="PaymentMetodH3">Instruksi Pembayaran</h3>
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
            <div > 
                <div className="Confirmation-Pay"> 
                <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button className="confirmationButton">Konfirmasi Pembayaran</button>
                </div>
                <div className="Upload-Nota">
                    <h4>Konfirmasi Pembayaran</h4>
                    <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                    <p>Upload Bukti Pembayaran</p>
                    <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                    <div>
                        <input type="file" id="file-ip-1" accept="image/*" onchange="showPreview(event);"/>
                    </div>
                    <button className="UploadButton" >Upload</button>
                </div>
            </div>
        </div>
        
    )
}

export default PaymentIns