import React, { useState } from "react";
import { MdDashboard, MdPayments, MdMail } from "react-icons/md";
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

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      icon: MdDashboard,
      label: "Dashboard",
      color: "text-blue-600",
      src: "/",
    },
    {
      icon: FaCalendarPlus,
      label: "My Appointments",
      color: "text-purple-600",
      src: "/appointments",
    },
    {
      icon: MdPayments,
      label: "My Payments",
      color: "text-blue-600",
      src: "/payments",
    },
    {
      icon: FaUserCircle,
      label: "Profile",
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
      <div className="xl:hidden fixed flex items-center gap-4  top-0 left-0 z-50 bg-white border border-gray-200 rounded-md shadow w-full p-4">
        <button onClick={() => setIsOpen(true)} className="p-2 ">
          <FaBars className="text-4xl" />
        </button>
        <img src="/HD.png" className="h-7" alt="Logo" />
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar (responsive handling) */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-screen w-80 md:w-96 xl:w-80  bg-[#f7f7f7] border-r border-gray-200
          flex flex-col flex-shrink-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          xl:translate-x-0 xl:z-auto
        `}
      >
        {/* Close button only on mobile */}
        <div className="xl:hidden flex justify-end p-4">
          <button className="p-2 " onClick={() => setIsOpen(false)}>
            <FaTimes className="text-4xl" />
          </button>
        </div>

        {/* Header */}
        <div className="p-10 border-b border-gray-100 hidden xl:flex justify-center">
          <img src="/HD.png" className="h-7" alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <div className="space-y-10 px-8">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.src}
                  onClick={() => setIsOpen(false)}
                  className="mb-10"
                >
                  <div>
                    <button
                      className={`w-full flex items-center space-x-4 px-4 mb-5 py-3 ${
                        location.pathname === item.src && "bg-[#ebebec]"
                      }  text-left hover:bg-[#ebebec] cursor-pointer rounded-lg transition-colors duration-300 group`}
                    >
                      <div className="flex-shrink-0">
                        <IconComponent
                          className={`text-[#195e83] group-hover:scale-110 text-2xl transition-transform duration-200`}
                        />
                      </div>
                      <span
                        className={` text-xl md:text-2xl xl:text-xl  group-hover:text-gray-900 ${
                          location.pathname === item.src
                            ? "text-[#195e83] font-bold"
                            : "text-gray-700"
                        } `}
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
        <div className="p-6 border-t border-gray-100">
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
