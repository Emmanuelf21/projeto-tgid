import React, { useEffect, useState } from 'react'
import ProdutosCarrinho from '../components/ProdutosCarrinho';


const Compras = () => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        const res = await fetch('http://localhost:3000/carrinho');
        const data = await res.json();
        setProdutos(data);
    };

    useEffect(()=>{
        getProdutos()
    },[])
  return (
    <section className="container-produtos flex">
        {produtos.length > 0 && produtos.map((produto) => <ProdutosCarrinho key={produto.id} produto={produto} />)}
    </section>
  )
}

export default Compras