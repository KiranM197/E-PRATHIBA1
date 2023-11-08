import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
  return (
   <>
   <div>
   <nav  className="navbar ">
    <a  id = "title"  >E-PRATHIBA</a>

    <ul className=" navbar-nav" >

    <li><Link className="nav-item active" to  = {"/"}>HOME</Link></li>
    <li><Link className="nav-item active " to ={"/packages"}>PACKAGES</Link></li>
    <li><Link className="nav-item active " to={"/login"}>REGISTER/LOGIN</Link></li>
    </ul>
    

    


    
    

   </nav>

   </div>
   
   </>
  )
}

export default Header