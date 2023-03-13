import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import { profileInfoList } from "../../lib/helpers";

const ProfileNav = () => {
    const router = useRouter()

  return (
    <div className="profile-info-nav-wrapper">
      <Nav as="ul" className="navbar-nav py-2">
        {profileInfoList &&
          profileInfoList.map(({ id, link, text, slug }) => {
            return (
              <Nav.Item as="li" key={id}>
                <Link href={`.${link}`}>
                  <a className={router.pathname === slug ? "nav-link px-3 py-1 active" : "nav-link px-3 py-1"}>{text}</a>
                </Link>
              </Nav.Item>
            );
          })}
      </Nav>
    </div>
  );
};

export default ProfileNav;
