import React, { useState } from "react";
import "./Form.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useLoginForm from "./useLoginForm";
import ValidateLogin from "./ValidateLogin.js";

const FormSuccess = () => {
  const submitForm = (values, errors) => {
    if (!errors.email && !errors.password) {
      const auth = getAuth();
      console.log(values);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((err) => {
          console.log(err);
          switch (err.code) {
            case "auth/user-not-found":
            case "auth/wrong-password":
              setAuthError("Incorrect email or password.");
              break;
          }
        });
    }
  };

  const setErrors = (err) => {
    const errorKeys = Object.keys(err);
    const alertString = errorKeys.map((key) => err[key]).join(" ");
    alert(alertString);
  };

  const { handleChange, handleSubmit, values, errors } = useLoginForm(
    submitForm,
    ValidateLogin
  );

  const [authError, setAuthError] = useState(null);

  return (
    <div className="form-content-right">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="form-success">You are now signed up!</h1>
        <h2 className="form-login">Login</h2>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          {authError && <p>{authError}</p>}
        </div>
        <button className="form-input-btn2" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default FormSuccess;
