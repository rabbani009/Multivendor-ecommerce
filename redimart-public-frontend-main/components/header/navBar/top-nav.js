import Link from "next/link";
import { Nav } from "react-bootstrap";

const TopNav = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bd-navbar d-sm-flex top-nav">
      <div className="container align-items-start flex-column flex-sm-row">
        <div className="slogan align-self-center">
          <p className="mb-0 text-light text-size-sm">
            দৈনন্দিন কেনাকাটায় প্রযুক্তি নির্ভর সমাধান
          </p>
        </div>
        <Nav as="ul" className="nav-right align-self-center">
          <Nav.Item as="li">
            <Link href="#">
              <a className="nav-link p-0">
                Delivery
              </a>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link href="/help">
              <a className="nav-link p-0">
                Help
              </a>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default TopNav;
