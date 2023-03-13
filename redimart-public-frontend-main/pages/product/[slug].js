import SingleProduct from "../../components/products/SingleProduct";
import { getProductDetails } from "../../lib/api/products";

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { slug } = params;

  let productInfo = [];

  // Product info api call...
  const productInfoRes = await getProductDetails(slug);
  if (productInfoRes.status === 200) {
    const { data } = productInfoRes.data;
    productInfo = data;
  }

  return {
    props: {
      productInfo,
    },
  };
}

export async function getStaticPaths(ctx) {
  // const { data } = await getCategoryProducts();
  // const slugs = data.map((product) => product.slug);
  // const pathWithParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: [],
    fallback: "blocking",
  };
}

const CategoryProducts = (props) => {
  const { productInfo } = props;
  if (productInfo.length === 0) return <div>product not found!</div>

  return <SingleProduct productInfo={productInfo} />;
};

export default CategoryProducts;
