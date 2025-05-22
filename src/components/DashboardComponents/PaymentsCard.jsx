import React from "react";
import { Link } from "react-router";

const PaymentsCard = () => {
  return (
    <div className="bg-[#49638e] h-72 lg:col-span-2  p-6 pb-0 overflow-y-hidden rounded-3xl text-white relative">
      <div className="absolute h-24 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="mb-4">
        <h3 className="text-xl font-bold ">Your Payments</h3>
        <p className="text-blue-100 text-sm">See your past payments</p>
      </div>

      <div className="space-y-3">
        <div className="bg-[#f0f0f5] p-4 rounded-xl">
          <h4 className="font-bold text-[#0c557c] mb-2">Pathologica Service</h4>

          <p className="text-[#c66aa8]  font-bold border-t border-dashed border-[#0c557c] pt-2 ">
            Invoice generated
          </p>
          <p className="text-[#c66aa8] font-bold cursor-pointer hover:underline">
            Click here to preview
          </p>
        </div>
        <div className="bg-[#f0f0f5] p-4 rounded-xl">
          <h4 className="font-bold text-[#0c557c] mb-2">Pathologica Service</h4>

          <p className="text-[#c66aa8]  font-bold border-t border-dashed border-[#0c557c] pt-2 ">
            Invoice generated
          </p>
          <p className="text-[#c66aa8] font-bold cursor-pointer hover:underline">
            Click here to preview
          </p>
        </div>

        <Link to="/payments">
          <button className="bg-white absolute bottom-6 left-1/2 translate-x-[-50%] text-[#0c557c] px-4 cursor-pointer py-1 rounded-xl text-[0.7rem] font-bold hover:bg-gray-200 transition-all duration-300">
            See Previous Payments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentsCard;
