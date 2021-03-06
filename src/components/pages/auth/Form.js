import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [success, setSuccess] = useState(false);

  function submitFormSuccess() {
    setSuccess(true);
  }

  return (
    <div className="form-container1">
      <div className="form-container">
        <div className="form-content-left">
          <img src="images/register.jpg" alt="player" className="form-img" />
        </div>
        {!success ? (
          <FormSignup submitFormSuccess={submitFormSuccess} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;
