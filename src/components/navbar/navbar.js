import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <nav className='nav'>
          <div className='nav__desktop-menu'>
              <Link activeClass='active' to='/' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>HOME</Link>
              <Link activeClass='active' to='/work' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>WORK</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>SERVICES</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>ABOUT</Link>
          </div>

          <div className='nav__title'>
            <Link activeClass='active' to='/' className ='nav__desktop-menu-item'>PORTFOLIO</Link>
          </div>

          <div className='nav__contact'>
            <Link activeClass='active' to='contact' className ='nav__desktop-menu-item'>CONTACT</Link>
          </div>
      </nav>
    )
  }


export default Navbar