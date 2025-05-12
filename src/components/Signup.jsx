import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext"; // ✅ Import language context

// ✅ Translations
const translations = {
  en: {
    heading: "Sign Up",
    usernamePlaceholder: "Enter Username",
    emailPlaceholder: "Enter Email",
    passwordPlaceholder: "Enter Password",
    phonePlaceholder: "Enter Phone",
    signUp: "Sign Up",
    loading: "Please wait as we upload your data!",
    success: "Signup successful!",
    already: "Already have an account?",
    signin: "Sign In",
    error: "Something went wrong. Please try again.",
  },
  sw: {
    heading: "Jisajili",
    usernamePlaceholder: "Weka Jina la Mtumiaji",
    emailPlaceholder: "Weka Barua Pepe",
    passwordPlaceholder: "Weka Nywila",
    phonePlaceholder: "Weka Nambari ya Simu",
    signUp: "Jisajili",
    loading: "Tafadhali subiri tunapopakia taarifa zako...",
    success: "Umesajiliwa kwa mafanikio!",
    already: "Tayari una akaunti?",
    signin: "Ingia",
    error: "Hitilafu imetokea. Tafadhali jaribu tena.",
  },
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { language, switchLanguage } = useLanguage(); // ✅ Language hook
  const t = translations[language];

  const submit = async (e) => {
    e.preventDefault();
    setLoading(t.loading);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://modcom2.pythonanywhere.com/api/signup",
        data
      );

      setLoading("");
      setSuccess(response.data.message || t.success);
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(t.error);
    }
  };

  return (
    <div className="container mt-5">
      {/* ✅ Language Picker */}
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
        <div className="col-md-6 auth-container">
          <h2 className="auth-title">{t.heading}</h2>

          {loading && <div className="alert alert-info auth-alert">{loading}</div>}
          {error && <div className="alert alert-danger auth-alert">{error}</div>}
          {success && <div className="alert alert-success auth-alert">{success}</div>}

          <form onSubmit={submit} className="auth-form">
            <input
              type="text"
              className="form-control"
              placeholder={t.usernamePlaceholder}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder={t.passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" className="auth-button">
              {t.signUp}
            </button>
          </form>

          <div className="mt-3 text-center">
            {t.already} <Link to="/signin">{t.signin}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
