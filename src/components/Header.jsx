// components/Header.tsx
import { BiSolidBellRing } from "react-icons/bi";
import { FaBell, FaLanguage, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("important");
  const bellRef = useRef(null);

  const notificationCount = 1;
  const importantCount = 1;
  const personalCount = 1;

  // Close dropdown on outside click
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
    <header className="hidden lg:flex z-20 fixed top-0 w-full items-center justify-between px-16 py-3 bg-white h-26  shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/HD.png" className="h-8" alt="Logo" />
      </div>

      {/* User Greeting */}
      <div className="bg-[#f7f7f7] w-[75%] p-2 md:p- rounded-lg  ">
        <div className="flex items-center flex-col space-y-4 md:flex-row justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/user.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#c66aa8]">
                {t("header.welcome")}
              </h1>
              <p className="text-gray-800">{t("header.subtitle")} </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <select
              value={selectedLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border  bg-[#195e83] hover:bg-[#0f4562] text-white rounded-lg px-3 font-semibold py-1.5 transition-all duration-300  cursor-pointer"
            >
              <option className="font-quicksand" value="en">
                English
              </option>
              <option className="font-quicksand" value="ru">
                Русский
              </option>
            </select>
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
                      <h4 className="font-semibold text-lg flex gap-2 items-center">
                        <BiSolidBellRing size={20} />
                        Notifications
                      </h4>
                      <button onClick={() => setIsOpen(false)}>
                        <FaTimes className="text-gray-500 hover:text-red-500 transition-colors" />
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-4 px-4 pt-3 pb-1 text-sm font-medium border-b border-gray-200">
                      <button
                        onClick={() => setActiveTab("important")}
                        className={`p-2 rounded-lg transition-colors ${
                          activeTab === "important"
                            ? "text-white bg-[#195e83] "
                            : "text-gray-500 hover:text-[#195e83]"
                        }`}
                      >
                        Important{" "}
                        <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">
                          {importantCount}
                        </span>
                      </button>
                      <button
                        onClick={() => setActiveTab("personal")}
                        className={`p-2 rounded-lg transition-colors ${
                          activeTab === "personal"
                            ? "text-white bg-[#195e83]"
                            : "text-gray-500 hover:text-[#195e83]"
                        }`}
                      >
                        Personal{" "}
                        <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">
                          {personalCount}
                        </span>
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 text-sm space-y-3">
                      {activeTab === "important" && (
                        <div className="flex items-start space-x-2">
                          <span className="text-[#195e83] font-bold">•</span>
                          <div>
                            <p>
                              <span className="font-bold">Version 2.0 😍</span>{" "}
                              is here—explore the{" "}
                              <span className="font-bold">new features</span>{" "}
                              and{" "}
                              <span className="font-bold">
                                enhancements now!
                              </span>{" "}
                              🎉
                            </p>
                            <p className="text-gray-400 text-xs mt-1">1d ago</p>
                          </div>
                        </div>
                      )}
                      {activeTab === "personal" && (
                        <div className="flex items-start space-x-2">
                          <span className="text-[#195e83] font-bold">•</span>
                          <div>
                            <p>
                              Your appointment with Dr. Smith is confirmed.
                              Don’t forget to bring your reports!
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
            <button className="p-2 bg-[#195e83] text-white rounded-full hover:bg-[#0f4562] transition-all duration-300  cursor-pointer">
              <MdOutlineLogout size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
