import React, { useEffect, useState, useRef } from "react";
import "./auth/Login.css";
import { getAuth } from "firebase/auth";
import ValidateLogin from "./auth/ValidateLogin.js";
// import { useUserContext } from "../context/userContext";
import { resetPassword } from "../firebase";
import useForgotPassword from "./auth/useForgotPasswordForm";

import { motion } from "framer-motion";

const ForgottenPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { resetPassword } = useUserContext();

  const forgotPasswordHandler = (values, errors) => {
    const email = values.email;
    if (email)
      resetPassword(email).then(() => {
        alert("no work");
      });
  };

  const setErrors = (err) => {
    const errorKeys = Object.keys(err);
    const alertString = errorKeys.map((key) => err[key]).join(" ");
    alert(alertString);
  };

  const validate = (values) => {
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const { handleSubmit, handleChange, values, errors } = useForgotPassword(
    forgotPasswordHandler,
    validate
  );

  const [authError, setAuthError] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="signup"
    >
      <>
        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img src="images/register.jpg" alt="player" className="form-img" />
          </div>
          <div className="form-content-right">
            <form className="form2" onSubmit={handleSubmit}>
              <h2 className="form-login">Password Reset</h2>
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
              <button className="form-input-btn2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default ForgottenPassword;
