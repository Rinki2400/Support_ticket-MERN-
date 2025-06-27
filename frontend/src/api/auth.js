import axios from 'axios';
import toast from 'react-hot-toast';

export const handleLoginSubmit = async (values, navigate) => {
  const loadingToast = toast.loading("Logging in...");
  

  try {
    
    const response = await axios.post('http://localhost:5000/api/user/login', values);
    console.log("Login successful:", response.data);

    localStorage.setItem('token', response.data.token);
    toast.success("Login successful!", { id: loadingToast });

    navigate("/dashboard");
  } catch (error) {
    console.error("Login failed:", error.response?.data?.message || "Server error");
    toast.error(error.response?.data?.message || "Login failed", { id: loadingToast });
  }
};


export const handleRegistrationSubmit = async (values, { setSubmitting }, navigate) => {
  try {
    await axios.post("http://localhost:5000/api/user/register", {
      name: values.fullName, 
      email: values.email,
      password: values.password,
    });

    navigate("/login");
  } catch (error) {
    console.error("Registration failed:", error?.response?.data?.message || error.message);
  } finally {
    setSubmitting(false);
  }
};
export const handleTicketSubmit = async (ticket, { setLoading }, toast, navigate) => {
  try {
    await axios.post("http://localhost:5000/api/tickets", ticket);
    toast.success("Ticket submitted successfully!");
    // navigate("/dashboard"); // or wherever you want to redirect
  } catch (error) {
    console.error("Ticket submission failed:", error?.response?.data?.message || error.message);
    toast.error("Failed to submit ticket.");
  } finally {
    setLoading(false);
  }
};
