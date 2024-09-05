"use client";
import { CreateImageCover } from "../types/imageCover";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getCountCart,
  createCart,
  getAllCartItems,
  updateCartItem,
  deleteItemCart,
} from "../services/cart";
import Swal from "sweetalert2";
const useGetAllCartItem = () => {
  return useQuery({
    queryKey: ["cartAllItems"],
    queryFn: () => getAllCartItems(),
  });
};

const useGetCountImageCover = () => {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCountCart(),
  });
};

const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteItemCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cartAllItems"],
      });
    },
  });
};

const useCreateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: any) => createCart(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });
};

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, formData }: { id: number; formData: FormData }) =>
      updateCartItem(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });
};

export {
  useGetAllCartItem,
  useDeleteCartItem,
  useCreateCartItem,
  useUpdateCartItem,
  useGetCountImageCover,
};
