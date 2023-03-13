import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";

import { checkOTP } from "../../../../lib/api/auth";
import { Toastify } from "../alert/toastify";
import { mailRegx } from "../../../../lib/utils/regx";
import { Input } from "./input";

const OtpForm = (props) => {
  const router = useRouter();
  const { email } = props;

  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .default(email)
      .required("Email is required")
      .matches(mailRegx, "Must be valid email"),
    otp: Yup.string().required("Otp is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // OTP handler
  const otpHandler = async ({ email, otp }) => {
    // Check OTP api call
    const otpRes = await checkOTP({ email, otp });
    if (otpRes.status === 200) {
      const { success, message } = otpRes.data;
      if (success) {
        // Flash message to user...
        Toastify.fire({
          icon: "success",
          text: message,
        });
        router.push("/reset-password");
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

      <Form onSubmit={handleSubmit(otpHandler)}>
        <div className="form-group ">
          <label htmlFor="email">Email</label>
          {/*<input*/}
          {/*  type="email"*/}
          {/*  name="email"*/}
          {/*  id="email"*/}
          {/*  value={email}*/}
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

        <div className="form-group ">
          <label htmlFor="otp">OTP</label>
          {/*<input*/}
          {/*  type="text"*/}
          {/*  name="otp"*/}
          {/*  id="otp"*/}
          {/*  {...register("otp")}*/}
          {/*  className={`form-control ${errors.otp ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Enter your otp..."*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.otp?.message}</div>*/}
          <Input
            type="text"
            register={register}
            name="otp"
            errors={errors}
            placeholder="Enter your otp..."
          />
        </div>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default OtpForm;
