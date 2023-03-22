import Link from "next/link";
import React from "react";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: "Services", href: "/service", current: false },
  { name: "Products", href: "/product", current: false },
  { name: "About Us", href: "/about_us", current: false },
  { name: "Contact Us", href: "/contact_us", current: false },
];

export default function Footer() {
  return (
    <div className="bg-gray-600 ">
      <footer className="flex container px-4 py-[20px] lg:py-[30px] items-center justify-between">
        <div className="w-2/6 md:w-2/12">
          <Link href="/">
            <img src="/azra-textiles.webp" />
          </Link>
        </div>

        <div className="w-4/6 md:w-10/12 pl-8 md:p-0">
          <ul className="md:flex justify-center">
            {navigation.map((item) => (
              <li
                key={item.name}
                className={
                  "text-gray-900 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[17px] font-semibold uppercase inline-block cursor-pointer"
                }
                aria-current={item.current ? "page" : undefined}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="bg-gray-900 text-white p-5 text-center">
        copy write @fahim-patowary 2023
      </div>
    </div>
  );
}
