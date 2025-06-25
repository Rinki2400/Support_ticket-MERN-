// src/pages/Home.js
import React from 'react';
import '../pages/Home.page.css'
// import logo from '../assets/animation/call-center.png'
import Animation from '../assets/animation/Call Center.gif'

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <img src="" alt="Logo" className="logo" />
        <button className="login-btn">Login</button>
      </nav>

      <main className="main-content">
        <h1>Welcome to the Support Portal</h1>
        <p>Submit your issues and get help fast.</p>
        <img src={Animation} alt="Support Illustration" className="hero-img" />
      </main>
    </div>
  );
}

export default Home;