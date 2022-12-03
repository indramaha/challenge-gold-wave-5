import LandingPage from './Pages/LandingPage';
import './App.css';
import SearchCarsPage from './Pages/SearchCarsPage';
import {Routes, Route} from 'react-router-dom';
import CarDetailPage from './Pages/CarDetailPage';

const App = () => {
  return(
    <div className='app'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/searchcar' element={<SearchCarsPage />} />
        <Route path='/cardetail/:id' element={<CarDetailPage />} />
      </Routes>
    </div>
    
  )
}

export default App;
