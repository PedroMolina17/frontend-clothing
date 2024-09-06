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
    <main className="px-12 text-[#393939]">
      <section className="hero bg-slate-100 p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-8">Discover the best products just for you!</p>
        <Image
          src="/pexels-photo-135620.webp"
          alt="Hero Image"
          width={1200}
          height={400}
          className="mx-auto rounded-lg"
        />
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
