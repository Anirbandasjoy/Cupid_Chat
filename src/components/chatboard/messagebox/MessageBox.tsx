import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import {
  AiOutlinePlus,
  AiOutlinePaperClip,
  AiOutlineSend,
  AiOutlineLike,
} from "react-icons/ai";
const MessageBox = () => {
  return (
    <div className="  border-l border-gray-700">
      <div className="flex flex-col justify-between h-[calc(100vh-80px)] ">
        <div className="flex px-6 py-4 justify-between items-center border-b border-gray-700 ">
          <div className="flex gap-3 items-center cursor-pointer  rounded-lg">
            <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
              An
            </h1>
            <div>
              <h1 className="text-lg font-bold">Anirban das joy</h1>
              <p className="text-sm">Active 2 mins ago</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <IoCallOutline className="text-[25px] cursor-pointer text-gray-400" />
            <MdVideoCall className="text-[25px] cursor-pointer text-gray-400" />
            <IoMdInformationCircleOutline className="text-[25px] cursor-pointer text-gray-400" />
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="flex items-center px-7 py-4 bg-black text-white rounded-full shadow-md space-x-3">
            {/* Plus icon */}
            <button className="text-gray-400 hover:text-white">
              <AiOutlinePlus size={20} />
            </button>

            {/* Attachments icon */}
            <button className="text-gray-400 hover:text-white">
              <AiOutlinePaperClip size={20} />
            </button>

            {/* Input box */}
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
            />

            {/* Message-related icon */}
            <button className="text-green-400 hover:text-green-500">
              <AiOutlineSend size={20} />
            </button>

            {/* Like icon */}
            <button className="text-gray-400 hover:text-white">
              <AiOutlineLike size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
