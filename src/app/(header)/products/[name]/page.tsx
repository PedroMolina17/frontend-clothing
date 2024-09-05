"use client";
import { usePathname } from "next/navigation";
import { useGetProductByName } from "../../../hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
const ProductPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const pathname = usePathname();
  const name = pathname?.split("/")[2];
  const { data: product, isLoading, error } = useGetProductByName(name);

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
            <div className="flex flex-col justify-between py-20 items-center">
              <h1 className="text-3xl">{product.name}</h1>
              <p>{product.description}</p>
              <p>Color: {product.color}</p>
              <p>Price: ${product.price}</p>
              <button className="bg-[#393939] text-white rounded-md h-8 w-44">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
