import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
// import Cart from "./Cart";
// import { CartProvider } from './CartContext';

export default function CartSlide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-3 rounded-full  bg-[#5e7b79] hover:bg-gray-300"
      >
        <IoCartOutline size={20} className="w-[20px] h-[20px]" />
      </button>


      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setOpen(false)}>
            <IoCloseSharp size={24} />
          </button>
        </div>
        <div className="p-4">
          {/* <Cart/> */}
          <h1>your cart is empty</h1>

        </div>
      </div>
    </div>
  );
}