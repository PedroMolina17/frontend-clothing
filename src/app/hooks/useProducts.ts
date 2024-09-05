"use client";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  deleteProduct,
  createProduct,
  getProductByName,
  getProductById,
  updateProduct,
} from "../services/product";
import Swal from "sweetalert2";
import { CreateProduct, UpdateProduct } from "../types/product";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: CreateProduct) => createProduct(product),
    onSuccess: () => {
      router.push("/admin/products");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

const useGetProductByName = (name: string) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProductByName(name),
    enabled: !!name,
  });
};

const useGetProductById = (id: number) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProductById(id),
  });
};

const useUpdateProduct = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, product }: { id: number; product: UpdateProduct }) =>
      updateProduct(id, product),
    onSuccess: () => {
      router.push("/admin/products");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export {
  useGetAllProducts,
  useDeleteProduct,
  useCreateProduct,
  useGetProductByName,
  useGetProductById,
  useUpdateProduct,
};
