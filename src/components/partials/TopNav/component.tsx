import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

interface Props {
  expanded: boolean;
  toggle: () => void;
}

export const TopNavComponent: FunctionComponent<Props> = ({
  expanded,
  toggle,
}) => {
  return (
    <Navbar
      id="topNav"
      className="navbar-dark bg-dark"
      expand="lg"
      expanded={expanded}
    >
      <Link to="/" className="nav-link" role="button">
        <Navbar.Brand className="ms-2 text-reset">
          <Image
            src="https://res.cloudinary.com/dom5vocai/image/upload/v1615930252/new_logo_bwgzbl.png"
            width="50px"
            height="50px"
            rounded
          />
          Joshua Wilson
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" onClick={toggle} role="button">
            <i className="fas fa-home"></i>
            <span className="ms-2">Home</span>
          </Link>
          <Link to="/about" className="nav-link" onClick={toggle} role="button">
            <i className="fas fa-user-alt"></i>
            <span className="ms-2">About</span>
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={toggle}
            role="button"
          >
            <i className="fas fa-code"></i>
            <span className="ms-2">Projects</span>
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={toggle}
            role="button"
          >
            <i className="fas fa-address-book"></i>
            <span className="ms-2">Contact</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
