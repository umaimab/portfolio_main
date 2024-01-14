import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  
    return (
      <nav className='navbar'>
          <div className='desktopMenu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>Home</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>Work</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>Services</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className ='desktopMenuListItem'>About</Link>
          </div>

          <div className='desktopTitle'>
            <Link activeClass='active' to='home'>Portfolio</Link>
          </div>

          <div className='desktopContact'>
            <Link activeClass='active' to='contact'>Contact</Link>
          </div>
      </nav>
    )
  }


export default Navbar