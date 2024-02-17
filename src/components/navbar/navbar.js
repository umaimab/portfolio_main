import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <nav className='nav'>
          <div className='nav__desktop-menu'>
              <Link activeclass='active' to='/' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>HOME</Link>
              <Link activeclass='active' to='/work' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>WORK</Link>
              <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>SERVICES</Link>
              <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>ABOUT</Link>
          </div>

          <div className='nav__title'>
            <Link activeclass='active' to='/' className ='nav__desktop-menu-item'>PORTFOLIO</Link>
          </div>

          <div className='nav__contact'>
            <Link activeclass='active' to='contact' className ='nav__desktop-menu-item'>CONTACT</Link>
          </div>
      </nav>
    )
  }


export default Navbar