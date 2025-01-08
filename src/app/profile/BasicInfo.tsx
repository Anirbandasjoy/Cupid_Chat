"use client";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FcOk } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";

export default function BasicInfo({ getUserName }: { getUserName: any }) {
  const { data } = useHandleGetCurrentUserQuery();
  const userInfo = data?.payload;
  useEffect(() => {
    getUserName(userInfo?.name);
  }, [userInfo]);
  return (
    <div className="flex items-center justify-center w-full  border border-gray-700 rounded-lg shadow-lg">
      <div className=" w-11/12 py-10 ">
        <h1 className="text-xl font-semibold mb-2 text-gray-300">Your Info</h1>
        <p className="text-sm text-gray-400 mb-6">
          Some info may be visible to other people using AuthNexus services.{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Learn more
          </Link>
        </p>

        {/* Profile Picture */}
        <div className="flex items-center mb-6 hover:bg-gray-800 cursor-pointer py-4 px-4 rounded-sm  ">
          <p className="w-16 h-16 text-2xl flex justify-center items-center rounded-full text-white overflow-hidden border border-gray-300">
            {userInfo?.name?.charAt(0).toUpperCase()}
          </p>
          <div className="ml-4">
            <p className="text-gray-300">Profile picture</p>
            <p className="text-gray-400 text-sm">
              A profile picture helps personalize your account
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-4">
          {/* Name */}
          <div className="flex justify-between items-center hover:bg-gray-800 cursor-pointer py-4 px-4 rounded-sm border border-gray-800">
            <p className="text-gray-300">Name</p>
            <div className="flex items-center gap-3">
              <p className="text-gray-400">{userInfo?.name}</p>
              <IoIosArrowForward className="text-xl text-gray-300" />
            </div>
          </div>
          {/* Birthday */}
          <div className="flex justify-between items-center hover:bg-gray-800 cursor-pointer py-4 px-4 rounded-sm border border-gray-800">
            <p className="text-gray-300">Email</p>
            <div className="flex items-center gap-3">
              <p className="text-gray-400">{userInfo?.email}</p>
              <IoIosArrowForward className="text-xl text-gray-300" />
            </div>
          </div>
          {/* Gender */}
          <div className="flex justify-between items-center hover:bg-gray-800 cursor-pointer py-4 px-4 rounded-sm border border-gray-800">
            <p className="text-gray-300">Password</p>
            <div className="flex items-center gap-3">
              <p className="text-gray-400">12******</p>
              <IoIosArrowForward className="text-xl text-gray-300" />
            </div>
          </div>
          {/* 2fa  */}
          <div className="flex justify-between items-center hover:bg-gray-800 cursor-pointer py-4 px-4 rounded-sm border border-gray-800">
            <p className="text-gray-300">Two Factor Authentication</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <FcOk className="text-xl" />
                <p className="text-gray-400">On</p>
              </div>
              <IoIosArrowForward className="text-xl text-gray-300" />
            </div>
          </div>
        </div>
        <Link href="/">
          <button className="py-1 px-6 bg-red-700 rounded-sm mt-10">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
