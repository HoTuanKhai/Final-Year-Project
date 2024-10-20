import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Asset/nav_dropdown.png'


const Navbar = () => {

        const [menu,setMenu] = useState("hot figures");
        const {getTotalCartItems} = useContext(ShopContext);
        const menuRef = useRef();

        const dropdown_toggle = (e) =>{
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }

    return(
        <div className='navbar'>
            <div className='nav-logo'>
              <img src={logo} alt='' /> 
              <p>TK Figures</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("figures")}}><Link style={{ textDecoration: 'none' }} to='/'>Figures</Link>{menu==="figures"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("leagueoflegend")}}><Link style={{ textDecoration: 'none' }} to='/leagueoflegend'>League of legend</Link>{menu==="leagueoflegend"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Onepiece")}}><Link style={{ textDecoration: 'none' }} to='/Onepiece'>One piece</Link>{menu==="Onepiece"?<hr/>:<></>}</li>            
                <li onClick={() => {setMenu("Pokemon")}}><Link style={{ textDecoration: 'none' }} to='/Pokemon'>Pokemon</Link>{menu==="Pokemon"?<hr/>:<></>}</li>
            </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
    )
}

export default Navbar