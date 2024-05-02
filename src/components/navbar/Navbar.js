import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <nav className='nav'>
          <div className='nav__desktop-menu'>
              <Link activeclass='active' to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>HOME</Link>
              <Link activeclass='active' to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>WORK</Link>
          </div>

          <div className='nav__title'>
            <Link activeclass='active' to='/' className ='nav__desktop-menu-item'>PORTFOLIO</Link>
          </div>
      </nav>
    )
  }


export default Navbar