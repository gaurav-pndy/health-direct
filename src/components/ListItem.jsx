import React from "react";

const ListItem = ({ item }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl  hover:shadow-md  transition-all duration-300 md:text-lg">
    <div className="flex items-center justify-between">
      <h3 className=" font-bold text-[#12597f]">
        {item.doctor ? item.doctor : item.service}
      </h3>
      <div className="text-right">
        <p className="text-[#c66aa8] font-bold ">
          {item.date} <span className="hidden md:inline">|</span>{" "}
          <br className="md:hidden" />
          {item.time}
        </p>
      </div>
    </div>
  </div>
);

export default ListItem;
