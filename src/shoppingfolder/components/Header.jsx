import React from 'react'
import { Link } from "react-router-dom" ;

const Header = () => {
  return (
    <>
    <div className='headerSection'>
    <div className="left">
            <li><Link to ="/"><img src="Assets/TrendyShoplogo.png" alt="TrendyShop" class="logo"/></Link></li>
    </div>
    <div className="center">
  
          <li><Link to ="/Men" className='nav-items' activeClassName="active">Men</Link></li>
          <li><Link to ="/Women" className='nav-items' activeClassName="active">Women</Link></li>
          <li><Link to ="/Children" className='nav-items' activeClassName="active">Children</Link></li>
          <li><Link to ="/Beauty" className='nav-items' activeClassName="active">Beauty</Link></li>
            
    </div>
    <div className="left">
        <input type="text" placeholder="Search.."  className='search'/></div>
        <Link to="/Validation"><img  src='Assets/profile.png' alt='user-img' className='wishlist'/></Link>
        <img src='Assets/favourite.png' alt='wishlist' className='wishlist'/>

    </div>
    </>
  )
}
export default Header