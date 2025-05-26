import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./DiscountCard.css";

const DiscountCard = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      // effect="fade"
      loop={true}
      className="discounts-swiper "
    >
      {/* Slide 1: Card */}
      <SwiperSlide>
        <div className="discounts-card">
          <div className="discounts-card-inner">
            <h3
              className="discounts-title"
              dangerouslySetInnerHTML={{ __html: t("discounts_card.text") }}
            />
            <div className="discounts-button-wrapper">
              <button className="discounts-button">
                {t("discounts_card.button")}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2: Just an image */}
      <SwiperSlide>
        <img
          src="/promo1.jpg" // Your single promo image
          alt="Promotional"
          className="discounts-full-image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default DiscountCard;
