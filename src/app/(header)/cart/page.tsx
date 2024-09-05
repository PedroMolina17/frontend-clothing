"use client";
import Image from "next/image";
import React from "react";
import { useGetAllCartItem } from "@/app/hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDeleteCartItem } from "@/app/hooks/useCart";
const Cart = () => {
  const deleteProduct = useDeleteCartItem();
  const { data: cartItems } = useGetAllCartItem();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

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

  const calculateTotal = () => {
    return cartItems
      ?.reduce(
        (total: number, item: any) =>
          total + item.product.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  if (!cartItems) return <div>No items in cart</div>;
  return (
    <div className="flex flex-col md:flex-row gap-8 p-12 max-md:px-2 max-md:text-xs md:py-16 ">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4 max-md:text-lg">
          Carrito de compras
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Producto</th>
              <th className="py-2 text-left">Precio</th>
              <th className="py-2 text-left">Cantidad</th>
              <th className="py-2 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item: any) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center">
                  <button
                    className="mr-4 text-red-400"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>
                  <Image
                    src={baseUrl + item.product.image_cover[0].url}
                    alt={item.product.name}
                    className="md:w-16 md:h-16 object-cover mr-4 max-md:h-6 max-md:w-6 lg:h-20 lg:w-20"
                    width="100"
                    height="100"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <span>{item.product.name}</span>
                </td>
                <td className="py-4">€{item.product.price.toFixed(2)}</td>
                <td className="py-4">
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    className="w-12 border rounded text-center"
                  />
                </td>
                <td className="py-4">
                  €{calculateSubtotal(item.product.price, item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Cart totals</h2>
        <div className="border p-4 rounded">
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>€{calculateTotal()}</span>
          </div>
          <div className="mb-4">
            <span>Shipping</span>
            <div className="mt-2">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="shipping"
                  id="free-shipping"
                  defaultChecked
                />
                <label htmlFor="free-shipping" className="ml-2">
                  Free shipping
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" name="shipping" id="flat-rate" />
                <label htmlFor="flat-rate" className="ml-2">
                  Flat rate: €10.00
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" name="shipping" id="pickup" />
                <label htmlFor="pickup" className="ml-2">
                  Pickup: €15.00
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Shipping options will be updated during checkout.
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span>€{calculateTotal()}</span>
          </div>
          <button className="w-full bg-[#303133] text-white py-2 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
