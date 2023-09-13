import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "react-bootstrap";
import { Box } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
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

const Signin = () => {
  const nav = useNavigate();
  const initialValues = {
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  };

  const validationSchema = Yup.object().shape({
    Firstname: Yup.string()
      .required('FirstName is required')
      .max(10),
    Lastname: Yup.string()
      .required('LastName is required')
      .max(10),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), ""], 'Passwords must match')
      .min(6),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const [buttonClick, setButtonClick] = useState(false);

  const handleButtonClick = () => {
    setButtonClick(true);
  };

  return (
    <LoginFormContainer>
      <h5 className="fw-bold text-uppercase">Register here</h5>
      <p className="mb-3">Please Enter your Details</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start"></InputAdornment>
                <PermIdentityIcon />
                <StyledField
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  placeholder="Enter your FirstName"
                  className={`form-control ${(errors.Firstname && touched.Firstname) || (buttonClick && !dirty)
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="Firstname"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start"></InputAdornment>
                <PermIdentityIcon />
                <StyledField
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  placeholder="Enter your LastName"
                  className={`form-control ${(errors.Lastname && touched.Lastname) || (buttonClick && !dirty)
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="Lastname"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
                <StyledField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`form-control ${(errors.email && touched.email) || (buttonClick && !dirty)
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
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
                <StyledField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`form-control ${(errors.password && touched.password) || (buttonClick && !dirty)
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
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
                <StyledField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className={`form-control ${(errors.confirmPassword && touched.confirmPassword) || (buttonClick && !dirty)
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            <FormGroup style={{ marginRight: "30px" }}>
              <Box display="flex" alignItems="center">
                <InputAdornment position="start"></InputAdornment>
                <PhoneIcon />
                <StyledField
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your ContactNo"
                  className={`form-control ${(errors.phoneNumber && touched.phoneNumber) || (buttonClick && !dirty)
                    ? "is-invalid"
                    : ""
                    }`}
                />
              </Box>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            <Button
              variant="btn btn-outline-dark"
              type="submit"
              onClick={() => {
                handleButtonClick();
                nav("/login")
              }}
              // disabled={(isValid || dirty) && (!isValid || !dirty)} // Disable the button if the form is not valid or not dirty
              disabled={!isValid || !dirty}
            >
              Signin
            </Button>
            <div className="mt-3">
              <p className="mb-0 text-center">
                Already Have an account?{" "}
                <a href="/login" className="text-danger fw-bold">
                  Login
                </a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </LoginFormContainer>
  );
};

export default Signin;