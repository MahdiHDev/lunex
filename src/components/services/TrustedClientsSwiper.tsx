"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import images
import partner1 from "public/assets/images/partners/partner1.svg";
import partner2 from "public/assets/images/partners/partner2.svg";
import partner3 from "public/assets/images/partners/partner3.svg";
import partner4 from "public/assets/images/partners/partner4.svg";
import partner5 from "public/assets/images/partners/partner5.svg";

const TrustedClientsSwiper = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            className="swiper trustedClientsSwiper"
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            grabCursor={true}
            loop={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: {
                    spaceBetween: 25,
                    slidesPerView: 1,
                },
                576: {
                    spaceBetween: 25,
                    slidesPerView: 2,
                },
                768: {
                    spaceBetween: 25,
                    slidesPerView: 3,
                },
                992: {
                    spaceBetween: 35,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 35,
                    slidesPerView: 4,
                },
                1400: {
                    spaceBetween: 35,
                    slidesPerView: 4,
                },
            }}
        >
            {/* <div className="swiper-wrapper"> */}
            <SwiperSlide className="text-center">
                <div className="item" style={{ backgroundColor: "#fff" }}>
                    <Image src={partner1} alt="partner-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center">
                <div className="item">
                    <Image src={partner2} alt="partner-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide text-center">
                <div className="item">
                    <Image src={partner3} alt="partner-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide text-center">
                <div className="item">
                    <Image src={partner4} alt="partner-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide text-center">
                <div className="item">
                    <Image src={partner5} alt="partner-image" />
                </div>
            </SwiperSlide>
            {/* </div> */}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
        </Swiper>
    );
};

export default TrustedClientsSwiper;
