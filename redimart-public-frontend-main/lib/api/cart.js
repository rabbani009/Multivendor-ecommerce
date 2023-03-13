import http from "./httpService";

// Add to cart
export const addCart = async (_token, data) =>
  await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/add`, data, {
    headers: {
      Authorization: `bearer ${_token}`,
      "Content-Type": "application/json",
    },
  });

// Get all carts
export const getCartAll = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/all`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

// Cart count/ total
export const cartCount = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/count`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

// Delete cart item...
export const deleteCart = async (id, _token) =>
  await http.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cart/delete/${id}`,
    {},
    {
      headers: {
        Authorization: `bearer ${_token}`,
      },
    }
  );
