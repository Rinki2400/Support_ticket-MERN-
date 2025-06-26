import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../pages/LoginPage.css";
import validate from "../validation/RegistrationForm";

function Registration() {
  return (
    <div className="login-wrapper ">
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <div className="inpur_field">
                <Field
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  placeholder=" Full Name"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="inpur_field">
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="inpur_field">
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Create Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="inpur_field">
                <Field
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
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
