import React from "react";
import { FaSchool } from "react-icons/fa";

export default function ServiceRight(props) {
  return (
    <div className="w-6/12 md:w-6/12 p-3 mb-[20px]">
      <div className="shadow-lg p-4 rounded-xl">
        <FaSchool className="text-[55px] text-red-600 mb-[20px]" />
        <h4 className="font-semibold text-[20px] text-gray-800 mb-[20px]">
          {props.rightData.title}
        </h4>
        <p className="text-[16px]">
          {props.rightData.text}
        </p>
      </div>
    </div>
  );
}
