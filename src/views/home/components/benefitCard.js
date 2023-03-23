import React from "react";

export default function BenefitCard(props) {
  return (
    <div className="w-full md:w-4/12 lg:w-4/12 p-3 mb-[20px] pl-[15px]">
      <div className="bg-gray-100 p-4 rounded-xl relative">
        <div>
          <h4 className="font-semibold text-[22px] text-gray-800 mb-[20px]">
            {props.benefit.title}
          </h4>
          <p className="text-[16px]">{props.benefit.text}</p>
        </div>

        <span className="absolute top-[-12px] left-[-12px] bg-red-600 h-[35px] w-[35px] text-white pt-[6px] rounded-full font-bold text-center">
          {props.benefit.id}
        </span>
      </div>
    </div>
  );
}
