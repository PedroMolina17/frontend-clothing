"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useGetCountImageCover } from "../hooks/useCart";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: countCart } = useGetCountImageCover();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between border-b p-1 text-[#393939] max-md:hidden">
        <div className="flex gap-2">
          <span>Login</span>
          <span>Register</span>
        </div>
        <div className="flex gap-2">Es un ecommerce</div>
      </div>

      <div className="flex justify-between items-center pt-4 pb-8 border-b ">
        <div className="flex gap-32 max-md:gap-12">
          <h1 className="text-4xl max-md:text-xl font-bold">
            <Link href={"/"}>eShop</Link>
          </h1>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl max-md:text-lg">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex gap-3 items-center text-xl">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
        </ul>
        <div className="flex gap-2 text-xl max-md:hidden relative">
          <Link href={"/cart"}>
            <FaShoppingCart />
          </Link>
          <span className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {countCart?.data ? countCart.data : 0}
          </span>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 p-4 absolute top-20 left-0 w-full z-10 flex flex-col `}
      >
        <ul className="flex flex-col gap-4  text-center max-md:text-lg">
          <li>
            <Link href={"/"} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/products"} onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link href={"/admin"} onClick={toggleMenu}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
