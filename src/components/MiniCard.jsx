import React, { useEffect, useState } from 'react'

const MiniCard = ({produtoCar}) => {
    const imagePath = './src/assets/imagens/'
    const [carrinho, setCarrinho] = useState([])

    const getCarrinho = async () =>{
        const res = await fetch('http://localhost:3000/carrinho')
        const data  = await res.json()
        setCarrinho(data)
    }

    const handleDiminuir = (e) =>{
        const id = e.target.id
        const prod = carrinho.find((prod) => prod.id == id);
        
        if(!prod) return;
        

        if (prod.qtd == 1) {
            const response =  fetch(`http://localhost:3000/carrinho/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            getCarrinho();
        } else {
            const novoProd = { ...prod, qtd: prod.qtd - 1 };
            alterarQtd(id, novoProd);
        }

    }

    const handleAumentar = (e) =>{
        const id = e.target.id
        const prod = carrinho.find((prod) => prod.id == id);
        
            if(prod){
                const novoProd = { ...prod, qtd: prod.qtd + 1 };
                alterarQtd(id,novoProd)
            }
        
        
    }

    const alterarQtd = async (id, prod) =>{
        await fetch(`http://localhost:3000/carrinho/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        })
        getCarrinho()
    }

useEffect(()=>{
    getCarrinho();
},[])
  return (
        <span id={produtoCar.id} className="mini-card">
            <img src={imagePath + produtoCar.imagem} alt=""/>
            <h3>{produtoCar.nome}</h3>
            <p>R$ {produtoCar.preco}</p>
            <div className='flex'>
                <button id={produtoCar.id} onClick={handleDiminuir} className='menos'>-</button>
                <p>{produtoCar.qtd}</p>
                <button id={produtoCar.id} onClick={handleAumentar} className='mais'>+</button>
            </div>
        </span>
  )
}

export default MiniCard