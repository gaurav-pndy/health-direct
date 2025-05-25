import React from "react";
import { useTranslation } from "react-i18next";
import "./ProfileCard.css";
const ProfileCard = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-image">
          <img src="/user.jpeg" alt="Profile" />
        </div>
        <h3 className="profile-name">{t("profile_card.name")}</h3>
        <div className="profile-details">
          <p>{t("profile_card.age")}</p>
          <p>{t("profile_card.phone")}</p>
          <p>{t("profile_card.email")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
