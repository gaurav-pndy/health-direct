import React, { useEffect, useRef, useState } from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./NotificationBox.css";

const NotificationBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("important");
  const bellRef = useRef(null);

  const notificationCount = 1;
  const importantCount = 1;
  const personalCount = 1;

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="notification-wrapper" ref={bellRef}>
      {/* Bell Button */}
      <button
        className="notification-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BiSolidBellRing size={20} />
        {notificationCount > 0 && (
          <span className="notification-badge">{notificationCount}</span>
        )}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="notification-dropdown"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="notification-dropdown"
          >
            {/* Header */}
            <div className="dropdown-header">
              <h4 className="dropdown-title">
                <BiSolidBellRing size={20} />
                {t("notif_box.title")}
              </h4>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="dropdown-close-icon" />
              </button>
            </div>

            {/* Tabs */}
            <div className="dropdown-tabs">
              <button
                onClick={() => setActiveTab("important")}
                className={`tab-button ${
                  activeTab === "important" ? "active" : ""
                }`}
              >
                <AiOutlineExclamationCircle />
                {t("notif_box.important")}
                <span className="tab-badge">{importantCount}</span>
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`tab-button ${
                  activeTab === "personal" ? "active" : ""
                }`}
              >
                <FaRegUser />
                {t("notif_box.personal")}
                <span className="tab-badge">{personalCount}</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="dropdown-content">
              {activeTab === "important" && (
                <div className="dropdown-item">
                  <AiOutlineExclamationCircle className="dropdown-icon" />
                  <div>
                    <p>
                      <span className="bold">Version 2.0 😍</span> is
                      here—explore the{" "}
                      <span className="bold">new features</span> and{" "}
                      <span className="bold">enhancements now!</span> 🎉
                    </p>
                    <p className="item-time">1d ago</p>
                  </div>
                </div>
              )}
              {activeTab === "personal" && (
                <div className="dropdown-item">
                  <FaRegUser className="dropdown-icon" />
                  <div>
                    <p>
                      Your appointment with Dr. Smith is confirmed. Don’t forget
                      to bring your reports!
                    </p>
                    <p className="item-time">2d ago</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBox;
