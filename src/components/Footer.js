import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
function Footer(props) {
  return (
		<Navbar
			style={{ color: 'white' }}
			className='d-flex py-5 justify-content-center'>
			<Nav.Item>Copyright © 2023 | Design by Mariesa O'Connell</Nav.Item>
		</Navbar>
	);
}

export default Footer;
