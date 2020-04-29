import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpPageStyles from "./SignUpPageStyles.jsx";

import { useHistory } from "react-router-dom";
import * as yup from "yup";

import SignUpForm from "./SignUpForm.js";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

const initFormValues = {
  username: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const initFormErrors = {
  username: "",
  password: "",
  confirmPassword: "",
  terms: "",
};

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must have a minimum of 3 characters"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .test("match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

function SignUpPage() {
  // const [users, setUsers] = useState([]);

  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);

  const { push } = useHistory();

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const name = evt.target.name;

    yup
      .reach(formSchema, name)
      .validate(evt.target.checked)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: evt.target.checked,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // setFormValues({ ...formValues });
    // console.log("Working", evt);

    if (
      formValues.password === formValues.confirmPassword &&
      formValues.terms
    ) {
      axiosWithAuth()
        .post("/auth/register", {
          username: formValues.username,
          password: formValues.password,
        })
        .then((res) => {
          console.log("testing", { res });
          push("/login");
        })
        .catch((err) => console.log(err, "ERROR TO SIGN UP"));
    } else {
      return <div>Not Working</div>;
    }
    console.log("not working");
  };

  return (
    <SignUpPageStyles>
      <header className="sign-up-header"></header>

      <SignUpForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        handleSubmit={handleSubmit}
        errors={formErrors}
      />
      <Link to="/login">
        <button>Already a DeepTunes User? Login Here</button>
      </Link>
    </SignUpPageStyles>
  );
}

export default SignUpPage;
