import React, { useState } from "react";

import "./styles/Navbar.css";
import petlogo from "../Assests/petlogonew.png";


import cart_icon from "../Assests/cart_icon.png"
import { Link } from "react-router-dom";


export const Navbar = () => {

  const [menu,setMenu]=useState("home")
  return (
    <div className="navbar" >
      <div className="nav-logo">
        <img src={petlogo} alt="petlogo"/>
        <p>PETPALS</p>
      </div>
      <ul className="nav-manu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:"none"}}to='/' smooth duration={500}>Home</Link>{menu==="home"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("dog")}}> <Link style={{textDecoration:"none"}} to='/dog' smooth duration={500}>Dog</Link >{menu==="dog"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cat")}}> <Link style={{textDecoration:"none"}} to='/cat' smooth duration={500}>Cat</Link >{menu==="cat"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:"none"}}to="/about" smooth duration={500}>About</Link> {menu==="about"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("adopt")}}><Link style={{textDecoration:"none"}} to="/pet-adoption" smooth duration={500}>Adopt</Link>{menu==="pet-adoption"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("contect")}}><Link style={{textDecoration:"none"}}to="/contact" smooth duration={500}>Contact</Link> {menu==="contect"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" /></Link>
        <div className="nav-cart-count">0</div>
      </div>

      
    </div>
  );
};

