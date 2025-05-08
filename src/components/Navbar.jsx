import { Link } from "react-router-dom";

const Navbar = () => {
return ( <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">

```
    {/* Brand Logo */}
    <img src="images/logo.png" alt="" className="socialspictures"/>

    <Link to="/" className="navbar-brand fw-bold text1">
      Pharma<span className="text-success text1">Daily</span>
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
          <b><Link to="/" className="nav-link text1">See Products</Link></b>
        </li>
        <li className="nav-item">
          <b><Link to="/addproducts" className="nav-link text1">Add your own products</Link></b>
        </li>
        
       
      </ul>

      {/* Authorization Links (Aligned Right) */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <b><Link to="/aboutus" className="nav-link text1">About us</Link></b>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="btn btn-outline-success me-2 text1">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="btn btn-success text1">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="btn btn-success text1">Chat with us</Link>
        </li>
      </ul>
    </div>
 
</nav>


);
};

export default Navbar;
