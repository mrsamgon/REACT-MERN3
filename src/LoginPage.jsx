import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("Login submitted!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
