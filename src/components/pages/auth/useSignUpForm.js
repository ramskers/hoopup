import { useState, useEffect } from "react";

const useSignUpForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    console.log(1);
    console.log(errors, isSubmitting);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(2);
      callback(values, errors);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useSignUpForm;