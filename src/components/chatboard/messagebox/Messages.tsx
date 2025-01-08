import React from "react";

interface MessageProps {
  sender: { _id: string; email: string };
  content: string;
  isSent: boolean;
  createdAt: string;
}

const Messages = ({ sender, content, isSent, createdAt }: MessageProps) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={`flex gap-3 items-end px-4 py-3 rounded-lg ${
        isSent ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {!isSent ? (
        <>
          <div className="flex-shrink-0">
            <h1 className="text-lg flex justify-center items-center bg-gradient-to-br from-gray-500 to-gray-700 text-white p-2 rounded-full h-10 w-10">
              {sender?.email?.charAt(0).toUpperCase()}
            </h1>
          </div>
          <div className="w-4/12 bg-white shadow-md p-3 rounded-lg relative">
            <p
              className="text-sm text-gray-800 break-words"
              style={{ wordBreak: "break-word" }}
            >
              {content}
            </p>
            <p className="absolute bottom-1 right-2 text-[10px] text-gray-500">
              {formatTime(createdAt)}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="w-4/12 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md p-3 rounded-lg relative">
            <p
              className="text-sm break-words"
              style={{ wordBreak: "break-word" }}
            >
              {content}
            </p>
            <p className="absolute bottom-1 right-2 text-[10px] text-gray-300">
              {formatTime(createdAt)}
            </p>
          </div>
          <div className="flex-shrink-0">
            <h1 className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2 rounded-full h-10 w-10 text-sm">
              {sender?.email?.charAt(0).toUpperCase()}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
