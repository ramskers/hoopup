import react, { useEffect } from "react";
import "../../App.css";
import Form from "./auth/Form";

import { motion } from "framer-motion";

const fb = require("../firebase");

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="signup"
    >
      <Form />
    </motion.div>
  );
}
