"use client";

import React from "react";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          RFQ Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your response. We&apos;ll send you a confirmation email
          shortly...
        </p>
        <Link
          href="/Products"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
