"use client";
import React, { useState } from "react";
import ProfileDropdown from "./Dropdown";
import {
  useHandleFindAllUsersQuery,
  useHandleGetCurrentUserQuery,
} from "@/redux/features/user/userApi";
import { IUser } from "@/redux/features/user/interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/app/store";
import { setSelectedUser } from "@/redux/features/user/selectUserSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCaretRight } from "react-icons/ai";

const ChartSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data } = useHandleFindAllUsersQuery({ search: searchTerm });
  const { data: currentUser } = useHandleGetCurrentUserQuery();
  const loggedInUserEmail = currentUser?.payload?.email;
  const users = data?.payload?.users || [];

  const filteredUsers = users.filter((user: IUser) =>
    user?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#1f1f22] text-gray-200 max-w-[370px] md:max-w-[300px] sm:max-w-[260px] px-6 py-4 h-[calc(100vh-80px)] rounded-l-lg overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium">Chats ({users?.length - 1})</h1>
        <div className="flex gap-4 items-center">
          <ProfileDropdown />
          {/* <AiFillCaretRight className="text-[28px] cursor-pointer" /> */}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#29292e] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-2 overflow-y-scroll h-[calc(100vh-200px)] scrollbar-hidden">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: IUser) => (
            <div key={user?._id}>
              {user?.email !== loggedInUserEmail && (
                <div
                  onClick={() => dispatch(setSelectedUser(user))}
                  className="flex gap-3 items-center cursor-pointer hover:bg-[#47474c] px-4 py-3 rounded-lg"
                >
                  <h1 className="text-lg flex justify-center items-center bg-slate-500 text-white p-2 rounded-full h-10 w-10">
                    {user?.name.slice(0, 2).toUpperCase()}
                  </h1>
                  <div>
                    <h1 className="text-lg font-bold">{user?.name}</h1>
                    {/* <p className="text-sm">Typing...</p> */}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-sm italic">No users found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartSidebar;
