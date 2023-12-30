import React from 'react'
import './Menu.css'
import logo from '../Assets/logo.gif'
import user_icon from '../Assets/user_nav.png'
import { memo, useEffect, useState } from "react";
import User_info from "../../Views/User_info";


const Menu = () => {

    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/home'}>Mobilaty</a>
            </div>
            <div className="logo2-container">
                <img src={user_icon}/>
                <ul className="subnav">
                    <li ><button className="btui">Logout</button></li><hr/>
                    <li className="ui2"><a href={'/user_info'}>User Info</a></li>
                </ul>

            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                    <li><a href={'/mobile'}>Mobiles</a></li>
                    <li><a href={'/laptop'}>Laptops</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Menu
