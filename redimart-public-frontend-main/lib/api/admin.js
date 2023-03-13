import http from "./httpService";

// Create address...
export const createAddress = async (_token, data) =>
  await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/create-address`, data, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });

// Get divisions...
export const getDivisions = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/all-divisions`);

// Get Cities...
export const getCities = async (id) =>
  await http.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/district/${id}`);

// Get ares...
export const getArea = async (id) =>
  await http.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/area/${id}`);

// Get default address...
export const getDefaultAddress = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/default-address`, {
    headers: {
      Authorization: `bearer ${_token}`,
    },
  });
  

// Get all address...
// export const getAddressList = async () =>
//   await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/customer-address`);

// Get customer address...
export const getCustomerAddress = async () =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/customer-address`);
