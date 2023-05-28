import React from 'react';
import { Container } from 'react-bootstrap';

function Header(props) {
  return (
    <Container className='text-center m-5' fluid>
      <h1>Welcome to the DMZ</h1>
    </Container>
  );
}

export default Header;
