import React, { useState, useEffect } from "react";
import "../CSS/SignUp.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import SignUpSchema from "../schema/SignUpSchema";

import keto from "../Images/keto.jpg";

function SignUp() {
  const initialFormValues = {
    username: "",
    password: "",
    email: "",
  };

  const initialFormErrors = {
    username: "",
    password: "",
    email: "",
  };

  const initialSignup = [];
  const initialDisabled = true;

  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [signUp, setSignUp] = useState(initialSignup);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();

  const postNewSignUp = (newSignUp) => {
    axios
      .post("https://dogdietapp.herokuapp.com/createnewuser", newSignUp)
      .then((res) => {
        setSignUp([res.data, ...signUp]);
        setFormValues(initialFormValues);
        console.log(res.data);
        console.log(newSignUp);
        setIsLoading(true);

        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    postNewSignUp();
  }, []);

  const inputChange = (name, value, evt) => {
    yup
      .reach(SignUpSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newSignUp = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
    };
    postNewSignUp(newSignUp);
  };

  useEffect(() => {
    SignUpSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  };

  return (
    <>
      <div
        className="img-container"
        style={{ backgroundImage: `url(${keto})` }}
      >
        {isLoading ? <div>Signing you up!</div> : null}
        <br />
        <br />
        <h1 className="title">
          Welcome to Ketogenic Diets For Dog Cancer! Please Sign Up To Access
          Important Resources!
        </h1>
        <form onSubmit={onSubmit} className="signup-form">
          <div>
            <em>
              <div>{formErrors.username}</div>
              <div>{formErrors.email}</div>
              <div>{formErrors.password}</div>
            </em>
          </div>
          <div>
            <label className="signup-label">
              Username:
              <input
                type="text"
                value={formValues.username}
                onChange={onChange}
                name="username"
                id="name-input"
                placeholder="Username"
              />
            </label>
            <br />
            <br />
            <br />

            <label className="signup-label">
              Password:
              <input
                type="password"
                value={formValues.password}
                onChange={onChange}
                name="password"
                id="password-input"
                placeholder="password"
              />
            </label>
            <br />
            <br />
            <br />
            <label className="signup-label">
              Email:
              <input
                type="email"
                value={formValues.email}
                onChange={onChange}
                name="email"
                id="email-input"
                placeholder="email"
              />
            </label>
            <br />
            <br />
            <br />
            <div className="submit">
              <button className="signup-button" disabled={disabled}>
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="link">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Already a Member ? Click here to goto Login Page{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
export default SignUp;
