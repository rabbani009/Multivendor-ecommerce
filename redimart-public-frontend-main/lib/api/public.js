import http from "./httpService";

// Get homepage...
export const getHomePage = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/homepage`);

// Get product...
export const getProduct = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/homepage/product`);

// All menus...
export const getAllMenus = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/homepage/menu`);

// Search...
// export const search = async (data) =>
//   await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/search`, data);

export const search = async (search, catId = "", brandId = "", minPrice = "", maxPrice = "", sortBy = "", pageNum = 1) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/search?search=${search}&categoryId=${catId}&brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&page=${pageNum}`);
