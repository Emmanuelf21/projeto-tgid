import React, { useEffect, useState } from 'react'

const BtnAdd = ({produto}) => {
  const [carrinho, setCarrinho] = useState([])
  function verificarCarrinho(id) {
    const prod = carrinho.find(prod => prod.id == id)
    if (prod) {
        return true;
    } else {
        return false;
    }
  }

  const handleClick = async (e) =>{
    
    const existeNoCarrinho = verificarCarrinho(e.target.id);

    if (!existeNoCarrinho) {
      const novoProd = produto;
      novoProd['qtd'] = 1

      const res = await fetch('http://localhost:3000/carrinho',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProd)
      })

      const response = await fetch('http://localhost:3000/carrinho')
      const data = await response.json()
      setCarrinho(data)
    }

  } 

  
  return (
    <button id={produto.id} onClick={handleClick} className="btn-card">Adicionar ao carrinho</button>
  )
}

export default BtnAdd