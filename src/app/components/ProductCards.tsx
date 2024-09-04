"use client";
import { useGetAllProducts } from "../hooks/useProducts";
import { Product } from "../types/product";
import Image from "next/image";
const ProductCards = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { data: products, isLoading: isLoadingDataProducts } =
    useGetAllProducts();

  if (isLoadingDataProducts) return <p>Loading...</p>;
  if (!products) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-4 gap-12 py-12">
      {products.map((product: Product) => (
        <div key={product.id} className="grid col-span-1">
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              alt={product.name}
              src={baseUrl + product.image_cover[0].url}
              width={200}
              height={200}
              className="rounded"
            />
            <p className="text-center">{product.name}</p>
            <div className="flex flex-col gap-2">
              <button className="bg-[#141414] px-2 py-2 rounded-md border text-white">
                Ver detalles
              </button>
              <button className="bg-[#141414] px-2 py-2 rounded-md text-white">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
