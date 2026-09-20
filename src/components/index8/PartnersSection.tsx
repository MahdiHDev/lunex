"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import partner1 from "public/assets/images/partners/partner1.svg";
import partner2 from "public/assets/images/partners/partner2.svg";
import partner3 from "public/assets/images/partners/partner3.svg";
import partner4 from "public/assets/images/partners/partner4.svg";
import partner5 from "public/assets/images/partners/partner5.svg";
import "swiper/css";
import SlideInUp from "../common/SlideInUp";

const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
];

const PartnersSection = () => {
    return (
        <SlideInUp selector=".partners_slides">
            <Swiper
                modules={[Autoplay]}
                className="partners_slides"
                loop
                spaceBetween={25}
                grabCursor={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 5,
                    },
                }}
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <div className="partner_item text-center">
                            <Image src={partner} alt={`partner${index}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SlideInUp>
    );
};

export default PartnersSection;
