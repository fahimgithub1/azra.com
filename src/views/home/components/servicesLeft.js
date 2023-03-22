import SectionParagrap from "@/lib/sectionParagrap";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { FaVideo } from "react-icons/fa";

export default function ServicesLeft(props) {
  return (
    <div className="md:w-full lg:w-5/12 md:px-[20px] px-[20px] md:p-0">
      <SectionParagrap para={props.leftData.selectionpara} />
      <SectionTitle title={props.leftData.title} />

      <p className="text-[16px] mb-[20px]">{props.leftData.para}</p>

      <div className="lg:w-[80%] relative mb-[20px]">
        <img src={props.leftData.url} className="rounded-lg" />
        <div className="absolute top-0 w-full h-full flex justifuy-center items-center">
          <div className="h-[54px] w-[54px] rounded-full m-auto bg-red-600 pt-[9px] cursor-pointer">
            <FaVideo className="text-[34px] text-white m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
