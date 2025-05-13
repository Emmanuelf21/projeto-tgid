import React, { useEffect, useState } from 'react'

const ProdutosCarrinho = ({produto}) => {
    const imagePath = './src/assets/imagens/'
    const [carrinho, setCarrinho] = useState([])

    const getCarrinho = async () =>{
        const res = await fetch('http://localhost:3000/carrinho')
        const data = await res.json()
        setCarrinho(data)
    }
    const handleClick = async (e) =>{
        const id = e.target.id;
        await fetch(`http://localhost:3000/carrinho/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        refresh()
    }
    
    async function refresh() {
        setTimeout(() => {
            window.location.reload();
        }, 10);
    }

    useEffect(() =>{
        getCarrinho()
    }, [carrinho])
  return (
    <div className="card-compra flex">
            <img src={imagePath + produto.imagem} alt="#"/>
                <div className="flex-column">
                    <h4>{produto.nome}</h4>
                    <p>{produto.descricao}</p>
                    <p>R$ {produto.preco}</p>
                </div>
                <button id={produto.id} onClick={handleClick} className="btn-card">Remover</button>
        </div>
  )
}

export default ProdutosCarrinho