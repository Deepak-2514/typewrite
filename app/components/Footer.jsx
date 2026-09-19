import React from "react";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full h-fit flex bg-amber-200 p-10 justify-center items-start gap-x-20 max-md:flex-col max-md:gap-y-10 max-md:items-start">
      <div className="flex flex-col gap-3 w-fit">
        <p className="text-2xl font-black flex gap-5 items-center">
          <Image src="/arecalogos.png" width={50} height={50} alt="logo" />
          <span>BIOARECA</span>
        </p>
        <p className="w-[300px]">
          Committed to sustainable dining solutions that protect our planet.
        </p>
      </div>

      <div className="flex flex-col gap-3 mr-20 max-md:m-0 w-fit">
        <p className="text-2xl font-black">Quick links</p>
        <ul className="gap-2 flex flex-col w-fit">
          <Link href="/About">
            <li>About us</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
          <Link href="/Products">
            <li>Products</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col gap-3 w-fit">
        <p className="text-2xl font-black">Contact</p>
        <ul>
          <li className="flex gap-2 pb-2">
            <Phone />
            <p>+91 80880 87483</p>
          </li>
          <li className="flex gap-2 pb-2">
            <Mail />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Rajus@bioareca.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rajus@bioareca.com
            </a>
          </li>
          <li className="flex gap-2 pb-2">
            <Globe />
            <a href="https://www.bioareca.com" target="_blank">
              www.bioareca.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
