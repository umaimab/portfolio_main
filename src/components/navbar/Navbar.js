import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import menuButton from '../../assets/menu-button.svg'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <nav className='nav'>
          <div className='nav__desktop-menu'>
              <Link activeclass='active' to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>HOME</Link>
              <Link activeclass='active' to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__desktop-menu-item'>WORK</Link>
          </div>

          <div className='nav__title'>
            <Link activeclass='active' to='/' className ='nav__desktop-menu-item'><b>PORTFOLIO</b></Link>
          </div>

          <div className='nav__mob'>
            <Link activeclass='active' to='/' style={{
              textDecoration: 'none',
              color: 'inherit'}}><b>PORTFOLIO</b></Link>
              <img src={`${menuButton}`} alt='Menu' className='nav__mob-menu' onClick={()=>setShowMenu(!showMenu)} />
          </div>
          
            <div className='nav__mob-items' style={{display: showMenu ? 'flex':'none'}}>
              <Link activeClass='active' to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>HOME</Link>
              <Link activeClass='active' to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>WORK</Link>
            </div>
          
      </nav>
    )
  }


export default Navbar