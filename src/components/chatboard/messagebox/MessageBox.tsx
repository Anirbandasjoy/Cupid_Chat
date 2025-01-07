"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import {
  AiOutlinePlus,
  AiOutlinePaperClip,
  AiOutlineSend,
} from "react-icons/ai";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import {
  useHandleCreateChatMutation,
  useHandleGetChatQuery,
  useHandleSendMessageMutation,
} from "@/redux/features/chat/chatApi";
import toast from "react-hot-toast";
import { setChatId } from "@/redux/features/chat/chatSlice";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";

import { useSocket } from "../socket/SocketProvider";

const MessageBox = () => {
  const socket = useSocket();
  const dispatch = useDispatch<AppDispatch>();
  const selectedUser = useSelector(
    (state: RootState) => state.user.selectedUser
  );
  const [setChat] = useHandleCreateChatMutation();
  const [setSendMessage] = useHandleSendMessageMutation();
  const { data, isLoading, refetch } = useHandleGetChatQuery({
    chatId: useSelector((state: RootState) => state.chat.chatId) || "",
  });
  const messages = data?.payload?.messages || [];
  const [message, setMessage] = useState<string>("");
  const chatId = useSelector((state: RootState) => state.chat.chatId);
  const { data: currentUser } = useHandleGetCurrentUserQuery();
  const loggedInEmail = currentUser?.payload?.email;
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const createChat = async () => {
      if (selectedUser) {
        try {
          const response = await setChat({
            receiverId: selectedUser._id,
          }).unwrap();
          dispatch(setChatId(response?.payload?._id));
          toast.success("New Chat Created");
        } catch (error: any) {
          dispatch(setChatId(error?.data?.payload?.chatId));
          toast.error(error?.data?.payload?.message || "An error occurred");
        }
      }
    };

    createChat();
  }, [selectedUser, setChat, dispatch]);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty! Please type something.");
      return;
    }
    if (chatId) {
      try {
        await setSendMessage({
          content: message,
          chatId,
        }).unwrap();
        socket.emit("send_message", {
          content: message,
          chatId,
          sender: currentUser?.payload,
        });
        refetch();
        setMessage("");
      } catch (error: any) {
        toast.error(error?.data?.payload?.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    socket.on("receive_message", () => {
      refetch();
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket, refetch]);

  if (!selectedUser) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)] border-l border-gray-700">
        <p className="text-gray-500">Select a user to start chatting</p>
      </div>
    );
  }

  return (
    <div className="border-l border-gray-700">
      <div className="flex flex-col justify-between h-[calc(100vh-80px)]">
        <div>
          <div className="flex px-6 py-4 justify-between items-center border-b border-gray-700">
            <div className="flex gap-3 items-center cursor-pointer rounded-lg">
              <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
                {selectedUser?.name?.charAt(0).toUpperCase()}
              </h1>
              <div>
                <h1 className="text-lg font-bold">
                  {selectedUser?.name || "empty"}
                </h1>
                <p className="text-sm">Active 2 mins ago</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <IoCallOutline className="text-[25px] cursor-pointer text-gray-400" />
              <MdVideoCall className="text-[25px] cursor-pointer text-gray-400" />
              <IoMdInformationCircleOutline className="text-[25px] cursor-pointer text-gray-400" />
            </div>
          </div>
          <div className="px-8 pt-2 h-[calc(100vh-240px)] flex flex-col overflow-y-auto">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              messages?.map((msg: any) => (
                <Messages
                  key={msg?._id}
                  sender={msg?.sender}
                  content={msg?.content}
                  isSent={msg?.sender.email === loggedInEmail}
                />
              ))
            )}
            {/* Scroll to bottom */}
            <div ref={messageEndRef} />
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="flex items-center px-7 py-4 bg-black text-white rounded-full shadow-md space-x-3">
            <button className="text-gray-400 hover:text-white">
              <AiOutlinePlus size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <AiOutlinePaperClip size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="text-green-400 hover:text-green-500"
            >
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
