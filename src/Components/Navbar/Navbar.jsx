import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart from '../Assests/cart.png'
import { Link } from "react-router-dom";
import LoginSignup from "../../Pages/LoginSignup";
const Navbar = () => {


        const [menu, setMenu] = useState('shop');

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shoppers</p>
            </div>

            <ul className="nav-menu">
            <li onClick={() => setMenu(menu === "shop" ? "" : "shop")}>
                <Link to='/'>Shop</Link>
                {menu === "shop" && <hr />}
            </li>
                <li onClick={() => setMenu("mens")}>
                <Link to='/mens'>Men</Link>
                     {menu === "mens" && <hr />}
                </li>
                
                <li onClick={() => setMenu("womens")}>
                <Link to='/womens'>Women</Link>
                     {menu === "womens" && <hr />}
                </li>

                <li onClick={() => setMenu("kids")}>
                <Link to='/kids'>Kids</Link>
                     {menu === "kids" && <hr />}
                </li>
                
            </ul>

            <div className="nav-login-cart">
               <Link to='/LoginSignup'><button>Login</button></Link>


                <div className="nav-cart-county">
                    <Link to='/cart'><img src={cart} alt="" /></Link>
                    <div className="nav-count">0</div>
                </div>
            </div>
        </div>
        );
    
        
}

export default Navbar;