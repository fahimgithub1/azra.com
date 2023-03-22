import React from "react";

export default function SectionParagrap(props) {
  return (
    <p className="mb-[20px] text-lg font-semibold text-red-600 inline-block border-b-4 border-red-400 capitalize">
      {props.para}
    </p>
  );
}
