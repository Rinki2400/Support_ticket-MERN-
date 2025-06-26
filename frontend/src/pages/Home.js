import '../pages/Home.page.css';
import logo from '../assets/animation/call-center.png';
import Animation from '../assets/animation/Call Center.gif';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
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