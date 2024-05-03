import React from 'react'
import { Link } from "react-router-dom" ;

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
        <img src='Assets/TrendyShoplogo.png' alt='navbar-logo'/>
        </div>
        <ul className='navbar-menu'> 
        <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Men">Men</Link></li>
            <li><Link to ="/Women">Women</Link></li>
        </ul>
    </div>
  )
}

export default Nav