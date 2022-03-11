import React from "react";
import "./Form.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useForm from "./useForm";
import validate from "./ValidateInfo";

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
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setErrors({ email: err.message });
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

const FormSuccess = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <h1 className="form-success">You are now signed up!</h1>
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
      </div>
      <button onClick={submitForm} className="form-input-btn2" type="login">
        Log In
      </button>
    </div>
  );
};

export default FormSuccess;
