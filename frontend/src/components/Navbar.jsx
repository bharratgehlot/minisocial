import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar is-primary" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong style={{ color: '#FFD600' }}>MiniSocial</strong>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          {isAuthenticated && (
            <>
              <Link className="navbar-item" to="/">Home</Link>
              <Link className="navbar-item" to="/notifications">Notifications</Link>
            </>
          )}
        </div>

        <div className="navbar-end">
          {isAuthenticated ? (
            <>
              <Link className="navbar-item" to="/profile">Profile</Link>
              <button className="button is-light" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="navbar-item" to="/login">Login</Link>
              <Link className="navbar-item" to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;