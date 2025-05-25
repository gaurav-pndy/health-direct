// components/Header.tsx
import { BiSolidBellRing } from "react-icons/bi";
import { FaBell, FaLanguage, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { useEffect, useRef, useState } from "react";
import NotificationBox from "./NotificationBox";
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src="/HD.png" className="logo-image" alt="Logo" />
      </div>

      {/* User Greeting */}
      <div className="header-greeting">
        <div className="header-content">
          <div className="user-info">
            <div className="avatar">
              <img src="/user.jpeg" alt="Profile" className="avatar-image" />
            </div>
            <div>
              <h1 className="welcome-text">{t("header.welcome")}</h1>
              <p className="subtitle">{t("header.subtitle")}</p>
            </div>
          </div>

          <div className="header-actions">
            <select
              value={selectedLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select-desktop"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
            <NotificationBox />
            <button className="logout-button">
              <MdOutlineLogout size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
