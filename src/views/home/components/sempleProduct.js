import WrapperSection from "@/layouts/wrapperSection";
import React from "react";
import ProductLeft from "./productLeft";
import SampleProductCard from "./sampleProductCard";

export default function SempleProduct() {
  return (
    <WrapperSection>
      <div className="flex flex-wrap px-[10px] md:px-[20px]">
        <ProductLeft />

        <div className="w-full lg:w-8/12 flex flex-wrap md:mx-[-15px] lg:mx-[0] mb-[20px]">
          <SampleProductCard />
          <SampleProductCard />
          <SampleProductCard />
          <SampleProductCard />
          <SampleProductCard />
          <SampleProductCard />
        </div>
      </div>
    </WrapperSection>
  );
}
