import React, { useState } from "react";
import "../CSS/SignUp.css";
import axios from "axios";

function SignUp() {
  const initialFormValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

    const onChange = (evt) => {
        const {name, value} = evt.target
        updateForm(name, value)
    }

  const SubmitForm = () => {
    const newFormValues = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post("fakeapi.com", newFormValues)
      .then((response) => {
        setFormValues(initialFormValues);
        console.log('here')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    SubmitForm();
    console.log('here')
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label>Email:</label>
        <input type="email" maxLength="30" id="email" placeholder="email" onChange={onChange} />
        <label>Password:</label>
        <input
          type="password"
          maxLength="30"
          id="password"
          placeholder="password"
          onChange={onChange}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
