import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <nav className='nav'>
          <div className='nav__desktop-menu'>
              <Link to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>HOME</Link>
              <Link to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>WORK</Link>
          </div>

          <div className='nav__title'>
            <Link to='/' className ='nav__desktop-menu-item'><b>PORTFOLIO</b></Link>
          </div>

          <div className='nav__mob'>
            <svg className={showMenu ? 'nav__mob-button-svg menu-open' : 'nav__mob-button-svg'} onClick={()=>setShowMenu(!showMenu)}>
              <line x1="0" y1="50%" x2="100%" y2="50%" class="top" shape-rendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" class="middle" shape-rendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" class="bottom" shape-rendering="crispEdges" />
            </svg>
            <Link to='/' style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.1rem'}}>
              <b>PORTFOLIO</b>
            </Link>
          </div>
          
          <div className={`nav__mob-items${showMenu ? ' active' : ''}`}>
              <Link to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>HOME</Link>
              <Link to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>WORK</Link>
          </div>
      </nav>
    )
  }


export default Navbar