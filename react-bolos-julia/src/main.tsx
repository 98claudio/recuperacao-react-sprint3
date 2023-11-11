import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';

//BrowserRoter -> indica que tera uma config de rotas
//Routes -> indica que tera uma lista de rotas
//Route -> indica uma rotas de um respectivo componente

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Rotas*/}
    {/* componentes*/}

    <BrowserRouter>
      <Header />  {/* 1 */}

      <Routes>    {/* 2 */}
        <Route path='/' element={<Home />} /> {/*Pagina principal */}
        <Route path='cadastro/bolo' element={<CadastroBolo/>} />
        <Route path='lista/bolo' element={<ListaBolo />} />
      </Routes>
      

      <Footer />  {/* 3 */}
    </BrowserRouter>

  </React.StrictMode>,
)
