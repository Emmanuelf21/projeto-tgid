import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const BtnCarrinho = ({carrinho}) => {
  const [soma, setSoma] = useState(0);

  const handleCancelar = () =>{
    carrinho.forEach(async (prod) => {
      try {
        const res = await fetch(`http://localhost:3000/carrinho/${prod.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
        if (!res.ok) {
          console.error(`Erro ao deletar produto com id ${prod.id}`);
        }
      } catch (error) {
        console.error('Erro na requisição DELETE:', error);
      }
    });
  }
  
  useEffect(() => {
    const total = carrinho.reduce((acc, prod) => {
      return acc + (prod.qtd * prod.preco);
    }, 0);
    setSoma(total);
  }, [carrinho]);
      
  return (
    <>
        <p>R$ {soma.toFixed(2)}</p>
        <button className='btn-compra'><NavLink to='/Compras'>Comprar</NavLink></button>
        <button className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
    </>
  )
}

export default BtnCarrinho