"use client";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  deleteProduct,
  createProduct,
} from "../services/product";
import Swal from "sweetalert2";
import { CreateProduct } from "../types/product";
const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: CreateProduct) => createProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export { useGetAllProducts, useDeleteProduct, useCreateProduct };
