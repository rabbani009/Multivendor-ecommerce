import http from "./httpService";

// Pay api...
// export const pay = async (data) =>
//   await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/order/place`, data);

// Get orders status...
export const getOrders = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/all`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

// Get order...
export const getOrder = async (_token, orderId) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/single/${orderId}`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

  // Place order
export const placeOrder = async (_token, data) =>
  await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/order/place`, data, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });
