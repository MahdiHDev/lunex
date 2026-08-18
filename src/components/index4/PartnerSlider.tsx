"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import partner1 from "public/assets/images/partners/partner1.svg";
import partner2 from "public/assets/images/partners/partner2.svg";
import partner3 from "public/assets/images/partners/partner3.svg";
import partner4 from "public/assets/images/partners/partner4.svg";
import partner5 from "public/assets/images/partners/partner5.svg";
import partner6 from "public/assets/images/partners/partner6.svg";
import TextAnimation from "../common/TextAnimation";

const partners = [
    { id: 1, uri: partner1 },
    { id: 2, uri: partner2 },
    { id: 3, uri: partner3 },
    { id: 4, uri: partner4 },
    { id: 5, uri: partner5 },
    { id: 6, uri: partner6 },
];

const breakpoints = {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
    1200: { slidesPerView: 5 },
    1400: { slidesPerView: 5 },
};

export default function PartnerSlider() {
    return (
        <div className="partners-area extra-padding">
            <div className="container">
                <div className="partner-section-title text-center">
                    <TextAnimation
                        as="span"
                        className="d-block fw-medium text-animation"
                    >
                        The path to success starts with confidence
                    </TextAnimation>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    className="partnersSwiper text-center swiper"
                    spaceBetween={25}
                    grabCursor
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={breakpoints}
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <Image src={partner.uri} alt="partner-image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
