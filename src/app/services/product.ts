import axiosInstance from "../../../config/api";
import { Product, CreateProduct, UpdateProduct } from "../types/product";
export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/product");
  return data;
};

export const deleteProduct = async (id: number) => {
  await axiosInstance.delete(`/product/${id}`);
};

export const updateProduct = async (id: number, data: UpdateProduct) => {
  await axiosInstance.patch(`/product/${id}`, data);
};

export const createProduct = async (product: CreateProduct) => {
  const response = await axiosInstance.post("/product", product);
  return response.data;
};

export const getProductByName = async (name: string) => {
  const { data } = await axiosInstance.get(`/product/search?name=${name}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await axiosInstance.get(`/product/${id}`);
  return data;
};
