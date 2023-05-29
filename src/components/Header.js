import React from 'react';
import '../styles/header.css'
import logo from '../images/DMZ.png'

function Header(props) {
  return (
    <div className='align-self-center'>
        <img className='img-fluid' style={{maxHeight: 400}} src={logo} alt='logo'/>
    </div>
  );
}

export default Header;
