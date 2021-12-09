import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import cancer from "../Images/cancer.jpg";
function Login() {
  const initialFormErrors = {
    username: "",
    password: "",
  };

  const initialFormValues = {
    username: "",
    password: "",
  };

  const [disabled, setDisabled] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [credentials, setCredentials] = useState(initialFormValues);
  const { push } = useHistory();

  const postLogin = (e) => {
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

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${cancer})` }}>
        <div>
          <h2> Please login In.</h2>
        </div>
        <div className="form-container">
          <form onSubmit={postLogin} className="login-form">
            {isLoading === true ? <div>Loggin you In!</div> : ""}

            <div>{formErrors.username}</div>
            <div>{formErrors.passwordl}</div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={(evt) =>
                  setCredentials({ ...credentials, username: evt.target.value })
                }
                id="username"
                maxLength="30"
                placeholder="username"
              />
            </label>
            <label>
              password:
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(evt) =>
                  setCredentials({ ...credentials, password: evt.target.value })
                }
                placeholder="password"
                id="password-input"
              />
            </label>
            <br />
            <div className="button-div">
              <button disabled={disabled}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
