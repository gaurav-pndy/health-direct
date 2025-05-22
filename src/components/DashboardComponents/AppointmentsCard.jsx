import React from "react";
import { LuAlarmClockCheck } from "react-icons/lu";
import { Link } from "react-router";

const AppointmentsCard = () => {
  const appointments = [
    {
      service: "Pathologica Service",
      date: "April 10, 2025",
      time: "10:00 AM",
    },
    {
      service: "Oncosurgery",
      date: "April 21, 2025",
      time: "10:00 AM",
    },
    {
      service: "Oncosurgery",
      date: "April 21, 2025",
      time: "10:00 AM",
    },
  ];

  return (
    <div className="bg-gradient-to-bl h-full lg:col-span-2  from-[#c669a5] to-[#ff7976] p-6 rounded-3xl text-white relative overflow-hidden">
      <div className="absolute h-36 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="flex  justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold ">Your Appointments</h3>
          <p className="text-pink-100 text-sm">
            See all your appointments here
          </p>
        </div>
        <LuAlarmClockCheck className="text-white text-[4.3rem]" />
      </div>

      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <div key={index} className="bg-[#f0f0f5] p-4 rounded-xl">
            <h4 className="font-bold text-[#0c557c] mb-2">
              {appointment.service}
            </h4>

            <p className="text-[#c66aa8]  font-bold border-t border-dashed border-[#0c557c] pt-2">
              {appointment.date}
            </p>
            <p className="text-[#c66aa8] font-bold">{appointment.time}</p>
          </div>
        ))}

        <Link to="/appointments">
          <button className="bg-white absolute bottom-6 left-1/2 translate-x-[-50%] text-[#0c557c] px-4 cursor-pointer py-1 rounded-xl text-[0.7rem] font-bold hover:bg-gray-200 transition-all w-[60%] duration-300">
            See Previous Appointments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentsCard;
