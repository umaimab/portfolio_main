import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  
    return (
      <nav className='navbar'>
          <div className='desktopMenu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>HOME</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>WORK</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>SERVICES</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>ABOUT</Link>
          </div>

          <div className='desktopTitle'>
            <Link activeClass='active' to='home'>PORTFOLIO</Link>
          </div>

          <div className='desktopContact'>
            <Link activeClass='active' to='contact'>CONTACT</Link>
          </div>
      </nav>
    )
  }


export default Navbar