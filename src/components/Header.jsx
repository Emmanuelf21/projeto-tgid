import React from 'react'

import { NavLink } from 'react-router-dom'
import lupa from '../assets/icones/search-icon.png'
import carrinho from '../assets/icones/carrinho.png'
import arrow from '../assets/icones/gray-arrow-dropdown.png'
import perfil from '../assets/icones/perfil.png'
import banner from '../assets/imagens/banner.png'

import './CSS/header.css'
import './CSS/dropdown.css'
import Carrinho from './Carrinho'



const Header = () => {
  return (
    <>
    
    <header className="container-header flex">
        <div className="container-search flex">
            <div className="flex">
                <div className="flex">
                    <div className="flex flex-logo">
                        <NavLink to='/'><h1>E-commerce</h1></NavLink>
                        <div>
                            <div className="search-bar flex">
                                <input className="input-search" type="text" placeholder="Digite aqui o que você procura"/>
                                <button className="btn-search"><img src={lupa} alt="lupa"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="user flex">
                        <div className="flex">
                            <img src={perfil} alt="icone-perfil"/>
                            <p>Olá,<br/>Nome cliente</p>
                        </div>
                        <NavLink to='/Compras' className="car">   {/*Definir rota do carrinho*/}
                            <img src={carrinho} alt="carrinho"/>
                        </NavLink>
                    </div>
                </div>
                <menu className="container-menu flex">
                    <div className="dropdown-menu-categorias">
                        <div className="flex">
                            <div className="image-burger"></div>
                            <p><b>Todas as Categorias</b></p>
                        </div>       
                        <div className="dropdown-departamentos-categorias flex">
                            <div className="departamentos-categorias flex">
                                <div className="departamentos flex">
                                    <NavLink to='/Cadeiras' className="departamento">
                                        <p>Cadeiras</p>
                                        <img src={arrow} alt=""/>
                                    </NavLink>
                                    <NavLink to='/Teclados' className="departamento">
                                        <p>Teclados</p>
                                        <img src={arrow} alt=""/>
                                    </NavLink>
                                    <NavLink to='/Monitores' className="departamento">
                                        <p>Monitores</p>
                                        <img src={arrow} alt=""/>
                                    </NavLink>
                                    
                                    <NavLink to='/Fones' className="departamento">
                                        <p>Fones de Ouvido</p>
                                        <img src={arrow} alt=""/>
                                    </NavLink>
                                    <NavLink to='/SSDs' className="departamento">
                                        <p>SSDs</p>
                                        <img src={arrow} alt=""/>
                                    </NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to='/Cadeiras' className="dropdown-menu-categorias menu-categorias">
                        <p>Cadeiras</p>
                    </NavLink >
                    <NavLink to='/Teclados' className="dropdown-menu-categorias menu-categorias" >
                        <p>Teclados</p>
                    </NavLink >
                    <NavLink to='/Monitores' className="dropdown-menu-categorias menu-categorias">
                        <p>Monitores</p>
                    </NavLink >
                    <NavLink to='/Fones' className="dropdown-menu-categorias menu-categorias">
                        <p>Fones de ouvido</p>
                    </NavLink >
                    <NavLink to='/SSDs' className="dropdown-menu-categorias menu-categorias">
                        <p>SSDs</p>
                    </NavLink >
                </menu>
            </div>
            
        </div>
    </header>
    <div className='flex'>
        <img className="banner" src={banner} alt="Banner" />
    </div>
    <Carrinho/>
    </>
  )
}

export default Header