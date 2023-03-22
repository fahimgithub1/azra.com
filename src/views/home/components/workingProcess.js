import WrapperSection from "@/layouts/wrapperSection";
import SectionParagrap from "@/lib/sectionParagrap";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import WorkingProcessCard from "./workingProcessCard";

const processData = [
    {
        id: 1,
        src: '/process-01.jpg',
        title: "Production Of Fabric",
        text: "We Produce the best quality of fabric covered all aspects"
    },
    {
        id: 2,
        src: '/process-01.jpg',
        title: "Production Of Fabric2",
        text: "We Produce the best quality of fabric covered all aspects"
    },
    {
        id: 3,
        src: '/process-01.jpg',
        title: "Production Of Fabric3",
        text: "We Produce the best quality of fabric covered all aspects"
    },
    {
        id: 4,
        src: '/process-01.jpg',
        title: "Production Of Fabric4",
        text: "We Produce the best quality of fabric covered all aspects"
    },
]

export default function WorkingProcess() {
  return (
    <WrapperSection>
      <div className="text-center mb-0 md:mb-[5px] lg:mb-[30px] px-[20px]">
        <SectionParagrap para="OUR WORKING PROCESS" />
        <SectionTitle title="Simple Step To Get Textile Lab" />
      </div>

      <div className="flex flex-wrap">
        {processData.map((item)=>(
            <WorkingProcessCard key={item.id} processData={item} />
        ))}
      </div>
    </WrapperSection>
  );
}
