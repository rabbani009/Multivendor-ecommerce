import http from "./httpService"

export const getAllShops = async (page) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/shops?page=${page}`)

export const getShop = async (shop, page) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/single-shop/${shop}?page=${page}`)