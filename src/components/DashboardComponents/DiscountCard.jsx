import React from "react";

const DiscountCard = () => {
  return (
    <div className="bg-[#d7e5f5]  lg:col-span-3   p-6 rounded-3xl">
      <div className="text-right flex flex-col justify-between  h-full">
        <h3 className="text-4xl leading-8 font-bold text-[#195e83] mb-4">
          Avail
          <br />
          20% Discount
          <br />
          on your first
          <br />
          Visit
        </h3>
        <div className="flex  justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1d5e84] to-[#c16aa7] text-white px-6 py-1.5 text-xl  rounded-lg font-bold hover:from-[#c16aa7] hover:to-[#1d5e84] transition-all duration-300 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
