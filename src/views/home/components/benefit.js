import WrapperSection from "@/layouts/wrapperSection";
import SectionParagrap from "@/lib/sectionParagrap";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import BenefitCard from "./benefitCard";

const benefit = [
  {
    id: 1,
    title: "Take Price Advantages",
    text: "We own professional fabric trade department, which can save much more extra taxes.",
  },
  {
    id: 2,
    title: "Latest Machine Advantage",
    text: "We own professional fabric trade department, which can save much more extra taxes.",
  },
  {
    id: 3,
    title: "24*7 Service Advantages",
    text: "We own professional fabric trade department, which can save much more extra taxes.",
  },
];

export default function Benefit() {
  return (
    <WrapperSection>
      <div className="text-center mb-0 md:mb-[5px] lg:mb-[30px] px-[20px]">
        <SectionParagrap para="BENEFIT" />
        <SectionTitle title="Technology Of Textile" />
      </div>

      <div className="flex flex-wrap px-[20px]">
        {benefit.map((item) => (
          <BenefitCard key={item.id} benefit={item} />
        ))}

        {/* <BenefitCard /> */}
      </div>
    </WrapperSection>
  );
}
