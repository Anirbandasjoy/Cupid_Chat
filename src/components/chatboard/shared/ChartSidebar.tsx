import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
const ChartSidebar = () => {
  return (
    <div className="bg-[#1f1f22] text-gray-200 max-w-[370px] px-6 py-4 h-[calc(100vh-80px)] rounded-l-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium"> Chats (4)</h1>
        <div className="flex gap-5 items-center">
          <BsThreeDots className="text-[28px] cursor-pointer" />
          <TiEdit className="text-[28px] cursor-pointer" />
        </div>
      </div>
      {/* chat member */}
      <div className="mt-8 overflow-scroll h-[calc(100vh-200px)] scrollbar-hidden ">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex gap-3 items-center cursor-pointer hover:bg-[#47474c] px-4 py-3 rounded-lg"
            >
              <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
                An
              </h1>
              <div>
                <h1 className="text-lg font-bold">Anirban das joy</h1>
                <p className="text-sm">Typing...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartSidebar;
