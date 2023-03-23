import WrapperSection from "@/layouts/wrapperSection";
import SectionParagrap from "@/lib/sectionParagrap";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";

const text = "Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As years go by, the range of produced textiles has been increased, besides the regular production became the largest exporter. Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As years go by, the range of produced textiles has been increased, besides the regular production became the largest exporter. Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As years go by, the range of produced textiles has been increased, besides the regular production became the largest exporter."

export default function AboutUs() {
  return (
    <WrapperSection>
      <div className="text-center mb-0 md:mb-[5px] lg:mb-[30px] px-[20px]">
        <SectionParagrap para="about us" />
        <SectionTitle title="The Leading Textile Brand In Market Since 1970" />
      </div>

      <div className="flex flex-wrap items-center p-[20px]">
        <div className="w-full md:w-3/6">
          <p className="text-[18px] text-justify mb-[20px]">
            {text}
          </p>
        </div>

        <div className="w-full md:w-3/6 flex items-center justify-center">
          <img src="/about.jpeg" className="w-[50%] rounded-lg mb-[20px]" />
        </div>
      </div>
    </WrapperSection>
  );
}
