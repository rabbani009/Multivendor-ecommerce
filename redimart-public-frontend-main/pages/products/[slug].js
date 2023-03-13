import React from "react";
// import {useRouter} from "next/router";

import ProductsPage from "../../components/products/products-page";
import { getProducts } from "../../lib/api/products";
import { isEmpty } from "../../lib/helpers";
import NotFoundPage from "../404";

export async function getServerSideProps(ctx) {
  let productsData = {};
  const { params, query } = ctx;
  const { slug } = params;

  // console.log(`Check params: ${params}`)
  // console.log(`Check query: ${query}`)
  // console.log('check params...', query)
  // let tempQuery = parseInt(query?.page)



  // Products api call...
  const productsRes = await getProducts(slug, query?.cat, query?.brand, query?.minPrice, query?.maxPrice, query?.sortBy, query?.page);
  // console.log('check product response...', productsRes)
  if (productsRes?.response?.status === 404) {
    return {
      notFound: true
    }
  }

  // If status is success
  if(productsRes.status === 200) {
    const {data, success, message} = productsRes.data
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

const ProductsSlugPage = ({ productsData }) => {
  // console.log('check productsData...', productsData)
  // If product data is empty, Than return not found page!
  if (isEmpty(productsData)) return <NotFoundPage/>

  const { data, brand, category, productCount } = productsData;
  return <ProductsPage rootSlug="products" products={data} brands={brand} categories={category} count={productCount}/>;
};

export default ProductsSlugPage;
