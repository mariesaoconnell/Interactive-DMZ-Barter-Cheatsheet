import React from 'react';
import '../styles/header.css'
import logo from '../images/DMZ.png'
import { Ratio } from 'react-bootstrap';

function Header(props) {
  return (
    <div className='align-self-center' style={{width: 600, height: 'auto'}}>
      <Ratio aspectRatio='16x9'>
        <img src={logo} alt='logo'/>
      </Ratio>
    </div>
  );
}

export default Header;
