export const getLocalStorage = (key) => {
  let value = typeof window !== "undefined" ? localStorage.getItem(key) : "";
  if (value) {
    return JSON.parse(localStorage.getItem(key));
  }
};
