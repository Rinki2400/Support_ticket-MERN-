import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validateLogin from "../validation/loginValidation";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3 className="loginHeading">Login</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validateLogin}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted:", values);
          }}
        >
          <Form>
            <div className="input_field">
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input_field">
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button
              type="submit"
              className=" btn-primary"
             
            >
              Login
            </button>
            <div className="text-center mt-3">
              <span>Not registered? </span>
              <a href="/register">Register</a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
