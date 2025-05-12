import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const t = {
    en: {
      seeProducts: "See Products",
      addProducts: "Add your own products",
      aboutUs: "About us",
      signIn: "Sign in",
      signUp: "Sign up",
      chat: "Chat with us",
    },
    sw: {
      seeProducts: "Angalia Bidhaa",
      addProducts: "Ongeza bidhaa zako",
      aboutUs: "Kuhusu sisi",
      signIn: "Ingia",
      signUp: "Jisajili",
      chat: "Zungumza nasi",
    },
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      <img src="images/logo.png" alt="" className="socialspictures" />
      <Link to="/" className="navbar-brand fw-bold text1">
        Pharma<span className="text-success text1">Daily</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b><Link to="/" className="nav-link text1">{t[language].seeProducts}</Link></b>
          </li>
          <li className="nav-item">
            <b><Link to="/addproducts" className="nav-link text1">{t[language].addProducts}</Link></b>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-3">
            <select
              className="form-select form-select-sm"
              style={{ width: "auto" }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="sw">Swahili</option>
            </select>
          </li>
          <li className="nav-item">
            <b><Link to="/aboutus" className="nav-link text1">{t[language].aboutUs}</Link></b>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-success me-2 text1">{t[language].signIn}</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-success text1">{t[language].signUp}</Link>
          </li>
          <li className="nav-item">
            <Link to="/chat" className="btn btn-success text1">{t[language].chat}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
