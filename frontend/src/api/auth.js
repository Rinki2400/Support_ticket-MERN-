import axios from 'axios';

export const handleLoginSubmit = async (values, { setSubmitting, resetForm }, navigate) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', values);
    console.log("Login successful:", response.data);
    localStorage.setItem('token', response.data.token);
    resetForm();
    navigate("/dashboard");
  } catch (error) {
    console.error("Login failed:", error.response?.data?.message || "Server error");
  } finally {
    setSubmitting(false);
  }
};



export const handleRegistrationSubmit = async (values, { setSubmitting }, navigate) => {
  try {
    await axios.post("http://localhost:5000/api/register", {
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