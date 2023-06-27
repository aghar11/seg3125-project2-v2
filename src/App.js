import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import HorizonView from './components/coursepages/HorizonView';
import SoaringHeights from './components/coursepages/SoaringHeights';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path='/horizonView' element={<HorizonView/>} />
        <Route exact path='/soaringHeights' element={<SoaringHeights/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
