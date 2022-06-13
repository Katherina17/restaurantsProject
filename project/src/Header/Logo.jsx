import React from "react";
import logo from "../assets/logo.svg";
import HeaderModule from '../style/header-style/HeaderModule.css';

function Logo(){
    return(
        <div className='logo-header'><img src={logo} alt='logo'/></div>
    )
}

export default Logo;