import React, { useState } from "react";
import { Grid, List, CheckCircle } from "lucide-react";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { LuAlarmClockCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next";

import ListItem from "../components/ListItem";
import CardItem from "../components/CardItem";

const Appointments = () => {
  const [viewMode, setViewMode] = useState("grid");
  const { t } = useTranslation();

  const appointments = [
    {
      id: 1,
      doctor: t("appointments.appointment1.doctor"),
      date: t("appointments.appointment1.date"),
      time: t("appointments.appointment1.time"),
    },

    {
      id: 2,
      doctor: t("appointments.appointment2.doctor"),
      date: t("appointments.appointment2.date"),
      time: t("appointments.appointment2.time"),
    },
    {
      id: 3,
      doctor: t("appointments.appointment3.doctor"),
      date: t("appointments.appointment3.date"),
      time: t("appointments.appointment3.time"),
    },
    {
      id: 4,
      doctor: t("appointments.appointment4.doctor"),
      date: t("appointments.appointment4.date"),
      time: t("appointments.appointment4.time"),
    },
    {
      id: 5,
      doctor: t("appointments.appointment5.doctor"),
      date: t("appointments.appointment5.date"),
      time: t("appointments.appointment5.time"),
    },
    {
      id: 6,
      doctor: t("appointments.appointment6.doctor"),
      date: t("appointments.appointment6.date"),
      time: t("appointments.appointment6.time"),
    },
    {
      id: 7,
      doctor: t("appointments.appointment7.doctor"),
      date: t("appointments.appointment7.date"),
      time: t("appointments.appointment7.time"),
    },
  ];

  return (
    <div className="p-4 relative md:p-6 md:px-10  ">
      {/* Header */}
      <div className="bg-[#f7f7f7] h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)] overflow-y-auto custom-scrollbar-2 p-4  md:p-8 md:px-10 rounded-3xl">
        <div className=" mb-6 ">
          <div className="flex  items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#12597f] ">
                {t("appointments.title")}
              </h1>
              <p className="text-[#12597f]">{t("appointments.subtitle")}</p>
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
                <CardItem key={appointment.id} item={appointment} />
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <ListItem key={appointment.id} item={appointment} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Order New Service Button */}
      <div className="fixed bottom-8 w-[92%] md:w-[89.5%] lg:w-[92%] xl:w-[90.5%] ">
        <button className="w-full  bg-gradient-to-r from-[#1a5e83] to-[#c56aa7] text-white py-4 rounded-2xl cursor-pointer text-xl  hover:from-[#c56aa7] hover:to-[#1a5e83] transition-all duration-300 font-bold shadow-lg">
          {t("appointments.button")}
        </button>
      </div>

      {/* Spacer for fixed button */}
      <div className="h-20 "></div>
    </div>
  );
};

export default Appointments;
