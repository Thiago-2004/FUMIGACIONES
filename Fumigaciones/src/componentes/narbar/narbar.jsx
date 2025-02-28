// import React from 'react';
// import './narbar.css';  // Asegúrate de que la ruta y el nombre del archivo sean correctos
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../assets/imagenes/logo.png';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavbarCustom() {
//  return (
//     <Navbar  className="bg-celeste fs-3">
//       <Container>
//         <Navbar.Brand as={Link} to="/Fumitecno">
//           <img className='logo' src={logo} alt="Fumitecno" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
//             <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
//             <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default NavbarCustom;


import React from 'react';
import './narbar.css'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/imagenes/logo.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-celeste fs-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/Fumitecno">
          <img className="logo" src={logo} alt="Fumitecno" />
        </Navbar.Brand>
        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;

