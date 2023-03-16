import React from 'react';
import './assets/css/style.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
const App = () => {
  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
   </>
  );
};
export default App;