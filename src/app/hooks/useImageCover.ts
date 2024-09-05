"use client";
import { CreateImageCover } from "../types/imageCover";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllImageCover,
  createImageCover,
  deleteImageCover,
  updateImageCover,
} from "../services/image-cover";
import Swal from "sweetalert2";
const useGetAllImageCover = () => {
  return useQuery({
    queryKey: ["imageCover"],
    queryFn: () => getAllImageCover(),
  });
};

const useDeleteImageCover = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (imageCoverId: number) => deleteImageCover(imageCoverId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["imageCover"] });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });
};

const useCreateImageCover = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => createImageCover(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["imageCover"] });
    },
  });
};

const useUpdateImageCover = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, formData }: { id: number; formData: FormData }) =>
      updateImageCover(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["imageCover"] });
    },
  });
};

export {
  useGetAllImageCover,
  useDeleteImageCover,
  useCreateImageCover,
  useUpdateImageCover,
};
