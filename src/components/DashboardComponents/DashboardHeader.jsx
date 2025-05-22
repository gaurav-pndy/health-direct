import React from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <div className="bg-[#f7f7f7] p-2 md:p-4 rounded-lg  mb-4">
      <div className="flex items-center flex-col space-y-4 md:flex-row justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/user.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#c66aa8]">
              Welcome Mr/Mrs Place Holder
            </h1>
            <p className="text-gray-800">How're you feeling today?</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 bg-[#195e83] text-white rounded-full hover:bg-blue-700 transition-colors">
            <IoLanguage size={20} />
          </button>
          <button className="p-2 bg-[#195e83] text-white rounded-full hover:bg-blue-700 transition-colors">
            <BiSolidBellRing size={20} />
          </button>
          <button className="p-2 bg-[#195e83] text-white rounded-full hover:bg-blue-700 transition-colors">
            <MdOutlineLogout size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
