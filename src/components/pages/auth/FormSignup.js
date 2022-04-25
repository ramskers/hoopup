import React, { useState } from "react";
import ValidateSignUp from "./ValidateSignUp";
import useSignUpForm from "./useSignUpForm";
import "./Form.css";
import { auth, provider } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FormSignup = (props, { setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((_result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const { submitFormSuccess } = props;

  const submitForm = (values, errors) => {
    if (!errors.email && !errors.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
        values.username
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .then(() => {
          submitFormSuccess();
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
              setAuthError("Email already In Use");
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

  const { handleChange, handleSubmit, values, errors } = useSignUpForm(
    submitForm,
    ValidateSignUp
  );

  const [authError, setAuthError] = useState(null);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with HoopUp! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
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
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
          {authError && <p>{authError}</p>}
        </div>
        <button
          // disable={loading || currentUser}
          className="form-input-btn"
          type="submit"
        >
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/login">here</a>
        </span>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
