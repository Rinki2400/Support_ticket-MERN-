import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../assets/animation/call-center.png";
import { handleTicketSubmit } from "../api/auth"; // import the function
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [course, setCourse] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [concern, setConcern] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const ticket = { course, contactNumber, concern };

    try {
      await handleTicketSubmit(ticket);
      toast.success("Ticket submitted successfully!");
      setCourse("");
      setContactNumber("");
      setConcern("");
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Failed to submit ticket.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("You've been logged out.");
    navigate("/login");
  };


  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <button className="login-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="card p-4 mb-4">
        <h2 className="mb-3">Create Support Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              className="form-control"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              <option value="AWS">AWS</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Python">Python</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              id="contactNumber"
              type="text"
              className="form-control"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="concern">Concern</label>
            <textarea
              id="concern"
              className="form-control"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Create Ticket"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;