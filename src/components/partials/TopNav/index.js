import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

const TopNav = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  }

  return (
    <Navbar id="topNav" className="navbar-dark bg-dark" expand="lg" expanded={expanded}>
      <Link to="/" className="nav-link" role="button">
        <Navbar.Brand className="ms-2 text-reset">Joshua Wilson</Navbar.Brand>
      </Link>
      <Navbar.Toggle onClick={toggleExpanded} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" onClick={toggleExpanded} role="button">
            <i className="fas fa-home"></i><span className="ms-2">Home</span>
          </Link>
          <Link to="/about" className="nav-link" onClick={toggleExpanded} role="button">
            <i className="fas fa-user-alt"></i><span className="ms-2">About</span>
          </Link>
          <Link to="/projects" className="nav-link" onClick={toggleExpanded} role="button">
            <i className="fas fa-code"></i><span className="ms-2">Projects</span>
          </Link>
          <Link to="/contact" className="nav-link" onClick={toggleExpanded} role="button">
            <i className="fas fa-address-book"></i><span className="ms-2">Contact</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;
