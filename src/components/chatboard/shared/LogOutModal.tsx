import React from "react";
interface LogOutModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogOut: () => void;
}

const LogOutModal = ({
  isModalOpen,
  setIsModalOpen,
  handleLogOut,
}: LogOutModalProps) => {
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800  bg-opacity-50 flex items-center justify-center z-50">
          <div className="border border-gray-500 bg-gray-900 rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg text-gray-300 font-semibold mb-1 text-center">
              Confirm Logout
            </h2>
            <p className="text-sm text-gray-400 text-center mb-5">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  document.body.style.overflow = "auto";
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded w-full"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleLogOut();
                  setIsModalOpen(false);
                  document.body.style.overflow = "auto";
                }}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogOutModal;
