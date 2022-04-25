import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--reg"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, buttonStyle, buttonSize, route }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${route}`);
  };

  return (
    <button
      onClick={handleNavigation}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};
