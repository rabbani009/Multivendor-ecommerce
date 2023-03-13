// Profile page info list:=>

export const profileInfoList = [
  { id: 1, text: "Profile", slug: "/profile", link: "/profile" },
  { id: 2, text: "Wishlist", slug: "/wishlist", link: "/wishlist" },
  { id: 3, text: "Order", slug: "/order", link: "/order" },
  { id: 4, text: "Address", slug: "/address", link: "/address" },
  { id: 5, text: "My Reviews", slug: "/my-reviews", link: "/my-reviews?status=to-be-reviewed" },
];

export const isEmpty = obj => Object.keys(obj).length === 0
