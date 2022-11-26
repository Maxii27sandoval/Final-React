import React from 'react';

import './styles.css';

import Logo from '../../assets/logo.png';

import CartWidget from '../CartWidget';

import { Link } from 'react-router-dom';
import { TbPoint } from 'react-icons/tb';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <img src={Logo} alt='' className='navLogo' />
            <ul className='listaEnlacesMiddle'>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/bebidas'>Tu Escabio</Link>
                </li>
                <li className='submenu'>
                    <Link to=''>Opciones</Link>
                    <ul className='submenuHijos'>
                        <div className='blackBox'>
                            <li>
                                <TbPoint color='white' /><Link to='/category/Vodka'>Vodka</Link>
                            </li>
                            <li>
                                <TbPoint color='white' /><Link to='/category/Fernet'>Fernet</Link>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
            <div className='carrito'>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;