import React from "react";
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

function Logo(){
    return(
       <Link to='/'> <div className='logo-header' alignitems= 'center'><img src={logo} alt='logo'/></div></Link>
    )
}

export default Logo;