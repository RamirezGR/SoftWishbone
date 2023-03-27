import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
import { FaBars, FaShoppingCart, FaTimes} from 'react-icons/fa'
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
        <div >
          <Link to="/"className="logo">
            <img src="./images/soft-wishbone.png" alt="logo" />
          </Link>  
        </div>
            <ul className={click ? "nav-links activate" : "nav-links"}>
                <li className='nav-item'>
                  <NavLink
                    to='/' 
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      HOME
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/about'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      ABOUT
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/shop'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      SHOP
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/login'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      PRIVACY
                    </NavLink>
                  </li>
            </ul>
            
        <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className='login-btn'>
          <Button 
            title='Log-In'
          />
          <NavLink to='/cart'>
            {location.pathname === "/shop" && <Button title= {<FaShoppingCart/>}/>}
          </NavLink>
        </div>
    </nav>
  )
}

export default Navbar