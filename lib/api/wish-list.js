import http from "./httpService";

// Get all wishlist
export const getWishlist = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/wishlist`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

// Add wishlist
export const addWishlist = async (_token, productId) =>
  await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/wishlist`, {productId},{
      headers: {
          Authorization: `bearer ${_token}`,
      },
  });

// Remove wishlist
export const removeWishlist = async (_token, id) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/wishlist/delete/${id}`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });
