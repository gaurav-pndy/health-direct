import React, { useState } from "react";
import { Grid, List, CheckCircle } from "lucide-react";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { LuAlarmClockCheck } from "react-icons/lu";

const Appointments = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Mindubаev Eduard",
      date: "April 10, 2025",
      time: "10:00 AM",
    },

    {
      id: 2,
      doctor: "Dr. Avtandil Babunashvili",
      date: "March 21, 2025",
      time: "10:00 AM",
    },
    {
      id: 3,
      doctor: "Dr. Avtandil Babunashvili",
      date: "June 12, 2025",
      time: "10:00 AM",
    },
    {
      id: 4,
      doctor: "Dr. Bahodur Kamolov",
      date: "June 12, 2025",
      time: "10:00 AM",
    },
    {
      id: 5,
      doctor: "Dr. Vinod Raina",
      date: "April 10, 2025",
      time: "10:00 AM",
    },
    {
      id: 6,
      doctor: "Dr. Ashok Baveja",
      date: "March 21, 2025",
      time: "10:00 AM",
    },
    {
      id: 7,
      doctor: "Dr. Lokesh Kumar",
      date: "March 21, 2025",
      time: "10:00 AM",
    },
  ];

  const AppointmentCard = ({ appointment }) => (
    <div className="bg-white p-4 md:p-6 rounded-xl  hover:shadow-md  transition-all duration-300 text-lg">
      <h3 className=" font-bold text-[#12597f] mb-3">{appointment.doctor}</h3>
      <div className="border-t border-gray-500 border-dashed pt-3">
        <p className="text-[#c66aa8] font-bold  ">{appointment.date}</p>
        <p className="text-[#c66aa8] font-bold ">{appointment.time}</p>
      </div>
    </div>
  );

  const AppointmentListItem = ({ appointment }) => (
    <div className="bg-white p-4 md:p-6 rounded-xl  hover:shadow-md  transition-all duration-300 md:text-lg">
      <div className="flex items-center justify-between">
        <h3 className=" font-bold text-[#12597f]">{appointment.doctor}</h3>
        <div className="text-right">
          <p className="text-[#c66aa8] font-bold ">
            {appointment.date} <span className="hidden md:inline">|</span>{" "}
            <br className="md:hidden" />
            {appointment.time}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 relative md:p-6 md:px-10  ">
      {/* Header */}
      <div className="bg-[#f7f7f7] h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)] overflow-y-auto custom-scrollbar-2 p-4  md:p-8 md:px-10 rounded-3xl">
        <div className=" mb-6 ">
          <div className="flex  items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#12597f] ">
                Your Appointments
              </h1>
              <p className="text-[#12597f]">See all your appointments here</p>
            </div>

            <div className="flex  items-center space-x-3 md:space-x-6">
              {/* View Toggle Single Button */}
              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="p-3 rounded-full bg-[#c66aa8] text-white hover:bg-[#a15789] transition-all duration-300 cursor-pointer"
              >
                {viewMode === "grid" ? (
                  <FaThList className="text-xl md:text-2xl" />
                ) : (
                  <BsFillGridFill className="text-xl md:text-2xl" />
                )}
              </button>

              {/* Check Circle Icon */}
              <div className=" text-[#195e83] rounded-full">
                <LuAlarmClockCheck className="text-5xl md:text-6xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Content */}
        <div className="my-4">
          {viewMode === "grid" ? (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <AppointmentListItem
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Order New Service Button */}
      <div className="fixed bottom-8 w-[90.5%] ">
        <button className="w-full  bg-gradient-to-r from-[#1a5e83] to-[#c56aa7] text-white py-4 rounded-2xl cursor-pointer text-xl  hover:from-[#c56aa7] hover:to-[#1a5e83] transition-all duration-300 font-bold shadow-lg">
          Order New service
        </button>
      </div>

      {/* Spacer for fixed button */}
      <div className="h-20 "></div>
    </div>
  );
};

export default Appointments;
