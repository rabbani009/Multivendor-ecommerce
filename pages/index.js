import React, { Fragment } from "react";

import BannerSlider from "../components/section/slider/BannerSlider";
import Category from "../components/section/Category";
import RadimartShop from "../components/section/radimart-shop";
import Products from "../components/products/products";
// import SocialMediaEmbed from "../components/section/social-media-embed";

import { getAllMenus, getHomePage, getProduct } from "../lib/api/public";

// Fetch data with server side props
export async function getServerSideProps() {
  // Initial data menus/ homepage/ products
  let menus = [];
  let homePage = [];
  let products = [];

  // Menus api call...
  const menusRes = await getAllMenus();
  if (menusRes.status === 200) {
    const { data, success } = menusRes.data;
    if (success) {
      menus = data;
    }
  }

  // Home page api call...
  const homePageRes = await getHomePage();
  if (homePageRes.status === 200) {
    const { data } = homePageRes;
    homePage = data;
  }

  // Products api call...
  const productsRes = await getProduct();
  if (productsRes.status === 200) {
    const { data, success } = productsRes.data;
    if (success) {
      products = data;
    }
  }

  // Return data from server side
  return {
    props: {
      homePage,
      products,
      menus,
    },
  };
}

const HomePage = (props) => {
  const { homePage, products, menus } = props;

  // Home page data
  const slider = homePage.filter((item) => item.sectionType === "slider");
  const category = homePage.filter((item) => item.sectionType === "category");
  const radimartShop = homePage.filter((item) => item.sectionType === "radimart-shop");

  // Products
  const { latest, popular, radimartmall: radimartMall } = products;

  // Menus
  const { sideMenu } = menus;

  return (
    <Fragment>
      <BannerSlider menus={sideMenu} slider={slider} />
      <Products link="new-arrivals" title="Special Deals" products={radimartMall}/>
      <Category categories={category} />
      <Products link="radimart-mall" title="Radimart Mall" products={radimartMall}/>
      <Products link="popular-product" title="Popular products" products={popular}/>
      <Products link="new-arrivals" title="New Arrivals" products={latest} />
      <RadimartShop radimartShop={radimartShop} />
      {/* <SocialMediaEmbed /> */}
    </Fragment>
  );
};

export default HomePage;
