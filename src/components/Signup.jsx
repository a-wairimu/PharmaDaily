import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your data!");
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
      setSuccess(response.data.message);
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 auth-container">
          <h2 className="auth-title">Sign Up</h2>

          {loading && <div className="alert alert-info auth-alert">{loading}</div>}
          {error && <div className="alert alert-danger auth-alert">{error}</div>}
          {success && <div className="alert alert-success auth-alert">{success}</div>}

          <form onSubmit={submit} className="auth-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>

          <div className="mt-3 text-center">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
