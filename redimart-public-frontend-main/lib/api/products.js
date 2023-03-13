import http from "./httpService";

// Get product...
export const getProductDetails = async (slug) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/details/${slug}`);

// Get products
// export const getProducts = async (slug, pageNumber) => {
//   if(!pageNumber) return await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`)
//   else return await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}?page=${pageNumber}`)
// }

export const getProducts = async (slug, catId = "", brandId = "", minPrice = "", maxPrice = "", sortBy = "", pageNum = 1) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}?categoryId=${catId}&brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&page=${pageNum}`)

