import React, { Fragment } from "react";

import { getCategoryProducts } from "../../lib/api/category";
import ProductsPage from "../../components/products/products-page";

export async function getServerSideProps(ctx) {
  const { params, query } = ctx;
  const { slug } = params;

  // console.log(`check query: ${query}`)
  // console.log(`check slug: ${slug}`)

  let productsData = {};

  // Products api call...
  const productsRes = await getCategoryProducts(slug, query?.brand, query?.minPrice, query?.maxPrice, query?.sortBy, query?.page);
  if(productsRes.status === 200) {
    const {data, success, message} = productsRes.data
    if (success) {
      productsData = data
    }
  }

  return {
    props: {
      productsData,
    },
  };
}

// export async function getStaticProps(ctx) {
//   const { params } = ctx;
//   const { slug } = params;

//   let categoryData = {};
//   // Category product api call...
//   const categoryProductRes = await getCategoryProduct(slug);
//   if (categoryProductRes.status === 200) {
//     const { success, data } = categoryProductRes.data;
//     if (success) {
//       categoryData = data;
//     }
//   }

//   return {
//     props: {
//       categoryData,
//     },
//   };
// }

// export async function getStaticPaths() {
//   // const { data } = await getCategoryProductPage();
//   // const slugs = data.map((product) => product.slug);
//   // const pathWithParams = slugs.map((slug) => ({ params: { slug: slug } }));

//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }

const CategoryProductPage = (props) => {
  const { productsData } = props;
  const { data, brand, category, productCount } = productsData;
  // console.log('check product info...', productsData)

  return (
    <Fragment>
       {/*<h1>Hello world</h1>*/}
      <ProductsPage noCat={true} rootSlug="products" products={data} brands={brand} categories={category} count={productCount}/>
    </Fragment>
  );
};

export default CategoryProductPage;
