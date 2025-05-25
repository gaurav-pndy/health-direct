import React, { useState } from "react";
import { Grid, List, CheckCircle } from "lucide-react";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { LuAlarmClockCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import "./Appointments.css";

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
    <div className="appointments-wrapper">
      {/* Header */}
      <div className="appointments-content custom-scrollbar-2">
        <div className="appointments-header">
          <div className="appointments-header-top">
            <div>
              <h1 className="appointments-title">{t("appointments.title")}</h1>
              <p className="appointments-subtitle">
                {t("appointments.subtitle")}
              </p>
            </div>

            <div className="appointments-actions">
              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="view-toggle-button"
              >
                {viewMode === "grid" ? (
                  <FaThList className="toggle-icon" />
                ) : (
                  <BsFillGridFill className="toggle-icon" />
                )}
              </button>

              <div className="clock-icon">
                <LuAlarmClockCheck className="clock-icon-size" />
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Content */}
        <div className="appointments-body ">
          {viewMode === "grid" ? (
            <div className="appointments-grid">
              {appointments.map((appointment) => (
                <CardItem key={appointment.id} item={appointment} />
              ))}
            </div>
          ) : (
            <div className="appointments-list">
              {appointments.map((appointment) => (
                <ListItem key={appointment.id} item={appointment} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order New Service Button */}
      <div className="appointments-button-wrapper">
        <button className="appointments-button">
          {t("appointments.button")}
        </button>
      </div>

      {/* Spacer */}
      <div className="appointments-spacer"></div>
    </div>
  );
};

export default Appointments;
