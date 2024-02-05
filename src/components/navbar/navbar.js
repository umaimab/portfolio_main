import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <nav className='navbar'>
          <div className='desktopMenu'>
              <Link activeClass='active' to='/' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>HOME</Link>
              <Link activeClass='active' to='/work' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>WORK</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>SERVICES</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>ABOUT</Link>
          </div>

          <div className='desktopTitle'>
            <Link activeClass='active' to='/'>PORTFOLIO</Link>
          </div>

          <div className='desktopContact'>
            <Link activeClass='active' to='contact'>CONTACT</Link>
          </div>
      </nav>
    )
  }


export default Navbar