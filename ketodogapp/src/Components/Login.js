import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import * as yup from "yup"
import LoginSchema from "../Schema/LoginSchema"

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useHistory();

  const login = (e) => {
    e.preventDefault();
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
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        setIsLoading(true);
        push("/userhome");
      });
  };

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  return (
    <>
      <h2> Please login In.</h2>
      <form onSubmit={login}>
        {isLoading === true ? <div>Loggin you In!</div> : ""}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Log in</button>
      </form>
    </>
  );
}

export default Login;
