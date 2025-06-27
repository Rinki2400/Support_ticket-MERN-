import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateLogin from "../validation/loginValidation";
import { handleLoginSubmit } from "../api/auth";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    await handleLoginSubmit(values, navigate);
    setValues({ email: "", password: "" });
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3 className="loginHeading">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="input_field">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-3">
            <span>Not registered? </span>
            <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;