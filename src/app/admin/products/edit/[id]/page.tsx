"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useGetProductById, useUpdateProduct } from "@/app/hooks/useProducts";
import { useUpdateImageCover } from "@/app/hooks/useImageCover";

type FormValues = {
  name: string;
  description: string;
  color: string;
  price: number;
  image: FileList;
};

const UpdateProduct = () => {
  const params = useParams();
  const id = params.id;
  const { data: dataProduct, isLoading } = useGetProductById(Number(id));
  const mutateProduct = useUpdateProduct();
  const mutateImageCover = useUpdateImageCover();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    if (dataProduct) {
      setValue("name", dataProduct.name);
      setValue("description", dataProduct.description);
      setValue("color", dataProduct.color);
      setValue("price", dataProduct.price);
      setImagePreview(dataProduct.image_cover[0]?.url);
    }
  }, [dataProduct, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await mutateProduct.mutateAsync({
      id: Number(id),
      product: {
        name: data.name,
        description: data.description,
        color: data.color,
        price: data.price,
      },
    });

    if (selectedFile) {
      const formData = new FormData();
      formData.append("imageCover", selectedFile);
      formData.append("productId", Number(id).toString());

      mutateImageCover.mutate({
        id: Number(id),
        formData,
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    router.push("/admin/products");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Update Product</h2>
          <div className="flex gap-4">
            <button
              onClick={handleCancel}
              className="bg-[#f86969] text-white p-2 rounded mt-4 w-44"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#72c76b] text-white p-2 rounded mt-4 w-44"
            >
              Update Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="grid col-span-3 gap-8">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
              {errors.name && (
                <p className="text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
              {errors.description && (
                <p className="text-red-600 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Color</label>
              <input
                {...register("color", { required: "Color is required" })}
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
              {errors.color && (
                <p className="text-red-600 mt-1">{errors.color.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                {...register("price", { required: "Price is required" })}
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
              {errors.price && (
                <p className="text-red-600 mt-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div className="grid col-span-2">
            <div className="flex flex-col">
              <div className="relative">
                <label className="block text-gray-700">Image Cover</label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="file-upload"
                  className="block border border-gray-300 p-2 rounded bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200"
                >
                  {selectedFile ? selectedFile.name : "Choose file"}
                </label>
                <div className="flex justify-center">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-4 w-96 h-96 object-cover rounded"
                    />
                  )}
                  {errors.image && (
                    <p className="text-red-600 mt-1">{errors.image.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
