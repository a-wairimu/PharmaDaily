import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-info shadow-sm mt-1">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Pharma<span className="text-success">Daily</span>
        </Link>

        

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">See Products</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addproducts" className="nav-link">Add your own products</Link></b>
            </li>
            
           
          </ul>

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <b><Link to="/aboutus" className="nav-link">About us</Link></b>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-success me-2">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-success">Sign up</Link>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;