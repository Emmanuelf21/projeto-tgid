import React, { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard';

import './CSS/home.css'

const Home = () => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        const res = await fetch('http://localhost:3000/produtos/');
        const data = await res.json();
        setProdutos(data);
    };

    useEffect(()=>{
        getProdutos()
    },[])

  return (
    <section className="container-produtos flex">
        {produtos.length > 0 && produtos.map((produto) => <ProdutoCard key={produto.id} produto={produto} />)}
    </section>
  )
}

export default Home