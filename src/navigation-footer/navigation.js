import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const logo = "/images.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: "Services", href: "/service", current: false },
  { name: "Products", href: "/product", current: false },
  { name: "About Us", href: "/about_us", current: false },
  { name: "Contact Us", href: "/contact_us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <div className="md:fixed w-full z-[10]">
      {/* <div className="bg-[#018836] text-white p-[10px]">Top nav</div> */}
      <Disclosure as="nav" className="bg-gray-200">
        {({ open }) => (
          <>
            <div className="mx-auto container py-3 px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between">
                <div className="flex flex-1 items-center md:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="block h-auto max-h-16 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-auto max-h-16 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </a>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                            "text-gray-900 text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[17px] font-semibold uppercase"
                          }
                          aria-current={item.current ? true : false}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      "text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
