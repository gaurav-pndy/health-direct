import React from "react";

const AppointmentCard = ({ appointment }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl  hover:shadow-md  transition-all duration-300 text-lg">
    <h3 className=" font-bold text-[#12597f] mb-3">{appointment.doctor}</h3>
    <div className="border-t border-gray-500 border-dashed pt-3">
      <p className="text-[#c66aa8] font-bold  ">{appointment.date}</p>
      <p className="text-[#c66aa8] font-bold ">{appointment.time}</p>
    </div>
  </div>
);

export default AppointmentCard;
