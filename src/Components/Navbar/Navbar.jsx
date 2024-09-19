import React, { useState } from 'react'
import './Navbar.css'
//import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

        const [menu,setMenu] = useState("hot figures")

    return(
        <div className='navbar'>
            <div className='nav-logo'>
              {/* <img src={logo} alt='' /> */}
              <p>TK Figures</p>
            </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("hotfigures")}}><Link style={{ textDecoration: 'none' }} to='/'>Hot Figures</Link>{menu==="hotfigures"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("leagueoflegend")}}><Link style={{ textDecoration: 'none' }} to='/leagueoflegend'>League of legend</Link>{menu==="leagueoflegend"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Dc&Marvel")}}><Link style={{ textDecoration: 'none' }} to='/Dc&Marvel'>Dc&Marvel</Link>{menu==="Dc&Marvel"?<hr/>:<></>}</li>            
            <li onClick={() => {setMenu("Anime")}}><Link style={{ textDecoration: 'none' }} to='/Anime'>Anime</Link>{menu==="Anime"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
        </div>
    )
}

export default Navbar