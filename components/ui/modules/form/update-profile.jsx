import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col, Alert, Button, Form } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";

import { Input } from "./input";
import { mailRegx, nameRegx, phoneRegx } from "../../../../lib/utils/regx";
import { updateProfile } from "../../../../lib/api/auth";
import { useUserContext } from "../../../../store/context/userContext";
import { Toastify } from "../alert/toastify";

const UpdateProfile = () => {
  const [image, setImage] = useState('')
  const { updateToUser, user, loading } = useUserContext();
  // console.log('check loading...', loading)
  // console.log(user)
  // Errors...
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Name is required")
      .matches(nameRegx, "Must be only text")
      .default(user.fullName),
    email: Yup.string()
      .email()
      .required("Email is required")
      .matches(mailRegx, "Must be valid email")
      .default(user.email),
    mobileNumber: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegx, "Must be valid number")
      .default(user.mobileNumber),
    gender: Yup.string().required("Gender is required").default(user.gender),
    dateOfBirth: Yup.date().default(user.dateOfBirth),
    // image: Yup.mixed().default(user.image),
    image: Yup
        .mixed()
        .nullable(true)
        .test(
            "fileSize",
            "File too large",
            (value) => {
              const fileSize = 1000000
              if (value.length === 0) return true
              return value && value[0]?.size <= fileSize
            }
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            (value) => {
              const acceptedFileType = ['image/jpg', 'image/jpeg', 'image/png']
              if (value.length === 0) return true
              return value && acceptedFileType.includes(value[0]?.type)
            }
        )
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, control } = useForm(formOptions);
  const { errors } = formState;

  // Convert image to base^4
  const convert2Base64 = (data, cb) => {
    let fileReader = new FileReader()
    fileReader.readAsDataURL(data)
    fileReader.onload = ((event) => {
      cb(event.target.result)
    })
  }

  // Handle update profile
  const handleUpdateProfile = async (obj) => {
    // console.log('check handle profile api call...', obj)
    const updateProfileRes = await updateProfile(obj);
    // console.log('check updateProfileRes...', updateProfileRes)
    if (updateProfileRes.status === 200) {
      const { success, data } = updateProfileRes.data;
      if (success) {
        localStorage.setItem("user", JSON.stringify(data));
        updateToUser(data);
        setError("");
        Toastify.fire({
          icon: "success",
          titleText: "Successfully update your profile.",
        });
      } else {
        setError("Something went wrong");
      }
    }
  }

  const onsubmit = (formData) => {
    // const obj = {...formData, image: formData.image.length === 0 ? "" : "base64"}
    // console.log('check formData...', obj)

    if (formData.image.length > 0) {
      convert2Base64(formData.image[0], (data) => {
        const obj = {...formData, image: data}
        handleUpdateProfile(obj)
      })
    } else {
      const obj = {...formData, image: ""}
      handleUpdateProfile(obj)
    }

    // const obj = {...formData, image: formData.image.length === 0 ? "" : image}
    // console.log('check formData...', obj)
      
    // const updateProfileRes = await updateProfile(obj);
    // if (updateProfileRes.status === 200) {
    //   const { success, data } = updateProfileRes.data;
    //   if (success) {
    //     localStorage.setItem("user", JSON.stringify(data));
    //     updateToUser(data);
    //     setError("");
    //     Toastify.fire({
    //       icon: "success",
    //       titleText: "Successfully update your profile.",
    //     });
    //   } else {
    //     setError("Something went wrong");
    //   }
    // }
  };

  // Gender options
  const genOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "third", label: "Third" },
  ];

  // useEffect(() => {
  //   for (const [key, value] of Object.entries(user)) {
  //     setValue(key, value, {
  //       shouldValidate: true,
  //       shouldDirty: true,
  //     });
  //   }
  // }, [user]);

  // Handler Customer image
  // const handleCustomerImage = (e) => {
  //   let files = e.target.files
  //   let fileReader = new FileReader()
  //   // console.log('check file reader...', fileReader)
  //   fileReader.readAsDataURL(files[0])
  //   fileReader.onload = ((event) => {
  //     // console.log('on load fired...', event.target.result)
  //     // console.log('check width...', this.width)
  //     setCustomerImage(event.target.result)
  //   })
  //
  //   // const writeReviewRes = await writeReview({
  //   //     productId,
  //   //     feedback: productMessage,
  //   //     image: file,
  //   //     sellerReviewIcon: sellerCValue,
  //   //     sellerReviewDetails: sellerMessage,
  //   //     ratingStar: cValue
  //   // })
  //
  //   // console.log(writeReviewRes)
  //
  //   // console.log(fileReader)
  //
  //   // fileReader.onload = (event) => {
  //   //     console.log('check event file...', event)
  //   // }
  //   // console.log('onchnage handler fired...', e.target.files)
  //   // console.log(Number(file))
  // }

  return (
    <Fragment>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit(onsubmit)}>
        <Row>
          <Col md={12} lg={6}>
            {/*Full Name*/}
            <div className="form-group ">
              <label htmlFor="fullName">
                Name <small className="text-danger">*</small>
              </label>
              <Input
                type="text"
                register={register}
                name="fullName"
                value={user.fullName}
                errors={errors}
                placeholder="Enter full name"
              />
              {/*<input*/}
              {/*  type="text"*/}
              {/*  name="fullName"*/}
              {/*  id="fullName"*/}
              {/*  {...register("fullName")}*/}
              {/*  className={`form-control ${*/}
              {/*    errors.fullName ? "is-invalid" : ""*/}
              {/*  }`}*/}
              {/*  placeholder="Enter full name"*/}
              {/*/>*/}
              {/*<div className="invalid-feedback">{errors.fullName?.message}</div>*/}
            </div>
          </Col>
          <Col md={12} lg={6}>
            {/*Email*/}
            <div className="form-group ">
              <label htmlFor="email">
                Email <small className="text-danger">*</small>
              </label>
              <Input
                type="email"
                register={register}
                name="email"
                value={user.email}
                errors={errors}
                placeholder="Email address"
                required={true}
              />
              {/*<input*/}
              {/*  type="email"*/}
              {/*  name="email"*/}
              {/*  id="email"*/}
              {/*  {...register("email")}*/}
              {/*  className={`form-control ${errors.email ? "is-invalid" : ""}`}*/}
              {/*  placeholder="Enter email"*/}
              {/*/>*/}
              {/*<div className="invalid-feedback">{errors.email?.message}</div>*/}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            {/*Phone*/}
            <div className="form-group ">
              <label htmlFor="mobileNumber">
                Phone <small className="text-danger">*</small>
              </label>
              <Input
                type="tel"
                register={register}
                name="mobileNumber"
                value={user.mobileNumber}
                errors={errors}
                placeholder="Enter mobile number"
              />
              {/*<input*/}
              {/*  type="tel"*/}
              {/*  name="mobileNumber"*/}
              {/*  id="mobileNumber"*/}
              {/*  {...register("mobileNumber")}*/}
              {/*  className={`form-control ${*/}
              {/*    errors.mobileNumber ? "is-invalid" : ""*/}
              {/*  }`}*/}
              {/*  placeholder="Enter mobile number"*/}
              {/*/>*/}
              {/*<div className="invalid-feedback">*/}
              {/*  {errors.mobileNumber?.message}*/}
              {/*</div>*/}
            </div>
          </Col>

          <Col md={12} lg={6}>
            {/*Gender*/}
            <div className="form-group">
              <label htmlFor="react-select-5-input">Gender</label>
              <Controller
                control={control}
                defaultValue={user.gender}
                name="gender"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    classNamePrefix="select"
                    inputRef={ref}
                    defaultValue={genOptions[0]}
                    value={genOptions.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                    options={genOptions}
                    isClearable={false}
                    isSearchable={false}
                    label="gender"
                  />
                )}
              />

              <div className="invalid-feedback">{errors.gender?.message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <div className="form-group">
              <label htmlFor="dateOfBirth">
                Date of birth <small className="text-danger">*</small>
              </label>
              <Controller
                control={control}
                name="dateOfBirth"
                defaultValue={user.dateOfBirth}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      value={value}
                      onChange={(date) => onChange(date)}
                      selected={value && new Date(value)}
                      className="form-control"
                      id="dateOfBirth"
                      placeholderText="dd/MM/yyyy"
                    />
                  );
                }}
              />
              <div className="invalid-feedback">
                {errors.dateOfBirth?.message}
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="form-group">
              <label htmlFor="image">Upload profile</label>
              {/*<input type="file" name="customerImage" id="customerImage" onChange={handleCustomerImage} className="form-control" accept="image/png, image/gif, image/jpeg"/>*/}
              {/*<ImageFileUpload*/}
              {/*  name="image"*/}
              {/*  value={user.image}*/}
              {/*  control={control}*/}
              {/*/>*/}
              {/*<Input*/}
              {/*    type="file"*/}
              {/*    register={register}*/}
              {/*    name="image"*/}
              {/*    value={user.image}*/}
              {/*    errors={errors}*/}
              {/*    placeholder="Change profile"*/}
              {/*/>*/}

              {/*<Controller*/}
              {/*    control={control}*/}
              {/*    name="file"*/}
              {/*    placeholderText="Customer image"*/}
              {/*    // defaultValue={user.customer_image}*/}
              {/*    render={({ field: { value, onChange } }) => {*/}
              {/*      console.log('check value...', value)*/}

              {/*      return (*/}
              {/*          <input*/}
              {/*              type="file"*/}
              {/*              id="file"*/}
              {/*              onChange={(fileEvent) => console.log(fileEvent)}*/}
              {/*              className="form-control"*/}
              {/*          />*/}
              {/*      );*/}
              {/*    }}*/}
              {/*/>*/}

              {/*<Input*/}
              {/*    type="file"*/}
              {/*    register={register}*/}
              {/*    name="file"*/}
              {/*    errors={errors}*/}
              {/*    placeholder="Enter your profile picture"*/}
              {/*/>*/}
              <input type="file" name="image" {...register('image')} className={`form-control ${errors.image ? "is-invalid" : ""}`} id="image" />
              <div className="invalid-feedback">{errors['image']?.message}</div>
            </div>
          </Col>
        </Row>

        <Button type="submit" variant="primary" className="text-end ms-2">
          Update
        </Button>
      </Form>
    </Fragment>
  );
};

export default UpdateProfile;
