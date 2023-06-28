import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import HorizonView from './components/coursePages/HorizonView';
import SoaringHeights from './components/coursePages/SoaringHeights';
import Basics from './components/learnPages/Basics';
import Instructors from './components/learnPages/Instructors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path='/horizonView' element={<HorizonView/>} />
        <Route exact path='/soaringHeights' element={<SoaringHeights/>} />
        <Route exact path='/learn/basics' element={<Basics/>} />
        <Route exact path='/learn/instructors' element={<Instructors/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
