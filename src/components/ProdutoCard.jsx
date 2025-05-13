import React from 'react'
import BtnAdd from './BtnAdd'


const ProdutoCard = ({produto}) => {
    const imagePath = './src/assets/imagens/'

    // const image = request('../assets/imagens/' + produto.imagem)
    return (
        <div className="card flex-column">
            <img src={imagePath + produto.imagem} alt="#"/>
                <div className="flex-column">
                    <h4>{produto.nome}</h4>
                    <p>{produto.descricao}</p>
                    <p>R$ {produto.preco}</p>
                </div>
                <div className='div-btn'>
                    <BtnAdd produto={produto}/>
                </div>
        </div>
    )
}

export default ProdutoCard