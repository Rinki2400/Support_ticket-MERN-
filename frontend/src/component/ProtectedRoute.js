// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem('token'); // Or use cookies/context if needed
  return token ? Component : <Navigate to="/login" replace />;
};

export default ProtectedRoute;