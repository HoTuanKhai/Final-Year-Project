import React from 'react'
import './Navbar.css'
//import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='nav-logo'>
              <img src={logo} alt='' />
              <p>TK Figures</p>
            </div>
        <ul className="nav-menu">
            <li>Hot Figures</li>
            <li>League of legend</li>
            <li>Dc&Marvel</li>            
            <li>Anime</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>
        </div>
    )
}

export default Navbar