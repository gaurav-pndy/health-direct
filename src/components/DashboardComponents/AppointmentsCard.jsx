import React from "react";
import { useTranslation } from "react-i18next";
import { LuAlarmClockCheck } from "react-icons/lu";
import { Link } from "react-router";
import "./AppointmentsCard.css";

const AppointmentsCard = () => {
  const { t } = useTranslation();
  const appointments = [
    {
      service: t("appointments_card.appointment1.title"),
      date: t("appointments_card.appointment1.date"),
      time: "10:00 AM",
    },
    {
      service: t("appointments_card.appointment2.title"),
      date: t("appointments_card.appointment2.date"),
      time: "10:00 AM",
    },
    {
      service: t("appointments_card.appointment3.title"),
      date: t("appointments_card.appointment3.date"),
      time: "10:00 AM",
    },
  ];

  return (
    <div className="appointment-card">
      <div className="appointment-card-gradient" />
      <div className="appointment-card-header">
        <div>
          <h3 className="appointment-title">{t("appointments_card.title")}</h3>
          <p className="appointment-subtitle">
            {t("appointments_card.subtitle")}
          </p>
        </div>
        <LuAlarmClockCheck className="appointment-icon" />
      </div>

      <div className="appointment-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <h4 className="appointment-service">{appointment.service}</h4>
            <p className="appointment-date">{appointment.date}</p>
            <p className="appointment-time">{appointment.time}</p>
          </div>
        ))}

        <Link to="/appointments">
          <button className="appointment-button">
            {t("appointments_card.button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentsCard;
