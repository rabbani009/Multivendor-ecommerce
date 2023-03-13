import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";

import { useUserContext } from "../../../store/context/userContext";
import UpdateProfile from "../../ui/modules/form/update-profile";
import LoadingSpin from "../../ui/loading-spin";
import { Toastify } from "../../ui/modules/alert/toastify";
import { getProfile, updateProfile } from "../../../lib/api/auth";

const ProfileContent = () => {
  // const { updateToUser } = useUserContext();
  // const [loading, setLoading] = useState(false);
  // const [name, setName] = useState(user.fullName);
  // const [email, setEmail] = useState(user.email);
  // const [mobile, setMobile] = useState(user.mobile || "01785362016");
  // const [dob, setDob] = useState("2000-08-22");

  // useEffect(async () => {
  //   setLoading(!loading);
  //   const profileRes = await getProfile();
  //   if (profileRes.status === 200) {
  //     const { success, data } = profileRes.data;
  //     if (success) {
  //       setLoading(loading);
  //       updateToUser(data);
  //     } else {
  //       setLoading(false);
  //     }
  //   }
  // }, []);

  // if (loading) return <LoadingSpin />;

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     fullName: name,
  //     gender: "male",
  //     mobileNumber: mobile,
  //     dateOfBirth: dob,
  //     email: email,
  //     image: "w",
  //   };
  //
  //   const userRes = await updateProfile(obj);
  //   const {
  //     data: { success, message },
  //   } = userRes;
  //
  //   if (success) {
  //     updateToUser(userRes.data.data);
  //
  //     Toastify.fire({
  //       icon: "success",
  //       titleText: message,
  //     });
  //   } else {
  //     Toastify.fire({
  //       icon: "error",
  //       titleText: message,
  //     });
  //   }
  // };

  return (
    <div className="profile-content page-content p-4">
      <UpdateProfile />
      {/*<Form onSubmit={handleUpdate}>*/}
      {/*  <Form.Group className="mb-3" controlId="name">*/}
      {/*    <Form.Label>Name</Form.Label>*/}
      {/*    <Form.Control*/}
      {/*      type="text"*/}
      {/*      name="name"*/}
      {/*      value={user.fullName}*/}
      {/*      onChange={(e) => console.log("fullName...", e.currentTarget.value)}*/}
      {/*      // onChange={(e) => setUser(e.currentTarget.value)}*/}
      {/*      placeholder="Enter your name..."*/}
      {/*    />*/}
      {/*  </Form.Group>*/}

      {/*  <Form.Group className="mb-3" controlId="email">*/}
      {/*    <Form.Label>Email</Form.Label>*/}
      {/*    <Form.Control*/}
      {/*      type="email"*/}
      {/*      name="email"*/}
      {/*      value={user.email}*/}
      {/*      // onChange={(e) => setEmail(e.currentTarget.value)}*/}
      {/*      onChange={(e) => console.log("email...", e.currentTarget.value)}*/}
      {/*      placeholder="Enter your email..."*/}
      {/*    />*/}
      {/*  </Form.Group>*/}

      {/*  <Row>*/}
      {/*    <Col sm={6} className="mb-3 mb-sm-0">*/}
      {/*      <Form.Group controlId="mobile">*/}
      {/*        <Form.Label>Mobile</Form.Label>*/}
      {/*        <Form.Control*/}
      {/*          type="tel"*/}
      {/*          name="mobile"*/}
      {/*          value={user.mobileNumber}*/}
      {/*          // onChange={(e) => setMobile(e.currentTarget.value)}*/}
      {/*          onChange={(e) =>*/}
      {/*            console.log("mobileNumber...", e.currentTarget.value)*/}
      {/*          }*/}
      {/*          placeholder="Enter your mobile..."*/}
      {/*        />*/}
      {/*      </Form.Group>*/}
      {/*    </Col>*/}

      {/*    <Col sm={6}>*/}
      {/*      <Form.Group controlId="dob">*/}
      {/*        <Form.Label>Date of birth</Form.Label>*/}
      {/*        <Form.Control*/}
      {/*          type="date"*/}
      {/*          name="dob"*/}
      {/*          value={user.dateOfBirth}*/}
      {/*          // onChange={(e) => setDob(e.currentTarget.value)}*/}
      {/*          onChange={(e) =>*/}
      {/*            console.log("dateOfBirth...", e.currentTarget.value)*/}
      {/*          }*/}
      {/*          placeholder="Enter your birth date..."*/}
      {/*        />*/}
      {/*      </Form.Group>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  <div className="d-flex justify-content-end text-end mt-3">*/}
      {/*    <Button*/}
      {/*      type="submit"*/}
      {/*      variant="primary"*/}
      {/*      className="d-flex align-items-center text-end me-2"*/}
      {/*    >*/}
      {/*      <span className="me-1">*/}
      {/*        <FaLock />*/}
      {/*      </span>*/}
      {/*      Update Password*/}
      {/*    </Button>*/}
      {/*    <Button type="submit" variant="primary" className="text-end ms-2">*/}
      {/*      Update*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</Form>*/}
    </div>
  );
};
export default ProfileContent;
