import React from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <div className="w-full h-full flex items-center justify-between  px-10 py-3 ">
      <p className="text-2xl font-bold text-green-700  cursor-pointer flex gap-2 ">
        <Link href="/">
          <Image src="/arecalogos.png" width={40} height={40} alt="logo" />
          <span>BIOARECA</span>
        </Link>
      </p>
      <ul className="flex gap-7 text-xl max-sm:hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Products">Product</Link>
        </li>

        <li>
          <Link href="/About">About Us</Link>
        </li>
      </ul>
      <Link href="/Products">
        <button className="bg-green-600 p-3 text-white font-bold rounded-full px-5 cursor-pointer max-sm:hidden">
          Shop now
        </button>
      </Link>
    </div>
  );
}

export default Header;
