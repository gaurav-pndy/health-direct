import React, { useEffect, useRef, useState } from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

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
    <div className="relative" ref={bellRef}>
      {/* Bell Button */}
      <button
        className="p-2 bg-[#195e83] text-white rounded-full hover:bg-[#0f4562] transition-all duration-300 cursor-pointer relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BiSolidBellRing size={20} />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {notificationCount}
          </span>
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
            className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h4 className="font-semibold text-lg text-[#195e83] flex gap-2 items-center">
                <BiSolidBellRing size={20} />
                {t("notif_box.title")}
              </h4>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="text-gray-500 hover:text-red-500 transition-colors" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex  space-x-4 px-4 pt-3 pb-1 text-sm font-medium border-b border-gray-200">
              <button
                onClick={() => setActiveTab("important")}
                className={`p-2 w-1/2 flex items-center gap-2 rounded-lg transition-colors ${
                  activeTab === "important"
                    ? "text-white bg-[#195e83] "
                    : "text-gray-500 hover:text-[#195e83]"
                }`}
              >
                {" "}
                <AiOutlineExclamationCircle />
                {t("notif_box.important")}
                <span className="ml-1 h-4 w-4 shrink-0 bg-red-500 text-white text-xs rounded-full ">
                  {importantCount}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`p-2 w-1/2 flex items-center gap-2 rounded-lg transition-colors ${
                  activeTab === "personal"
                    ? "text-white bg-[#195e83]"
                    : "text-gray-500 hover:text-[#195e83]"
                }`}
              >
                <FaRegUser />
                {t("notif_box.personal")}
                <span className="ml-1 h-4 w-4 shrink-0 bg-red-500 text-white text-xs rounded-full ">
                  {personalCount}
                </span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 text-sm space-y-3">
              {activeTab === "important" && (
                <div className="flex items-start space-x-2">
                  <AiOutlineExclamationCircle className="text-3xl" />
                  <div>
                    <p>
                      <span className="font-bold">Version 2.0 😍</span> is
                      here—explore the{" "}
                      <span className="font-bold">new features</span> and{" "}
                      <span className="font-bold">enhancements now!</span> 🎉
                    </p>
                    <p className="text-gray-400 text-xs mt-1">1d ago</p>
                  </div>
                </div>
              )}
              {activeTab === "personal" && (
                <div className="flex items-start space-x-2">
                  <FaRegUser className="text-2xl" />
                  <div>
                    <p>
                      Your appointment with Dr. Smith is confirmed. Don’t forget
                      to bring your reports!
                    </p>
                    <p className="text-gray-400 text-xs mt-1">2d ago</p>
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
