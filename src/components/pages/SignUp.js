import react, { useEffect } from "react";
import "../../App.css";
import Form from "./auth/Form";

const fb = require("../firebase");

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="signup">
      <Form />
    </div>
  );
}
