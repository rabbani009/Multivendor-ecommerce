import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";

import { forgotPass } from "../../../../lib/api/auth";
import { Toastify } from "../alert/toastify";
import { mailRegx } from "../../../../lib/utils/regx";
import { Input } from "./input";

const ForgetpassForm = (props) => {
  // Props
  const { show, setShow, setEmail } = props;

  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Email is required")
      .matches(mailRegx, "Must be valid email"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // HandleForgot Password...
  const forgotPasswordHandler = async ({ email }) => {
    setEmail(email);
    // Reset api call
    const forgotPassRes = await forgotPass({ email });
    if (forgotPassRes.status === 200) {
      const { success, message } = forgotPassRes.data;

      if (success) {
        // Flash message to user...
        Toastify.fire({
          icon: "success",
          text: message,
        });
        // Show Reset Modal
        setShow(!show);
      } else {
        setError(message);
      }
    } else {
      setError("Something went wrong!");
    }
  };

  return (
    <Fragment>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit(forgotPasswordHandler)}>
        <div className="form-group ">
          <label htmlFor="email">Email</label>
          {/*<input*/}
          {/*  type="email"*/}
          {/*  name="email"*/}
          {/*  id="email"*/}
          {/*  {...register("email")}*/}
          {/*  className={`form-control ${errors.email ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Enter your email..."*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.email?.message}</div>*/}
          <Input
            type="email"
            register={register}
            name="email"
            errors={errors}
            placeholder="Enter your email..."
          />
        </div>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Reset Password
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default ForgetpassForm;
