import React from 'react'
import './Menu.css'
import logo from '../Assets/Logo_white.png'
import cart_icon from '../Assets/nav_cart.png'
const Menu = () => {

    function goToHome (){
        window.location.href = '/home'
    }

    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo' onClick={()=>{goToHome()}}/>
            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                    <li><a href={'/mobile'}>Mobiles</a></li>
                    <li><a href={'/laptop'}>Laptops</a></li>
                    <li><a href={'/tv'}>TV</a></li>
                </ul>
            </div>

            <a href={'/cart'}> <img className={'cart-icon'} src={cart_icon} alt="cart icon"/> </a>

        </nav>
    )
}

export default Menu
