import React, { useState } from "react";
import { Grid, List, CheckCircle } from "lucide-react";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { LuAlarmClockCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next";

import ListItem from "../components/ListItem";
import CardItem from "../components/CardItem";
import "./Payments.css";

const Payments = () => {
  const [viewMode, setViewMode] = useState("grid");
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState(""); // ✅ NEW

  const payments = [
    {
      id: 1,
      doctor: t("payments.payment1.service"),
      date: t("payments.payment1.date"),
      time: t("payments.payment1.time"),
    },

    {
      id: 2,
      doctor: t("payments.payment2.service"),
      date: t("payments.payment2.date"),
      time: t("payments.payment2.time"),
    },
    {
      id: 3,
      doctor: t("payments.payment3.service"),
      date: t("payments.payment3.date"),
      time: t("payments.payment3.time"),
    },
    {
      id: 4,
      doctor: t("payments.payment4.service"),
      date: t("payments.payment4.date"),
      time: t("payments.payment4.time"),
    },
    {
      id: 5,
      doctor: t("payments.payment5.service"),
      date: t("payments.payment5.date"),
      time: t("payments.payment5.time"),
    },
    {
      id: 6,
      doctor: t("payments.payment6.service"),
      date: t("payments.payment6.date"),
      time: t("payments.payment6.time"),
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    payment.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="payments-wrapper">
      {/* Header */}
      <div className="payments-content custom-scrollbar-2">
        <div className="payments-header">
          <div className="payments-header-top">
            <div>
              <h1 className="payments-title">{t("payments.title")}</h1>
              <p className="payments-subtitle">{t("payments.subtitle")}</p>
            </div>

            <div className="payments-actions">
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
          <div className="payments-filters">
            <input
              type="text"
              placeholder={t("payments.search_placeholder")}
              className="payments-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select className="payments-dropdown">
              <option>{t("payments.filter1_placeholder")}</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>

        {/* Appointments Content */}
        <div className="payments-body">
          {filteredPayments.length === 0 ? (
            <p className="no-payments">{t("payments.no_results")}</p>
          ) : viewMode === "grid" ? (
            <div className="payments-grid">
              {filteredPayments.map((payment) => (
                <CardItem key={payment.id} item={payment} />
              ))}
            </div>
          ) : (
            <div className="payments-list">
              {filteredPayments.map((payment) => (
                <ListItem key={payment.id} item={payment} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order New Service Button */}
      <div className="payments-button-wrapper">
        <button className="payments-button">{t("payments.button")}</button>
      </div>

      {/* Spacer */}
      <div className="payments-spacer"></div>
    </div>
  );
};

export default Payments;
