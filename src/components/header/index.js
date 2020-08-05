import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './style.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuState = false;
  const [menuToggle, setMenuToggle] = useState(menuState);
  const menuOpen = () => {
    setMenuToggle(!menuToggle); // меняю значение menuToggle
  }
  return (
    <div className="header">
      <menu className={!menuToggle ? "menu-default" : "active-menu"}>
        <div className="container">
          <div className="menu-header">
            <p><Link exact to="/" className="menu__link">Catalog</Link></p>
            <p><Link exact to="/new-products" className="menu__link">New product page</Link></p>
          </div>
        </div>
      </menu>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-wrapper">
          {menuToggle ? <CloseIcon className="menu-close" style={{ fontSize: 45 }} onClick={menuOpen} /> : <MenuIcon className="menu-icon" style={{ fontSize: 45 }} onClick={menuOpen} />}
        </div>
      </div>
    </div>

  )
}
export default Header;