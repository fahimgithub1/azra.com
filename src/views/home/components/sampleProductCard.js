import Link from "next/link";
import React from "react";

export default function SampleProductCard() {
  return (
    <div className="w-6/12 md:w-4/12 px-[10px] md:px-[15px] mb-[15px]">
      <div className="bg-gray-100 p-[15px] rounded-lg">
        <div className="mb-[15px] max-h-[173px] m-auto">
          <img
            src="/product1.jpg"
            className="max-w-full max-h-[173px] m-auto rounded-lg"
          />
        </div>

        <Link href="#">
          <h5 className="font-semibold text-[16px] truncate">
            ASTM Standard 220V Elmendorf Tearing Strength Tester For Textile
            Paper
          </h5>
        </Link>
      </div>
    </div>
  );
}
