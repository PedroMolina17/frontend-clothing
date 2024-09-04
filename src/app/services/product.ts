import axiosInstance from "../../../config/api";
import { Product, CreateProduct } from "../types/product";
export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/product");
  return data;
};

export const deleteProduct = async (id: number) => {
  await axiosInstance.delete(`/product/${id}`);
};

export const updateProduct = async (id: number) => {
  await axiosInstance.put(`/product/${id}`);
};

export const createProduct = async (product: CreateProduct) => {
  const response = await axiosInstance.post("/product", product);
  return response.data;
};
