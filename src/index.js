import React from 'react';
import { Event, Trailer, News, Sofi, Kenny, FilmDewa, Shanaya, MataDewa } from './components/routes/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { sliderData } from './components/data/sliderData';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css';
import "./utils.css";
import './index.css';
import './i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/event' element={<Event slides={sliderData}/>} />
    <Route path='/our-product' element={<Trailer />} />
    <Route path='/news' element={<News />} />
    <Route path='/news/shanaya-films' element={<Shanaya />} />
    <Route path='/news/mata-dewa' element={<MataDewa />} />
    <Route path='/news/mata-dewa-perjuangan-pebasket-tanpa-mata' element={<FilmDewa />} />
    <Route path='/news/sinopsis-film-mata-dewa-pebasket-yang-satu-matanya-jadi-korban' element={<Kenny />} />
    <Route path='/news/filo-kopi-sofi' element={<Sofi />} />
  </Routes>
  </BrowserRouter>
);