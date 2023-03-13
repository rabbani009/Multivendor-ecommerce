import Search from "../../../Input/Search";
import BrandNav from "./brand-nav";
import MainNavRight from "./main-nav-right";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light main-nav">
      <div className="container">
        <BrandNav />
        <Search />
        <MainNavRight />
      </div>
    </div>
  );
};

export default NavBar;
