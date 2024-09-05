import axiosInstance from "../../../config/api";

export const createCart = async (product: any) => {
  return await axiosInstance.post("/cart-item", product);
};

export const getCountCart = async () => {
  return await axiosInstance.get("/cart-item/count");
};

export const deleteItemCart = async (id: number) => {
  return await axiosInstance.delete(`/cart-item/${id}`);
};

export const getAllCartItems = async () => {
  const { data } = await axiosInstance.get("/cart-item");
  return data;
};

export const updateCartItem = (id: number, data: any) => {
  return axiosInstance.patch("/cart-item");
};
