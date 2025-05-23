// components/Header.tsx
import { BiSolidBellRing } from "react-icons/bi";
import { FaBell, FaLanguage, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { useEffect, useRef, useState } from "react";
import NotificationBox from "./NotificationBox";

const Header = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

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
            <NotificationBox />
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
