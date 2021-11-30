import React, { useState } from "react";
import "../CSS/SignUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom"

function SignUp() {

  const initialFormValues = {
    email: "",
    username: "",
    password: ""
  };

  const history = useHistory()

  const [formValues, setFormValues] = useState(initialFormValues);


  const handleChange = e => {
    console.log("here", e.target.value)
    setFormValues({
        ...formValues,
        [e.target.name]:e.target.value
    });
}


      
    const Register = (e) => {
      e.preventDefault();
      axios
        .post(
          "https://dogdietapp.herokuapp.com/register",
          `grant_type=password&username=${formValues.username}&password=${formValues.password} & ${formValues.email}`,
          {
            headers: {
              // btoa is converting our client id/client secret into base64
              Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.access_token);
          console.log(res.data)
          history.push("/login")          
        });
    };
  

  

  return (
    <div>
      <form className="form" onSubmit={Register}>
        <label htmlFor="username">UserName:</label>
        <input type="username" name="username" id="username" placeholder="username" onChange={handleChange} value={formValues.username}/>
        <label htmlFor="password">Password:</label>

        <input
          name="password"
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
          value={formValues.password}
        />
        <label htmlFor='email'>Email:</label>
        <input type= "email" name="email" id="email" placeholder="email" onChange={handleChange} value={formValues.email} />
        
        <div>
        <button>SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
