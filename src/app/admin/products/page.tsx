"use client";
import { useGetAllProducts, useDeleteProduct } from "../../hooks/useProducts";
import { Product } from "../../types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const Products = () => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const deleteProduct = useDeleteProduct();

  const { data: products, isLoading: isLoadingDataProducts } =
    useGetAllProducts();

  if (isLoadingDataProducts) return <p>Loading...</p>;
  if (!products) return <p>No products found</p>;
  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct.mutate(id);
      }
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between py-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <button
          onClick={() => router.push("/admin/products/create")}
          className="bg-[#141414] text-white rounded-md w-48"
        >
          Create
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product: Product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <ul className="flex space-x-2">
                  {product.image_cover.map((image) => (
                    <li key={image.id} className="relative">
                      <Image
                        src={`${baseUrl}${image.url}`}
                        alt={`Image ${image.id}`}
                        width={100}
                        height={100}
                        className="rounded"
                      />
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.color}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() =>
                    router.push(`/admin/products/edit/${product.id}`)
                  }
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
