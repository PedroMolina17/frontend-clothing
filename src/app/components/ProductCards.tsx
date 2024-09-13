"use client";
import { useGetAllProducts } from "../hooks/useProducts";
import { Product } from "../types/product";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCreateCartItem } from "../hooks/useCart";
import Loading from "./Loading";
const ProductCards = () => {
  const CreateCartItem = useCreateCartItem();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { data: products, isLoading: isLoadingDataProducts } =
    useGetAllProducts();
  const toKebabCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .trim();
  };
  const handleCreate = (productId: number) => {
    const cartItemData = {
      productId: productId,
      quantity: 1,
    };
    CreateCartItem.mutate(cartItemData);
  };
  if (isLoadingDataProducts) return <Loading />;
  if (!products) return <p>No products found</p>;

  return (
    <>
      <div className="grid col-span-1 pt-8">
        <div className="flex">
          <Link href={`/`}>Home</Link>
          <span className="px-1">{`>`}</span>
          <Link href={`/products`} className="font-bold">
            Products
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 max-md:gap-16 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center flex-wrap">
        {products.map((product: Product) => (
          <div key={product.id} className="grid col-span-1  ">
            <div className="flex flex-col justify-center items-center gap-1">
              <Link
                key={product.id}
                href={`products/${toKebabCase(product.name)}`}
                passHref
              >
                <Image
                  alt={product.name}
                  src={baseUrl + product.image_cover[0].url}
                  width={200}
                  height={200}
                  className="rounded"
                />
              </Link>
              <div className="flex justify-between items-center w-52">
                <div className="flex flex-col gap-1">
                  <p className="text-center">{product.name}</p>
                  <p className="text-[#393939] font-bold text-lg">
                    ${product.price}
                  </p>
                </div>
                <button
                  className="bg-[#393939] px-2 py-2 rounded-md text-white"
                  onClick={() => handleCreate(product.id)}
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCards;
