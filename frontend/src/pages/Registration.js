import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { handleRegistrationSubmit } from "../api/auth";
import validate from "../validation/RegistrationForm";
import "../pages/LoginPage.css";

function Registration() {
  const navigate = useNavigate();

  const onSubmit = (values, formikHelpers) => {
    handleRegistrationSubmit(values, formikHelpers, navigate);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3 className="loginHeading">Registration</h3>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <div className="input_field">
                <Field
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Full Name"
                />
                <ErrorMessage name="fullName" component="div" className="error" />
              </div>

              <div className="input_field">
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="input_field">
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Create Password"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="input_field">
                <Field
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>

              <div className="text-center mt-3">
                <span>Already registered? </span>
                <a href="/login">Login</a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Registration;