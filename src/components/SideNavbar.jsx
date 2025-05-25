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
import "./SideNavbar.css";

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
      {/* Mobile Toggle Button */}
      <div className="mobile-toggle-header">
        <div className="mobile-toggle-left">
          <button onClick={() => setIsOpen(true)} className="mobile-toggle-btn">
            <FaBars className="mobile-toggle-icon" />
          </button>
          <img src="/HD.png" className="mobile-logo" alt="Logo" />
        </div>
        <div className="mobile-toggle-right">
          <NotificationBox />
          <button className="mobile-logout-btn">
            <MdOutlineLogout size={20} />
          </button>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div className="mobile-backdrop" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar (responsive handling) */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {/* Close button only on mobile */}
        <div className="mobile-close-container">
          <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes className="mobile-close-icon" />
          </button>
        </div>

        {/* Header */}

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-container">
            <select
              value={selectedLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option className="language-option" value="en">
                English
              </option>
              <option className="language-option" value="ru">
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
                  className="nav-link"
                >
                  <div>
                    <button
                      className={`nav-button ${
                        location.pathname === item.src
                          ? "nav-button-active"
                          : ""
                      }`}
                    >
                      <div className="nav-icon-container">
                        <IconComponent className="nav-icon" />
                      </div>
                      <span
                        className={`nav-label ${
                          location.pathname === item.src
                            ? "nav-label-active"
                            : "nav-label-inactive"
                        }`}
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
        <div className="social-container">
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.bgColor}`}
                >
                  <IconComponent className="social-icon" />
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
