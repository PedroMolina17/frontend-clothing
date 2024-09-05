"use client";
import { usePathname } from "next/navigation";
import { useGetProductByName } from "../../../hooks/useProducts";
import Image from "next/image";
const ProductPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const pathname = usePathname();
  const name = pathname?.split("/")[2];
  const { data: product, isLoading, error } = useGetProductByName(name);
  name && console.log(name);
  name && console.log("Product name from URL:", name);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <main className="px-12 text-[#393939]">
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Color: {product.color}</p>
        <p>Price: ${product.price}</p>
        {product.image_cover && product.image_cover.length > 0 && (
          <Image
            src={baseUrl + product.image_cover[0].url}
            alt={product.name}
            width={200}
            height={200}
          />
        )}
      </div>
    </main>
  );
};

export default ProductPage;
