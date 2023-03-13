import {Fragment} from "react";
import TopNav from "./navBar/top-nav";
import NavBar from "./navBar/mainNav/nav-bar";
import SubNav from "./navBar/subNav/sub-nav";

const HeaderMain = ({ menus }) => {
  const { topmenu } = menus;
  
  return (
    <Fragment>
        <TopNav />
      <header>
        <NavBar />
      </header>
      {/* {
        topmenu && topmenu.length === 0 ? null : <SubNav topMenu={topmenu} />
      } */}
      {/* <SubNav topMenu={topmenu} /> */}
    </Fragment>
  );
};

export default HeaderMain;
