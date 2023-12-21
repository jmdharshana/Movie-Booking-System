import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Homepage from './Pages/homepage';
import './styles/global.css';
import Aboutpage from './Pages/homepage/aboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/'element={<Homepage/>}></Route>
      <Route path='/about'element={<Aboutpage/>}></Route>

    </Routes>
  </Router>
);


