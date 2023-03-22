import WrapperSection from "@/layouts/wrapperSection";
import React from "react";
import ServicesLeft from "./servicesLeft";
import ServiceRight from "./serviceRight";

const leftData = {
  selectionpara: "Oure Services",
  title: "ultimate Quality Textiles",
  para: "We are your reliable and experienced textile partner around the world.We are your reliable and experienced textile partner around the world.We are your reliable and experienced textile partner around the world.",
  url: "/serviceVideoBg.jpg",
};

const rightData = [
  {
    id: 1,
    title: "Fablio Overview",
    text: "We Bringing a revolutionary change in the Textile industry through products!",
  },
  {
    id: 2,
    title: "Fablio Overview2",
    text: "We Bringing a revolutionary change in the Textile industry through products!",
  },
  {
    id: 2,
    title: "Fablio Overview3",
    text: "We Bringing a revolutionary change in the Textile industry through products!",
  },
  {
    id: 3,
    title: "Fablio Overview4",
    text: "We Bringing a revolutionary change in the Textile industry through products!",
  },
];

export default function Services() {
  return (
    <WrapperSection>
      <div className="flex flex-wrap items-center md:px-[20px]">
        <ServicesLeft leftData={leftData} />

        <div className="md:w-full lg:w-7/12 flex flex-wrap px-[-20px]">
          {rightData.map((item)=>(
            <ServiceRight rightData={item} />
          ))}
        </div>
      </div>
    </WrapperSection>
  );
}
