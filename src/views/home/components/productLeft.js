import SectionParagrap from "@/lib/sectionParagrap";
import SectionTitle from "@/lib/sectionTitle";
import Link from "next/link";
import React from "react";

export default function ProductLeft() {
  return (
    <div className="lg:w-4/12 br-0 lg:pr-3">
      <div className="mb-[20px] bg-green-300 px-[20px] md:px-[30px] pt-[20px] md:pt-[25px] lg:pt-[50px] md:pb-[5px] lg:pb-[30px] rounded-lg">
        <SectionParagrap para="Oure Product" />
        <SectionTitle title="Sample product you will like this" />

        <p className="text-justify text-[17px] mb-[20px]">
          We own professional fabric trade department, which can save much more
          extra taxes.We own professional fabric trade department, which can
          save much more extra taxes.We own professional fabric trade
          department, which can save much more extra taxes.
        </p>

        <Link
          href="#"
          className="inline-block bg-red-600 px-3 py-2 text-white rounded-lg text-[20px] font-semibold mb-[20px]"
        >
          All Product
        </Link>
      </div>
    </div>
  );
}
