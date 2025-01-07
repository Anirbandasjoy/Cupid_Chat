import React from "react";

interface MessageProps {
  sender: { _id: string; email: string };
  content: string;
  isSent: boolean;
}

const Messages = ({ sender, content, isSent }: MessageProps) => {
  return (
    <div
      className={`flex gap-3 items-end cursor-pointer px-4 py-3 rounded-lg ${
        isSent ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Display Received Message (Bam Dike) */}
      {!isSent ? (
        <>
          <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
            {sender?.email?.charAt(0).toUpperCase()}
          </h1>
          <div className="w-4/12 bg-[#fff] p-3 rounded-lg">
            <p className="text-xs w-full text-[#1f1d1d]">{content}</p>
          </div>
        </>
      ) : (
        // Display Sent Message (Dan Dike)
        <>
          <div className="w-4/12 bg-blue-500 text-gray-200 p-3 rounded-lg">
            <p className="text-xs w-full">{content}</p>
          </div>
          <h1 className="flex justify-center items-center bg-blue-500 text-white p-2 rounded-full h-10 w-10 text-sm">
            {sender?.email?.charAt(0).toUpperCase()}
          </h1>
        </>
      )}
    </div>
  );
};

export default Messages;
