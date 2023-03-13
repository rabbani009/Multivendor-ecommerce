import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";

import { resetPass } from "../../../../lib/api/auth";
import { Toastify } from "../alert/toastify";
import { mailRegx } from "../../../../lib/utils/regx";
import { Input } from "./input";

const ResetpassForm = () => {
  const router = useRouter();

  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Email is required")
      .matches(mailRegx, "Must be valid email"),
    newPassword: Yup.string().required("New password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleResetHandler = async ({ email, newPassword }) => {
    // Reset password api call...
    const resetPassRes = await resetPass({ email, newPassword });

    if (resetPassRes.status === 200) {
      const { success, message } = resetPassRes.data;
      if (success) {
        Toastify.fire({
          icon: "success",
          text: message,
        });
        router.push("/login");
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

      <Form onSubmit={handleSubmit(handleResetHandler)}>
        <div className="form-group ">
          <label htmlFor="email">Email</label>
          {/*<input*/}
          {/*  type="email"*/}
          {/*  name="email"*/}
          {/*  id="email"*/}
          {/*  {...register("email")}*/}
          {/*  className={`form-control ${errors.email ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Email address"*/}
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
          <label htmlFor="newPassword">New password</label>
          {/*<input*/}
          {/*  type="password"*/}
          {/*  name="newPassword"*/}
          {/*  id="newPassword"*/}
          {/*  {...register("newPassword")}*/}
          {/*  className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}*/}
          {/*  placeholder="New password"*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.newPassword?.message}</div>*/}
          <Input
            type="password"
            register={register}
            name="newPassword"
            errors={errors}
            placeholder="New password"
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

export default ResetpassForm;
