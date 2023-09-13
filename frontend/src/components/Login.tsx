import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "react-bootstrap";
import { Box, TextField } from "@mui/material";
const LoginFormContainer = styled.div`
  width: 500px;
  margin: 60px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Login = () => {
  const nav = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6)
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  return (
    <LoginFormContainer>
      <h5 className="fw-bold text-uppercase">Login here</h5>
      <p className="mb-3">Please Enter your Credentials!</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormGroup>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
                <StyledField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="on"
                  className={`form-control ${(errors.email && touched.email) || (buttonClicked && !dirty) // Check if the button is clicked and the form is not dirty
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />

            </FormGroup>

            <FormGroup>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
                <StyledField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`form-control ${(errors.password && touched.password) ||
                    (buttonClicked && !dirty)
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />

            </FormGroup>
            <FormGroup>
              <p className="small">
                <a className="text-dark" href="/signin">
                  Forgot password?
                </a>
              </p>
            </FormGroup>
            <Button
              variant="btn btn-outline-dark"
              type="submit"
              onClick={() => {

                alert("Login Successful");
                handleButtonClick();
                nav("/");

              }}
              // disabled={(isValid || dirty) && (!isValid || !dirty)} 
              disabled={!isValid || !dirty}
            >
              Login
            </Button>
            <div className="mt-3">
              <p className="mb-0 text-center">
                Don't have an account?{" "}
                <a href="/signin" className="text-danger fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </LoginFormContainer>
  );
};

export default Login;