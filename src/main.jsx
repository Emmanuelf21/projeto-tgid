import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Teclados from './pages/Teclados.jsx'
import Cadeiras from './pages/Cadeiras.jsx'
import Monitores from './pages/Monitores.jsx'
import Fones from './pages/Fones.jsx'
import Ssd from './pages/Ssd.jsx'
import Compras from './pages/Compras.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route element={<App/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cadeiras' element={<Cadeiras/>}/>
          <Route path='/Teclados' element={<Teclados/>}/>
          <Route path='/Monitores' element={<Monitores/>}/>
          <Route path='/Fones' element={<Fones/>}/>
          <Route path='/SSDs' element={<Ssd/>}/>
          <Route path='/Compras' element={<Compras/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
