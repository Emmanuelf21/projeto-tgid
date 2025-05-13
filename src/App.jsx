import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Carrinho from './components/Carrinho'

const App = () => {
  return (
    <div className='app-container'>
      <Outlet/>
     
    </div>
  )
}

export default App