import React from 'react'
import './Menu.css'
import logo from '../Assets/logo.gif'
import cart_icon from '../Assets/nav_cart.png'
const Menu = () => {
    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/home'}>Dream 2002</a>
            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                    <li><a href={'/mobile'}>Mobiles</a></li>
                    <li><a href={'/laptop'}>Laptops</a></li>
                </ul>
            </div>

            <a href={'/cart'}> <img className={'cart-icon'} src={cart_icon} alt="cart icon"/> </a>

        </nav>
    )
}

export default Menu
