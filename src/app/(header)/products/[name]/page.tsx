"use client";
import { usePathname } from "next/navigation";
import { useGetProductByName } from "../../../hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useCreateCartItem } from "@/app/hooks/useCart";
const ProductPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const createCartItem = useCreateCartItem();
  const pathname = usePathname();
  const name = pathname?.split("/")[2];
  const { data: product, isLoading, error } = useGetProductByName(name);
  const handleCreate = (productId: number) => {
    const cartItemData = {
      productId: productId,
      quantity: 1,
    };
    createCartItem.mutate(cartItemData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <>
      <div className="grid col-span-1 pt-8 px-12">
        <div className="flex">
          <Link href={`/`}>Home</Link>
          <span className="px-1">{`>`}</span>{" "}
          <Link href={`/products`}>Products</Link>
          <span className="px-1">{`>`}</span>
          <span className="font-bold">{product.name}</span>
        </div>
      </div>
      <main className="px-12 text-[#393939] py-12">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 ">
          <div className="grid col-span-1">
            {product.image_cover && product.image_cover.length > 0 && (
              <Image
                src={baseUrl + product.image_cover[0].url}
                alt={product.name}
                width={600}
                height={600}
              />
            )}
          </div>
          <div className="grid col-span-1">
            <div className="flex flex-col justify-between py-20 items-center ">
              <p className=" flex w-full text-4xl text-start pl-24 max-lg:pl-12 max-md:pl-0">
                Detalle del Producto
              </p>
              <div className="w-full flex flex-col gap-4 pl-24 max-lg:pl-12 max-md:pl-0">
                <div>
                  <h1 className="text-3xl">{product.name}</h1>
                  <h1 className="text-xs">{product.name}</h1>
                </div>
                <div>
                  <p>{product.description}</p>
                  <p>{product.description}</p>
                </div>
                <p>Color: {product.color}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div className="w-full pl-24 max-lg:pl-12 max-md:pl-0 mt-12">
                <button
                  className="bg-[#393939] text-white rounded-md h-8 w-44"
                  onClick={() => handleCreate(product.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
