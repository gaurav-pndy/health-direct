import React from "react";

const CardItem = ({ item }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl  hover:shadow-md  transition-all duration-300 text-lg">
    <h3 className=" font-bold text-[#12597f] mb-3">
      {item.doctor ? item.doctor : item.service}
    </h3>
    <div className="border-t border-gray-500 border-dashed pt-3">
      <p className="text-[#c66aa8] font-bold  ">{item.date}</p>
      <p className="text-[#c66aa8] font-bold ">{item.time}</p>
    </div>
  </div>
);

export default CardItem;
