"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const products = [
  {
    id: "round-plate",
    name: "Round Plates",
    description: "Palm areca round plates",
    image: "/roundPlate.jpeg",
    sizes: [
      "7 inch round",
      "8 inch round",
      "9 inch round",
      "10 inch round",
      "12 inch round",
    ],
  },
  {
    id: "square-plate",
    name: "Square Plates",
    description: "Palm areca square plates",
    image: "/squarePlate.jpeg",
    sizes: [
      "5 × 5 square",
      "6 × 6 square",
      "7 × 7 square",
      "8 × 8 square",
      "9 × 9 square",
      "10 × 10 square",
    ],
  },
  {
    id: "soup-bowl",
    name: "Soup Bowls",
    description: "Palm areca soup bowls",
    image: "/soupBowl.jpeg",
    sizes: ["5 inch round", "6 inch round", "4 × 4 Square Bowls"],
  },
  {
    id: "square-tray",
    name: "Square Trays",
    description: "Palm areca square trays",
    image: "/squareTray.jpeg",
    sizes: ["Medium"],
  },
  {
    id: "rectangular-tray",
    name: "Rectangular Trays",
    description: "Palm areca rectangular trays",
    image: "/rectangularTray.jpeg",
    sizes: ["Medium"],
  },
  {
    id: "circular-tray",
    name: "Circular Trays",
    description: "Palm areca circular trays",
    image: "/circularTray.jpeg",
    sizes: ["Medium"],
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    onAddToCart(product, selectedSize, quantity);
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
              required
            >
              <option value="">Choose a size</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity (Min: 10)
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(10, quantity - 10))}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                -
              </button>
              <input
                type="number"
                min="10"
                step="10"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(10, parseInt(e.target.value) || 10))
                }
                className="w-20 text-center px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 10)}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product, selectedSize, quantity) => {
    const newItem = {
      id: product.id,
      name: product.name,
      selectedSize,
      quantity,
      image: product.image,
    };

    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Our Products
            </h1>
            <p className="text-gray-600">
              Discover our collection of eco-friendly palm areca products
            </p>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="mt-4 sm:mt-0 bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 flex items-center gap-3 shadow-sm border border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="font-semibold">Cart ({cartItems.length})</span>
          </button>
        </div>

        {showCart ? (
          <Cart
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
