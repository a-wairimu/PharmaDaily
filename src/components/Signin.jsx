import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLanguage } from "./LanguageContext"; 


const translations = {
  en: {
    heading: "Sign In",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    signIn: "Sign In",
    loading: "Please wait as we log you in...",
    error: "An error occurred. Please try again.",
    selectLanguage: "Select Language",
    success: "Login successful! Redirecting...",
  },
  sw: {
    heading: "Ingia",
    emailLabel: "Barua Pepe",
    emailPlaceholder: "Weka barua pepe yako",
    passwordLabel: "Nywila",
    passwordPlaceholder: "Weka nywila yako",
    signIn: "Ingia",
    loading: "Tafadhali subiri tunakuingiza...",
    error: "Hitilafu imetokea. Tafadhali jaribu tena.",
    selectLanguage: "Chagua Lugha",
    success: "Umeingia! Tunakuelekeza...",
  },
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { language, switchLanguage } = useLanguage(); 
  const t = translations[language]; 

  const submit = async (e) => {
    e.preventDefault();
    setLoading(t.loading);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://AngelaWairimu5429.pythonanywhere.com/api/signin",
        data
      );

      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess(t.success);
        navigate("/");
      } else {
        setError(response.data.Message);
      }
    } catch (error) {
      setLoading("");
      setError(t.error);
    }
  };

  return (
    <div className="container mt-5">
      {/*  Language Selector */}
      <div className="text-end mb-3">
        <select
          className="form-select w-auto"
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
        </select>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 signin-container">
          <h2 className="signin-title">{t.heading}</h2>

          {loading && <div className="alert alert-info">{loading}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={submit} className="signin-form">
            <div className="mb-3">
              <label htmlFor="email">{t.emailLabel}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password">{t.passwordLabel}</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="signin-button">
              {t.signIn}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
