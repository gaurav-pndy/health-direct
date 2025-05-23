import React from "react";
import { useTranslation } from "react-i18next";

const ProfileCard = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-[#213d66] lg:col-span-2 p-6 rounded-3xl text-white">
      <div className="flex flex-col items-center text-center">
        <div className="w-36 h-36 rounded-full overflow-hidden mb-2 border-6 border-[#909eb3]">
          <img
            src="/user.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold ">{t("profile_card.name")} </h3>
        <div className="text-sm text-blue-100">
          <p>{t("profile_card.age")}</p>
          <p>{t("profile_card.phone")}</p>
          <p>{t("profile_card.email")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
