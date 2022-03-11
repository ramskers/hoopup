import react from "react";
import "../../App.css";
import Form from "./auth/Form";

const fb = require("../firebase");

export default function SignUp() {
  return (
    <div className="signup">
      <Form />
    </div>
  );
}
