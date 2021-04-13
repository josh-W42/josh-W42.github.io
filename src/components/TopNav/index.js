import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './topNav.css';

const TopNav = (props) => {
  return (
    <Navbar id="topNav" className="navbar-dark bg-dark" expand="lg">
      <Link to="/" className="nav-link" role="button">
        <Navbar.Brand className="ms-2 text-reset">Joshua Wilson</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" role="button">
            <i className="fas fa-home"></i><span className="ms-2">Home</span>
          </Link>
          <Link to="/about" className="nav-link" role="button">
            <i className="fas fa-user-alt"></i><span className="ms-2">About</span>
          </Link>
          <Link to="/projects" className="nav-link" role="button">
            <i className="fas fa-code"></i><span className="ms-2">Projects</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;
