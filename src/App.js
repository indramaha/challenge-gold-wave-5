import LandingPage from './Pages/LandingPage';
import './App.css';
import SearchCarsPage from './Pages/SearchCarsPage';
import {Routes, Route} from 'react-router-dom';
import CarDetailPage from './Pages/CarDetailPage';
import PaymentPage from './Pages/PaymentPage';
import SigninPage from './Pages/SigninPage';
import SignupPage from './Pages/SignupPage';
import PaymentInsPage from './Pages/PaymentInsPage';
import PaymentBerhasil from './Pages/PaymentBerhasilPage';



const App = () => {
  return(
    <div className='app'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/searchcar' element={<SearchCarsPage />} />
        <Route path='/cardetail/:id' element={<CarDetailPage />} />
        <Route path='/paymentIns/:id' element={<PaymentInsPage/>} />
        <Route path='/PaymentNotif' element={<PaymentBerhasil/>} />
        <Route path='/payment/:id' element={<PaymentPage />} />
        <Route path='/SigninPage' element={<SigninPage />} />
        <Route path='/SignupPage' element={<SignupPage />} />
      </Routes>
    </div>
    
  )
}

export default App;
