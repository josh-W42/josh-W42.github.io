import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
  return (
    <nav id="sideNav" className="container position-absolute rounded">
      <Nav defaultActiveKey="/" variant="pills" className="flex-column">
        <Link to="/" className="nav-link" role="button">
          <i className="fas fa-home"></i><span className="ms-2">Home</span>
        </Link>
        <Link to="/about" className="nav-link" role="button">
          <i className="fas fa-user-alt"></i><span className="ms-2">About</span>
        </Link>
        <Link to="/projects" className="nav-link" role="button">
          <i className="fas fa-code"></i><span className="ms-2">Projects</span>
        </Link>
        <Link to="/contact" className="nav-link" role="button">
          <i className="fas fa-address-book"></i><span className="ms-2">Contact</span>
        </Link>
      </Nav>
    </nav>
  );
}

export default SideNav;