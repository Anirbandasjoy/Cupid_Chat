"use client";
import Loading from "@/components/auth/loading/Loading";
import { useHandleLogOutMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import LogOutModal from "./LogOutModal";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setLogout, { isLoading }] = useHandleLogOutMutation();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await setLogout().unwrap();
      toast.success("Logged Out Successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error?.data?.payload?.message);
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown} className="cursor-pointer">
        <BsThreeDots className="text-[28px]" />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {/* Profile Option */}
            <button
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full"
              onClick={() => console.log("Profile Clicked")}
            >
              <FaUserCircle className="mr-3 text-gray-600" />
              Profile
            </button>

            {/* Logout Option */}
            <button
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full"
              onClick={() => {
                setIsModalOpen(true);
                document.body.style.overflow = "hidden";
              }}
            >
              <FaSignOutAlt className="mr-3 text-gray-600" />
              Logout
            </button>
          </div>
        </div>
      )}
      <LogOutModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleLogOut={handleLogOut}
      />
    </div>
  );
};

export default ProfileDropdown;
