import React from "react";
import { useTranslation } from "react-i18next";
import "./DiscountCard.css";

const DiscountCard = () => {
  const { t } = useTranslation();
  return (
    <div className="discounts-card">
      <div className="discounts-card-inner">
        <h3
          className="discounts-title"
          dangerouslySetInnerHTML={{ __html: t("discounts_card.text") }}
        ></h3>
        <div className="discounts-button-wrapper">
          <button className="discounts-button">
            {t("discounts_card.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
