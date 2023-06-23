import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { UilUser } from '@iconscout/react-unicons';

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="header-nav">
          <h2 className="logo">Bookstore CMS</h2>
          <Link to="/" className="homepage">
            BOOKS
          </Link>
          <Link to="/categories" className="option">
            CATEGORIES
          </Link>
        </div>
        <UilUser size="31" color="#0290ff" />
      </div>
    </div>
  );
}

export default NavBar;
