import axiosInstance from "../../../config/api";
import { ImageCover, CreateImageCover } from "../types/imageCover";
export const getAllImageCover = async (): Promise<ImageCover[]> => {
  const { data } = await axiosInstance.get("/image-cover");
  return data;
};

export const deleteImageCover = async (id: number) => {
  await axiosInstance.delete(`/image-cover/${id}`);
};

export const updateImageCover = async (id: number, formData: FormData) => {
  await axiosInstance.patch(`/image-cover/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const createImageCover = async (formData: FormData) => {
  const response = await axiosInstance.post("/image-cover", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
