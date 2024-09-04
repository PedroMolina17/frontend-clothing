"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProduct } from "@/app/hooks/useProducts";
type FormValues = {
  name: string;
  description: string;
  color: string;
};

const CreateProduct = () => {
  const mutateProduct = useCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await mutateProduct.mutateAsync(data);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <p className="text-red-600 mt-1">{errors.description.message}</p>
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

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
