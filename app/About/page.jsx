"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xs p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            About Us
          </h1>
          <div className="h-1 w-24 bg-green-600 mx-auto mb-8"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 text-center font-medium">
              Welcome to BioAreca – Naturally Sustainable, Responsibly Made.
            </p>

            <p className="text-gray-700 mb-6">
              At BioAreca, we&apos;re passionate about making eco-friendly living
              simple and accessible. Based in the heart of India, SLN Areca
              Industries is proud to bring you 100% natural and biodegradable
              tableware made from areca palm leaves – nature&apos;s very own
              packaging solution.
            </p>

            <p className="text-gray-700 mb-6">
              We manufacture premium-quality areca leaf plates, bowls, trays,
              and more, using fallen palm leaves sourced directly from local
              farms. No trees are cut, no chemicals are added – just pure,
              sustainable craftsmanship. Our products are compostable,
              microwave-safe, and sturdy, making them the perfect alternative to
              plastic or paper disposables.
            </p>

            <p className="text-gray-700 mb-6">
              Whether you&apos;re a conscious consumer, a catering business, or a
              global distributor, BioAreca is committed to serving your needs
              with sustainably made, high-performance products. With a
              production capacity of over 600,000 plates per month, we supply
              both domestic and international markets, including the USA and
              Israel, under various brand collaborations.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Why Choose BioAreca?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <span className="text-gray-700">
                    100% natural, chemical-free products
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🛠️</span>
                  <span className="text-gray-700">
                    Precision manufacturing with strict quality control
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌍</span>
                  <span className="text-gray-700">
                    Global export experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">♻️</span>
                  <span className="text-gray-700">
                    Compostable and environmentally safe
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🤝</span>
                  <span className="text-gray-700">
                    Custom branding, packaging & bulk supply available
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-gray-700 text-center font-medium italic">
              We believe in protecting our planet, one plate at a time. Join us
              in the journey toward a greener tomorrow.
            </p>
          </div>
        </div>

        <div className="bg-green-100 rounded-xl shadow-xs p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Creating products that respect and preserve our natural
                resources
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                Maintaining the highest standards in every product we create
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Supporting local farmers and sustainable practices
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
