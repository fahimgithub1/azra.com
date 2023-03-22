import React from "react";

export default function WorkingProcessCard(props) {
  return (
    <div className="w-6/12 md:w-6/12 lg:w-3/12 text-center p-3 mb-[20px]">
      <div className="shadow-lg lg:shadow-2xl p-4 rounded-xl">
        <div className="text-center m-auto w-[100px] relative mb-[20px]">
          <img src={props.processData.src} className="rounded-lg" />
          <span className="absolute top-[-15px] left-[-15px] bg-red-600 h-[35px] w-[35px] text-white pt-[6px] rounded-full font-bold">{props.processData.id}</span>
        </div>
        <h4 className="font-semibold text-[20px] text-gray-800 mb-[20px]">
          {props.processData.title}
        </h4>
        <p className="text-[16px]">{props.processData.text}</p>
      </div>
    </div>
  );
}
