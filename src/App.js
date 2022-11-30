import LandingPage from './Pages/LandingPage';
import './App.css';
import SearchCarsPage from './Pages/SearchCarsPage';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/searchcar' element={<SearchCarsPage />} />
      <Route path='/cardetail' element={<LandingPage />} />
    </Routes>
  )
}

export default App;
