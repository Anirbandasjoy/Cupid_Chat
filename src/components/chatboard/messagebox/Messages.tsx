import React from "react";

const Messages = () => {
  return (
    <div className="">
      {/* Received Message */}
      <div className="flex gap-3 items-end cursor-pointer px-4 py-3 rounded-lg">
        <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
          jo
        </h1>
        <div className="w-4/12 bg-[#fff] p-3 rounded-lg">
          <p className="text-xs w-full text-[#1f1d1d]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia suscipit vitae alias tempore soluta quas hic.
          </p>
        </div>
      </div>

      {/* Sent Message */}
      <div className="flex gap-3 items-end cursor-pointer px-4 py-3 rounded-lg flex-row-reverse">
        <h1 className="flex justify-center items-center bg-blue-500 text-white p-2 rounded-full h-10 w-10 text-sm">
          me
        </h1>
        <div className="w-4/12 bg-blue-500 text-gray-200 p-3 rounded-lg">
          <p className="text-xs w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
