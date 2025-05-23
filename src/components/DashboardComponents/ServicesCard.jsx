import { Monitor } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaXRay } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuDna, LuFilePlus2, LuUsers } from "react-icons/lu";
import { RiMicroscopeFill } from "react-icons/ri";

const ServicesCard = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Monitor,
      title: t("services_card.service1"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: RiMicroscopeFill,
      title: t("services_card.service2"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: LuDna,
      title: t("services_card.service3"),
      bgColor: "bg-blue-900",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      icon: LuUsers,
      title: t("services_card.service4"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FaPeopleGroup,
      title: t("services_card.service5"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FaXRay,
      title: t("services_card.service6"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br col-span-2 lg:col-span-5  from-[#c36aa7] to-[#1c5e83] p-6 rounded-3xl text-white">
      <div className="flex  justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">
            {t("services_card.title")}{" "}
          </h3>
          <p className="text-purple-100 text-sm">
            {t("services_card.subtitle")}
          </p>
        </div>
        <LuFilePlus2 size={60} className="text-white" />
      </div>

      <div className="space-y-3 h-[26rem] overflow-y-auto custom-scrollbar pr-2">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center space-x-4 p-4 rounded-3xl bg-[#ffffff] transition-all    text-[#0c557c]
              `}
            >
              <div className={`p-2 rounded-lg bg-[#195e83]`}>
                <IconComponent size={20} className="text-white" />
              </div>
              <span className=" text-left flex-1">{service.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default ServicesCard;
