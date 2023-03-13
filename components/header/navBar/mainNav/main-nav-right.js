import {Fragment, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown, Nav } from "react-bootstrap";
import { FaBell, FaHeart, FaShoppingCart } from "react-icons/fa";

import { useUserContext } from "../../../../store/context/userContext";
import { useCartContext } from "../../../../store/context/cartContext";

const MainNavRight = () => {
  const router = useRouter();
  const { myUser, myToken, removeToUser } = useUserContext();
  const { total_items } = useCartContext();

  const user = myUser && myUser;
  const genName = user && user.fullName.split(" ")[0];

  return (
      <Nav as="ul" className="navbar-nav flex-row align-items-center">
        <Nav.Item as="li">
          <Link href="/cart">
            <a className="nav-link border-1 rounded-circle bg-white total-container">
              <FaShoppingCart />
              <span className="total-value">{total_items}</span>
            </a>
          </Link>
        </Nav.Item>

          {
              myUser ? (<Nav.Item as="li" className="d-none p-0">
              </Nav.Item>) : (
                  <Nav.Item as="li" className={myUser ? 'd-none' : 'd-block p-0'}>
                      <Link href="/login">
                          <a className="nav-link pe-0 text-500">{myUser ? null : 'Sign in/ Join'}</a>
                      </Link>
                  </Nav.Item>
              )
          }



        {myUser && myToken ? (
            <Fragment>
              <Nav.Item as="li">
                <Link href="#">
                  <a className="border-1 rounded-circle bg-white notification nav-link">
                    {" "}
                    <FaBell />
                  </a>
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link href="/wishlist">
                  <a className="border-1 rounded-circle bg-white nav-link">
                    {" "}
                    <FaHeart />
                  </a>
                </Link>
              </Nav.Item>

              {/*<Nav.Item as="li">*/}
              {/*  <div className="user-icon">*/}
              {/*    <FaUserCircle />*/}
              {/*  </div>*/}
              {/*</Nav.Item>*/}

              <Nav.Item as="li" className="d-flex align-items-center">
                <Nav.Item className="p-0">
                  <Dropdown className="d-flex">
                    <Dropdown.Toggle
                        variant="default"
                        id="dropdown-basic"
                        className="p-0 text-500"
                        size="lg"
                    >
                      {genName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/profile">My Account</Dropdown.Item>
                      <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
                      <Dropdown.Item href="/order">Order</Dropdown.Item>
                      <Dropdown.Item href="/address">Address Book</Dropdown.Item>
                      <Dropdown.Item href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/my-reviews?status=to-be-reviewed`}>My Reviews</Dropdown.Item>
                      {myUser && myToken ? (
                          <Dropdown.Item
                              href="#"
                              onClick={() => {
                                removeToUser();
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("user");
                                router.push("/login");
                              }}
                          >
                            Logout
                          </Dropdown.Item>
                      ) : (
                          <Dropdown.Item href="/login">Login</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
              </Nav.Item>
            </Fragment>
        ) : null}
      </Nav>
  );
};

export default MainNavRight;