import { Container, Navbar, Nav } from "react-bootstrap";
import NavItem from "./nav-item";

const SubNav = (props) => {
  const { topMenu } = props;
  return (
    <Navbar bg="default" expand="lg" className="sub-nav bg-light d-none d-lg-flex">
      <Container>
        {/*<div className="d-flex align-items-center search-and-subnav">*/}
        {/*  <Search />*/}
        {/*  <Navbar.Toggle aria-controls="sub-navbar-nav" />*/}
        {/*</div>*/}

        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="sub-navbar-nav" />
        </div>

        <Navbar.Collapse id="sub-navbar-nav">
          <Nav className="me-auto">
            {topMenu &&
              topMenu.map((menu, index) => {
                const { categoryName, slug } = menu;
                return <NavItem key={index} name={categoryName} slug={slug} />;
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SubNav;
