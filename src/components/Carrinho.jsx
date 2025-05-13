import React, { useEffect, useState } from 'react'
import './CSS/carrinho.css'
import MiniCard from './MiniCard'
import BtnCarrinho from './BtnCarrinho'

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([])
  
  const getCarrinho = async ()=>{
    const res = await fetch('http://localhost:3000/carrinho')
    const data = await res.json()
    setCarrinho(data)
    
  }

 
  useEffect(()=>{
    getCarrinho(); // busca inicial

  const interval = setInterval(() => {
    getCarrinho(); // busca a cada 3 segundos
  }, 1000);

  return () => clearInterval(interval);
  },[])

  return (
    <section id="carrinho" className="carrinho visivel" style={{display: carrinho.length>0? 'flex': 'none'}}>
            <div className="carrinho-produtos">
            {carrinho.length > 0 && carrinho.map((produto) => <MiniCard key={produto.id} produtoCar={produto} />)}
            </div>
            <div className="carrinho-preco">
              <BtnCarrinho carrinho = {carrinho}/>
            </div>
    </section>
  )
}

export default Carrinho