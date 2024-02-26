import React, { useState } from "react";

import "./styles/navbar.css";
import petlogo from "../Assests/petlogonew.png";


import cart_icon from "../Assests/cart_icon.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../Redux/action-types";


export const Navbar = () => {
  const login = useSelector((state)=>state.isLoggedIn);
  const user = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserName = ()=>{
    // if(user.name){
      const name = user.name?.split(" ")[0] || "";
      // console.log(name);
      return name
    // }
  }

  const handleLogout = async () => {
    dispatch({type:LOGOUT_REQUEST});
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await fetch("https://petpals-2z52.onrender.com/users/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (response.ok) {
        // localStorage.removeItem("token");
        dispatch({ type: LOGOUT_SUCCESS });
        navigate('/')
      } else {
        console.error("Logout request failed");
      }
    } catch (error) {
      dispatch({type:LOGOUT_FAILURE})
      console.error("Error occurred during logout:", error);
    }
  };

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
        {login?<span className="username">{`Hi, ${handleUserName()}`}</span>:<Link to="/login"><button>Login</button></Link>}
        {login?<button onClick={handleLogout}>Logout</button>:<Link to="/register"><button>signup</button></Link>}
        {/* <div className="nav-cart-count">0</div> */}
      </div>      
    </div>
  );
};

