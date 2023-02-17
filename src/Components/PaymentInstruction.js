import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentInstruction.css';
import CobaCountdown from './countdown';
import CobaCountdown1 from './countdown10m';
import Deadlineshow from './deadline';

const PaymentIns = () => {
  const { state } = useLocation();
  const price = state.price;
  const orderid = state.id;
  const NamaMobil = state.NamaMobil;
  const Mulai = state.Mulai;
  const Berakhir = state.Berakhir

  console.log (Berakhir)
  

  const [showConfirmation, setShowConfirmastion] = useState(false);
  const handleShowConfirmation = () => {
    setShowConfirmastion(true);
  };

  //Upload Nota
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handleUploadBtn = () => {
    localStorage.setItem ('price',price)
    localStorage.setItem ('order-ID',orderid)
    localStorage.setItem ('Nama-Mobil',NamaMobil )
    localStorage.setItem ('Mulai-Sewa',Mulai)
    localStorage.setItem ('Berakhir-Sewa',Berakhir)
    
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        access_token: token,
      },
    };

    const formData = new FormData();
    formData.append('slip', selectedFile);

    axios
      .put(
        `https://bootcamp-rent-cars.herokuapp.com/customer/order/${orderid}/slip`,
        formData,
        config
      )
      .then((ress) => {
        navigate(`/paymentnotif/${orderid}`);
      })
      .catch((err) => console.log(err.message));
  };

 

  return (
    <div className='PaymentIns-Home'>
      <div className='Instruction-Content'>
        <div className='countdown'>
          <div className='countdown1'> 
            <div> <h3 className='countdownH3'>Selesaikan Pembayaran </h3> </div>
            <div><CobaCountdown/></div>
          </div>
          <div className='batasWaktu'> <Deadlineshow/> </div>
        </div>
        <div className='BankAcc'>
          <h3 className='BankAccH3'>Lakukan Transfer Ke</h3>
          <div className='NorekBCR'>
            <div className='BoxBCA'>
              <p> BCA </p>
            </div>
            <div>
              <p> BCA Transfer </p>
              <p> a.n Binar Car Rental</p>
            </div>
          </div>
          <div className='BankDetail'>
            Nomor Rekening
            <input placeholder='54104257877' />
            Total Bayar
            <p>Rp {price} </p>
          </div>
        </div>
        <div className='PaymentMetod'>
          <h3 className='PaymentMetodH3'>Instruksi Pembayaran</h3>
          <div className='BankTutor'>
            <h4>ATM BCA</h4>
            <h4>MBCA</h4>
            <h4>BCA Klik</h4>
            <h4>Internet Banking</h4>
          </div>
          <div className='list-metod'>
            <li>Memasukan kartu ATM, lalu PIN</li>
            <li>
              Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual
              Account
            </li>
            <li>Masukan nomor BCA Virtuan Account: 70020+Order ID</li>
            <div>Contoh</div>
            <div>No. peserta 12345678, maka ditulis 7002012345678 </div>
            <li>
              Layar ATM Akan menampilkan konfirmasi, ikuti inttruksi untuk
              menyelesaikan transaksi
            </li>
            <li>Ambil dan simpanlah bukti transaksi tersebut</li>
          </div>
        </div>
      </div>
      <div className='main-card-confirmation-pay'>
        <div className='Confirmation-Pay'>
          <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
          <button
            className='confirmationButton'
            onClick={handleShowConfirmation}
          >
            Konfirmasi Pembayaran
          </button>
        </div>

        {showConfirmation && (
          <div className='Upload-Nota'>
            <div className='upload-nota-card'>
                <div><h4>Konfirmasi Pembayaran</h4></div>
                <div><CobaCountdown1/></div>
            </div>
            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>
            <p>Upload Bukti Pembayaran</p>
            <p>
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
              upload bukti bayarmu
            </p>
            <div className='upload-nota-form'> 
                  <input type='file' onChange={onSelectFile} />
                  {selectedFile && <img src={preview} />}
            </div>
            <button className='UploadButton' onClick={handleUploadBtn}>
              Upload{' '}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentIns;