import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";

import { Input } from "./input";
import { Toastify } from "../alert/toastify";
import { signup } from "../../../../lib/api/auth";
import { mailRegx, nameRegx } from "../../../../lib/utils/regx";

const RegisterForm = () => {
  const router = useRouter();

  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(nameRegx, "Must be only text"),

    email: Yup.string()
      .email()
      .required("Email is required")
      .matches(mailRegx, "Must be valid email"),
    password: Yup.string()
        .required("Password is required")
        .test('len', 'Very weak password', val => {
          return val && val?.length >= 4
        }),
    type: Yup.string().default("customer"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // Signup handler
  const singUpHandler = async ({ name, email, password, type }) => {
    const obj = { name, email, password, type };
    // Signup api call...
    const signUpRes = await signup(obj);

    if (signUpRes.status === 200) {
      const { success, data, message } = signUpRes.data;

      if (success) {
        // Show flash message to user...
        Toastify.fire({
          icon: "success",
          text: message,
        });

        router.push("/login");
      } else {
        setError(data[0]);
      }
    } else {
      setError("Something went wrong!");
    }
  };

  return (
    <Fragment>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit(singUpHandler)}>
        <div className="form-group ">
          <label htmlFor="name">
            Name <small className="text-danger">*</small>
          </label>
          <Input
            type="text"
            register={register}
            name="name"
            errors={errors}
            placeholder="Enter name"
          />
          {/*<input*/}
          {/*  type="text"*/}
          {/*  name="name"*/}
          {/*  id="name"*/}
          {/*  {...register("name")}*/}
          {/*  className={`form-control ${errors.name ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Name"*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.name?.message}</div>*/}
        </div>

        <div className="form-group ">
          <label htmlFor="email">
            Email <small className="text-danger">*</small>
          </label>
          {/*<input*/}
          {/*  type="email"*/}
          {/*  name="email"*/}
          {/*  id="email"*/}
          {/*  {...register("email")}*/}
          {/*  className={`form-control ${errors.email ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Email address"*/}
          {/*/>*/}
          <Input
            type="email"
            register={register}
            name="email"
            errors={errors}
            placeholder="Email address"
          />
          {/*<div className="invalid-feedback">{errors.email?.message}</div>*/}
        </div>

        <div className="form-group ">
          <label htmlFor="password">
            Password <small className="text-danger">*</small>
          </label>
          {/*<input*/}
          {/*  type="password"*/}
          {/*  name="password"*/}
          {/*  id="password"*/}
          {/*  {...register("password")}*/}
          {/*  className={`form-control ${errors.password ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Password"*/}
          {/*/>*/}
          <Input
            type="password"
            register={register}
            name="password"
            errors={errors}
            placeholder="Password"
          />
          {/*<div className="invalid-feedback">{errors.password?.message}</div>*/}
        </div>

        <div className="d-flex justify-content-between">
          <Link href="/login">
            <a className="d-flex align-items-center">Login</a>
          </Link>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default RegisterForm;
