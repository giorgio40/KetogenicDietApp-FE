import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import LoginSchema from "../schema/LoginSchema";
import * as yup from "yup";
import cancer from "../Images/128694-cancer.webp"
function Login() {
  const initialFormErrors = {
    username: "",
    password: "",
  };

  const initialFormValues = {
    username: "",
    password: "",
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  // eslint-disable-next-line
  const [disabled, setDisabled] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //eslint-disable-next-line
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [credentials, setCredentials] = useState(initialFormValues);
  const { push } = useHistory();

  
  const postLogin = (e) => {
    axios
      .post(
        "https://dogdietapp.herokuapp.com/login",
        `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setIsLoading(true);
        push("/home");
      });
  };
  const inputChange = (name, value, evt) => {
    yup
      .reach(LoginSchema, name)
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

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postLogin();
  };



  return (
    <>
      <div className="container"
      style={{ backgroundImage: `url(${cancer})` }}>
      {isLoading ? <div>loggin you in!</div> : null}
      <div>
      <h3 className="text">Please Login to view resources about dog cancer and the ketogenic diet</h3>
      </div>
      <div className="form-container">
  
        <form onSubmit={onSubmit} className="login-form">
          <div>
            <em>
              <div>{formErrors.username}</div>
              <div>{formErrors.password}</div>
            </em>
          </div>
        
            <label >
              Username:
              <input
                type="text"
                value={credentials.username}
                onChange={onChange}
                name="username"
                id="name-input"
                placeholder="Username"
              />
            </label>
           

            <label>
              Password:
              <input
                type="password"
                value={credentials.password}
                onChange={onChange}
                name="password"
                id="password-input"
                placeholder="password"
              />
            </label>
          
           
         
            <div className="login-button-container">
              <button className="login-button" disabled={disabled}>
              Login
             </button>
            </div>
        </form>
        </div>
      </div>
      
    
    </>
  );
}

export default Login;
