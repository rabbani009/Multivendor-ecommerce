import http from "./httpService";

// My reviews
export const myReviews = async (_token, status) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/feedback/order-review?status=${status}`, {
        headers: {
            Authorization: `bearer ${_token}`,
        },
    });

export const getReviewProduct = async (_token, orderId, productId, attributeId) =>
    await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/feedback/get-product-review-data?productId=${productId}&&attributeId=${attributeId}&&orderId=${orderId}`, {
        headers: {
            Authorization: `bearer ${_token}`,
        },
    })

export const writeReview = async (data) =>
    await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/feedback/add`, data)
