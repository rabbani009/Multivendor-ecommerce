import React from "react";

import ProductsPage from "../../components/products/products-page";
import NotFoundPage from "../404";

import { search } from "../../lib/api/public";
import {isEmpty} from "../../lib/helpers";

export async function getServerSideProps(ctx) {
  let productsData = {};
  const { query } = ctx;

  // Search api call...
  const searchRes = await search(query?.search, query?.cat, query?.brand, query?.minPrice, query?.maxPrice, query?.sortBy, query?.page);
  if (searchRes?.response?.status === 404) {
    return {
      notFound: true
    }
  }

  // If status is success
  if(searchRes.status === 200) {
    const {data, success, message} = searchRes.data
    if (success) {
      productsData = data
    }
  } else {
    // return
  }

  return {
    props: {
      productsData : productsData || {},
    },
  };
}


const SearchPage = ({ productsData }) => {

  if (isEmpty(productsData)) return <NotFoundPage/>

  const { data, brand, category, productCount } = productsData;

  // return <ProductsPage count={count} productsInfo={products} />;
  return <ProductsPage rootSlug="search" products={data} brands={brand} categories={category} count={productCount}/>;
};

export default SearchPage;
