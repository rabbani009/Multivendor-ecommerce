import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";

import { useUserContext } from "../../../../store/context/userContext";
import { login } from "../../../../lib/api/auth";
import { Toastify } from "../alert/toastify";
import { Input } from "./input";
import { mailRegx } from "../../../../lib/utils/regx";

const LoginForm = () => {
  // const { setShow } = props;
  const { addToLogin } = useUserContext();
  const router = useRouter();

  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email()
      .required("Username is required")
      .matches(mailRegx, "Must be valid email"),
    password: Yup.string()
        .required("Password is required")
        .test('len', 'Very weak password', val => {
          return val && val?.length >= 4
        }),
        // .test('len', 'Must be exactly 5 characters', val => {
        //   console.log('check value...', val)
        // })
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onsubmit = async ({ username, password }) => {
    // Login api call...
    const loginRes = await login({ username, password });

    if (loginRes.status === 200) {
      const { data, success, message } = loginRes.data;

      if (success) {
        const { access_token, customer_info: user } = data.original;
        // Add to state user...
        addToLogin(user, access_token);

        // Set localStorage to user...
        localStorage.setItem("token", JSON.stringify(access_token));
        localStorage.setItem("user", JSON.stringify(user));

        // If modal is open then close
        // if (setShow) {
        //   setShow(false);
        // }

        // Success
        const returnUrl = router.asPath || "/";
        router.push(returnUrl);
        // Notify user to success...
        Toastify.fire({
          icon: "success",
          // title: "Sweet!",
          text: message
        });
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

      <Form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-group ">
          <label htmlFor="username">Email</label>
          {/*<input*/}
          {/*  type="text"*/}
          {/*  name="username"*/}
          {/*  id="username"*/}
          {/*  {...register("username")}*/}
          {/*  className={`form-control ${errors.username ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Enter email..."*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.username?.message}</div>*/}
          <Input
            type="text"
            register={register}
            name="username"
            errors={errors}
            placeholder="Enter email..."
          />
        </div>

        <div className="form-group ">
          <label htmlFor="password">Password</label>
          {/*<input*/}
          {/*  type="password"*/}
          {/*  name="password"*/}
          {/*  id="password"*/}
          {/*  {...register("password")}*/}
          {/*  className={`form-control ${errors.password ? "is-invalid" : ""}`}*/}
          {/*  placeholder="Password"*/}
          {/*/>*/}
          {/*<div className="invalid-feedback">{errors.password?.message}</div>*/}
          <Input
            type="password"
            register={register}
            name="password"
            errors={errors}
            placeholder="Password"
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link href="/forgot-password">
            <a className="d-flex align-items-center">Forgot password?</a>
          </Link>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>

        <div className="d-flex flex-column">
          <Link href="/signup">
            <a className="d-flex justify-content-end text-decoration-none mt-2">
              <small className="text-secondary">Don&apos;t have account?</small>
            </a>
          </Link>
        </div>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
