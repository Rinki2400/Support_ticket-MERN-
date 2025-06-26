function validateFullName(fullName) {
  if (!fullName) return "Full Name is required";
  if (!/^[A-Za-z\s]+$/.test(fullName)) return "Only letters and spaces allowed";
  if (fullName.length < 3) return "Must be at least 3 characters";
  if (fullName.length > 50) return "Must be under 50 characters";
  return undefined;
}

function validateEmail(email) {
  if (!email) return "Email is required";
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) return "Invalid email address";
  return undefined;
}

function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 8) return "At least 8 characters";
  if (!/[a-z]/.test(password)) return "Include a lowercase letter";
  if (!/[A-Z]/.test(password)) return "Include an uppercase letter";
  if (!/\d/.test(password)) return "Include a number";
  if (!/[@$!%*?&]/.test(password)) return "Include a special character";
  return undefined;
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return "Confirm Password is required";
  if (confirmPassword !== password) return "Passwords must match";
  return undefined;
}

export default function validate(values) {
  const errors = {};

  const fullNameError = validateFullName(values.fullName);
  if (fullNameError) errors.fullName = fullNameError;

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(values.password);
  if (passwordError) errors.password = passwordError;

  const confirmPasswordError = validateConfirmPassword(values.password, values.confirmPassword);
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
}