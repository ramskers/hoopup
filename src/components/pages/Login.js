import React, { useEffect, useRef, useState } from "react";
import "./auth/Login.css";
import { auth, provider } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import useLoginForm from "./auth/useLoginForm";
import ValidateLogin from "./auth/ValidateLogin.js";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((_result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const psdRef = useRef();
  const emailRef = useRef();

  const submitForm = (values, errors) => {
    if (!errors.email && !errors.password) {
      const auth = getAuth();
      console.log(values);
      signInWithEmailAndPassword(provider, auth, values.email, values.password)
        .then((userCredential) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
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
    ValidateLogin,
    signInWithGoogle
  );

  const [authError, setAuthError] = useState(null);

  return (
    <div className="signup">
      <div className="form-container">
        <div className="form-content-left">
          <img src="images/register.jpg" alt="player" className="form-img" />
        </div>
        <div className="form-content-right">
          <form className="form2" onSubmit={handleSubmit}>
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
                ref={emailRef}
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
                ref={psdRef}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
              {authError && <p>{authError}</p>}
            </div>
            <button className="form-input-btn2" type="submit">
              Log In
            </button>
            <span className="form-input-login">
              Forgot Password? Click <a href="/ForgottenPassword">here</a>
            </span>
            <span className="form-input-login">
              New Here? <a href="/SignUp">Sign Up</a>
            </span>
            <button
              className="login-with-google-btn"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
