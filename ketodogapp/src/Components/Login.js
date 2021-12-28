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
        localStorage.setItem("token", res.data.access_token);
        setIsLoading(true);
        push("/home");
      });
  };

  return (
    <>
      <div className="wrapper" style={{ backgroundImage: `url(${cancer})` }}>
        <div className="h2-container">
          <h2 className="h2-login"> Please log In</h2>
        </div>
        <div className="form-container">
          <form onSubmit={postLogin} className="login-form">
            {isLoading === true ? <div>Loggin you In!</div> : null}

            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
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
                placeholder="username"
              />
            </label>
            <label>
              Password:
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
            <div className="button-container">
              <button className="btn" disabled={disabled}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
