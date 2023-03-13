import http from "./httpService";

// Login
export const login = async (data) =>
  await http.post(`${process.env.NEXT_PUBLIC_AUTH_URL}/login`, data);

// Signup...
export const signup = async (data) =>
  await http.post(`${process.env.NEXT_PUBLIC_AUTH_URL}/registration`, data);

// Verify token...
export const verifyToken = async (_token) =>
  await http.get(`${process.env.NEXT_PUBLIC_TOKEN_URL}`, {
    headers: {
      Authorization: `bearer ${_token}`,
      "Content-Type": "application/json",
    },
  });

// Forgot password...
export const forgotPass = async (data) =>
  await http.post(`${process.env.NEXT_PUBLIC_USER_AUTH_URL}/send-otp`, data);

// Check opt...
export const checkOTP = async (data) =>
  await http.post(`${process.env.NEXT_PUBLIC_USER_AUTH_URL}/check-otp`, data);

// Reset password
export const resetPass = async (data) =>
  await http.post(
    `${process.env.NEXT_PUBLIC_USER_AUTH_URL}/password-reset`,
    data
  );

// Get profile...
export const getProfile = async () =>
  await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/profile`);

// Update profile...
export const updateProfile = async (data) =>
  await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/update-customer`, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
