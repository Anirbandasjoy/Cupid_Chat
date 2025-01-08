"use client";
import Image from "next/image";
import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import PrivateRoute from "@/components/routes/PribetRouter";

const Profile = () => {
  const [name, setName] = useState<string>("");
  const getUserName = (value: string) => {
    setName(value);
  };
  return (
    <PrivateRoute>
      <div className="flex justify-center px-4 sm:px-0 flex-col mt-10 space-y-10 max-w-4xl mx-auto mb-20">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-36 h-36 flex justify-center items-center text-5xl border-4 border-gray-700 rounded-full overflow-hidden cursor-pointer">
            {name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl text-gray-300 font-medium">
            Wellcome, {name}
          </h1>
        </div>
        <BasicInfo getUserName={getUserName} />
      </div>
    </PrivateRoute>
  );
};

export default Profile;
