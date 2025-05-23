import React, { useState } from "react";
import {
  MdDashboard,
  MdPayments,
  MdMail,
  MdOutlineLogout,
} from "react-icons/md";
import {
  FaCalendarPlus,
  FaUserCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaTelegramPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidBellRing } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import NotificationBox from "./NotificationBox";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  const navigationItems = [
    {
      icon: MdDashboard,
      label: t("side_navbar.dashboard"),
      color: "text-blue-600",
      src: "/",
    },
    {
      icon: FaCalendarPlus,
      label: t("side_navbar.my_appointments"),
      color: "text-purple-600",
      src: "/appointments",
    },
    {
      icon: MdPayments,
      label: t("side_navbar.my_payments"),
      color: "text-blue-600",
      src: "/payments",
    },
    {
      icon: FaUserCircle,
      label: t("side_navbar.profile"),
      color: "text-pink-500",
      src: "/profile",
    },
  ];

  const socialLinks = [
    {
      icon: FaPhoneAlt,
      bgColor: "bg-green-500",
      href: "tel:+1234567890",
    },
    {
      icon: MdMail,
      bgColor: "bg-[#c66aa8]",
      href: "mailto:contact@healthdirect.com",
    },
    {
      icon: FaWhatsapp,
      bgColor: "bg-green-400",
      href: "https://whatsapp.com",
    },
    {
      icon: PiTelegramLogoDuotone,
      bgColor: "bg-[#007bb5]",
      href: "https://telegram.org",
    },
  ];

  const location = useLocation();
  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="xl:hidden fixed flex items-center justify-between  top-0 left-0 z-20 bg-white border border-gray-200 rounded-md shadow w-full p-3 md:p-4">
        <div className="flex gap-2 items-center">
          <button onClick={() => setIsOpen(true)} className="p-2 ">
            <FaBars className="text-3xl" />
          </button>
          <img src="/HD.png" className="h-6" alt="Logo" />
        </div>
        <div className="flex gap-2 items-center">
          <NotificationBox />
          <button className="p-2 bg-[#195e83] text-white rounded-full hover:bg-[#0f4562] transition-all duration-300  cursor-pointer">
            <MdOutlineLogout size={20} />
          </button>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar (responsive handling) */}
      <div
        className={`
    fixed z-20 top-0 lg:top-26 left-0 h-screen lg:h-[calc(100vh-6.5rem)]
    bg-[#f7f7f7] border-r border-gray-200
    flex flex-col flex-shrink-0
    transition-all duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    xl:translate-x-0 shadow-sm 
    group w-screen xl:hover:w-80 xl:w-16 
  `}
      >
        {/* Close button only on mobile */}
        <div className="xl:hidden flex justify-end p-4">
          <button className="p-2 " onClick={() => setIsOpen(false)}>
            <FaTimes className="text-3xl" />
          </button>
        </div>

        {/* Header */}

        {/* Navigation */}
        <nav className="flex-1  overflow-x-hidden py-2 overflow-y-auto">
          <div className=" px-4 pr-6 xl:px-2">
            <select
              value={selectedLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border xl:hidden  bg-[#195e83] hover:bg-[#0f4562] text-white rounded-lg px-3 float-right font-semibold py-1.5 transition-all duration-300 text-xl cursor-pointer mb-4"
            >
              <option className="font-quicksand" value="en">
                English
              </option>
              <option className="font-quicksand" value="ru">
                Русский
              </option>
            </select>
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.src}
                  onClick={() => setIsOpen(false)}
                  className="mb-5"
                >
                  <div>
                    <button
                      className={`w-full flex items-center  px-3  mb-3 py-3 ${
                        location.pathname === item.src && "bg-[#ebebec]"
                      }  text-left hover:bg-[#ebebec] cursor-pointer rounded-lg transition-colors duration-300 group`}
                    >
                      <div className="flex-shrink-0">
                        <IconComponent
                          className={`text-[#195e83] group-hover:scale-110 text-2xl transition-transform duration-200`}
                        />
                      </div>
                      <span
                        className={`text-xl xl:text-base whitespace-nowrap font-medium transition-all duration-200
    group-hover:inline lg:hidden ml-4
    ${
      location.pathname === item.src
        ? "text-[#195e83] font-bold"
        : "text-gray-700"
    }
  `}
                      >
                        {item.label}
                      </span>
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Social Links */}
        <div className="p-6 lg:-translate-x-36 group-hover:translate-x-0 transition-all duration-500 border-t border-gray-100">
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} p-1 rounded-lg text-white hover:scale-110 hover:shadow-lg transition-all duration-200 flex items-center justify-center`}
                >
                  <IconComponent className="text-3xl" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
