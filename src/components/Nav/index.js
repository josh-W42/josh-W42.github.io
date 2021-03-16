import './nav.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className="nav-container container position-absolute rounded">
      <Nav defaultActiveKey="/" variant="pills" className="flex-column">
        <Link to="/" className="nav-link" role="button">
          <i className="fas fa-home"></i><span className="ms-2">Home</span>
        </Link>
        <Link to="/about" className="nav-link" role="button">
          <i class="fas fa-user-alt"></i><span className="ms-2">About</span>
        </Link>
        <Link to="/projects" className="nav-link" role="button">
          <i className="fas fa-code"></i><span className="ms-2">Projects</span>
        </Link>
      </Nav>
    </nav>
  );
}

export default SideNav;