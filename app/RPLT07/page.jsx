"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RoundPlatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image Section */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/roundPlate.jpeg"
              alt="7 inch Round Areca Leaf Plate"
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              7&quot; Round Areca Leaf Plate
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              A perfect blend of sustainability and elegance, our 7-inch round
              plates are crafted from 100% natural areca palm leaves. These
              plates are not only eco-friendly but also sturdy enough to handle
              a variety of dishes, making them ideal for both casual and formal
              dining occasions.
            </p>

            {/* Company Description */}
            <div className="bg-green-50 rounded-xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                About BioAreca
              </h2>
              <p className="text-gray-700 mb-4">
                At BioAreca, we are committed to revolutionizing the tableware
                industry with our sustainable, eco-friendly products. Our
                journey began with a simple mission: to provide high-quality,
                biodegradable alternatives to plastic and paper products.
              </p>
              <p className="text-gray-700 mb-4">
                With a production capacity of over 600,000 plates per month, we
                serve both domestic and international markets, including the USA
                and Israel. Our products are made from naturally fallen areca
                palm leaves, ensuring zero harm to trees and minimal
                environmental impact.
              </p>
              <p className="text-gray-700">
                We take pride in our precision manufacturing process and strict
                quality control measures, ensuring that every product meets the
                highest standards of durability and aesthetic appeal.
              </p>
            </div>

            {/* Product Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🌿</div>
                <h3 className="font-semibold text-gray-900">100% Natural</h3>
                <p className="text-sm text-gray-600">
                  Made from fallen palm leaves
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">♻️</div>
                <h3 className="font-semibold text-gray-900">Compostable</h3>
                <p className="text-sm text-gray-600">Biodegrades naturally</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">Sturdy</h3>
                <p className="text-sm text-gray-600">
                  Perfect for all types of food
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">✨</div>
                <h3 className="font-semibold text-gray-900">Elegant</h3>
                <p className="text-sm text-gray-600">
                  Natural texture and design
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
