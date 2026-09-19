"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-xs">
      <div className="relative w-24 h-24">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() =>
              onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
            }
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ items, onRemove, onUpdateQuantity }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No items in cart
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by adding some products to your cart.
        </p>
        <div className="mt-6">
          <Link
            href="/Products"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
      <div className="flex justify-end">
        <Link
          href="/checkout"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
