import React from "react";
import "./index.css";
import { useState } from "react";

export default function App() {

  //Set states
  const [values, SetValues] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const [submitted, SetSubmitted] = useState(false);
  const [valid, SetValid] = useState(false);

  //Handlers
  const handlefirstnameInputChange = (event) => {
    SetValues({ ...values, firstname: event.target.value })
  }
  const handlelastnameInputChange = (event) => {
    SetValues({ ...values, lastname: event.target.value })
  }
  const handleemailInputChange = (event) => {
    SetValues({ ...values, email: event.target.value })
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    if (values.firstname && values.lastname && values.email){
     SetValid(true);
  }
      SetSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handlesubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}


        <input
          onChange={handlefirstnameInputChange}
          value={values.firstname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstname ? <span id="first-name-error">Please enter a First name</span> : null}

        <input
          onChange={handlelastnameInputChange}
          value={values.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastname ? <span id="first-name-error">Please enter a Last name</span> : null}
        <input
          onChange={handleemailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="first-name-error">Please enter a Email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}