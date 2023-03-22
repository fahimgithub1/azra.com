import React from "react";

export default function SectionTitle(props) {
  return (
    <h2 className="text-[28px] font-semibold text-gray-800 capitalize mb-[20px]">
      {props.title}
    </h2>
  );
}
