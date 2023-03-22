import Link from "next/link";
import React from "react";

export default function Heros() {
  return (
    <div className="h-[60vh] min-h-[480px] md:h-[75vh] lg:h-[105vh] w-full bg-gray-900 flex items-center justify-center text-center text-gray-100 bg-[url('/slider-mainbg.jpg')] bg-cover mb-[20px] md:mb-[25px] lg:mb-[50px]">
      <div children="container">
        <h1 className="text-4xl md:text-6xl capitalize text-bold mb-7">
          the <strong className="text-red-500 ">Possibilities</strong> Are
          Endless
        </h1>
        <p className="p-x-4 w-[90%] md:w-auto m-auto mb-7">
          Since more than 40 years, FABLIO is operating in the textile market
          manufacture{" "}
        </p>

        <Link
          href="/about_us"
          className="inline-block mr-4 p-3 text-lg font-medium bg-red-600 hover:bg-neutral-500 rounded-lg"
        >
          More Details
        </Link>

        <Link
          href="/contact_us"
          className="inline-block mr-4 p-3 text-lg font-medium hover:bg-gray-800 hover:text-gray-100 border-2 rounded-lg"
        >
          Massage
        </Link>
      </div>
    </div>
  );
}
