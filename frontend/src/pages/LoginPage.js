import React from "react";
import "./LoginPage.css";


function LoginPage() {
  return (
    <div className="login-wrapper ">
      <div className="login-card">
        <h3 className="loginHeading">Login</h3>
        <form>
          <div className="inpur_field">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="inpur_field">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
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
