import http from "./httpService";

// Get all category
export const getAllCategory = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get-category`)

// Get category product
// export const getCategoryProduct = async (slug) =>
//   await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get-category-product/${slug}`);

export const getCategoryProducts = async (slug, brandId = "", minPrice = "", maxPrice = "", sortBy = "", pageNum = 1) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get-category-product/${slug}?brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&page=${pageNum}`)


