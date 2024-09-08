"use client";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description for product 1.",
      image: "/free-photo-of-moda-fotografia-marron-elegancia.jpeg",
      price: "$29.99",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description for product 2.",
      image: "/free-photo-of-moda-zapatos-colorido-de-colores.jpeg",
      price: "$39.99",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description for product 3.",
      image: "/pexels-photo-27385019.webp",
      price: "$49.99",
    },
  ];

  return (
    <main className="py-2 text-[#393939]">
      <section
        className="hero bg-slate-100 p-12 text-center relative"
        style={{
          backgroundImage: "url(/pexels-photo-135620.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px",
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-60 z-10"></div>

        <div className="flex flex-col gap-8 text-white z-30 relative">
          <p className="text-xl mb-8 text-start">
            Discover the best products just for you!
          </p>
          <h1 className="text-7xl font-bold mb-4 text-start">
            Welcome to Our Storea
          </h1>

          <div className="text-start w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            debitis id explicabo quam nostrum pariatur velit veniam vero quis
            culpa, maiores distinctio repudiandae ratione illum soluta
            necessitatibus perferendis vitae obcaecati! Adipisci quaerat ipsam
            magnam quasi, soluta consequatur maiores. Aperiam molestias atque,
            accusamus inventore odit deleniti odio adipisci repellat! Laudantium
            atque quia repudiandae corporis. Voluptas magnam iusto voluptatem
            culpa corporis optio reprehenderit laudantium maxime aut! Tempore
          </div>
          <button className="bg-[#e6e6e6] text-black px-4 py-2 mt-16 w-72 rounded-md font-bold">
            Comprar
          </button>
        </div>
      </section>

      <section className="products mt-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card border rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-[#393939] text-white rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
