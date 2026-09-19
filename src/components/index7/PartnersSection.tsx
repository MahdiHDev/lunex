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

const partners = [
    { name: "partner1", img: partner1 },
    { name: "partner2", img: partner2 },
    { name: "partner3", img: partner3 },
    { name: "partner4", img: partner4 },
    { name: "partner5", img: partner5 },
    { name: "partner1", img: partner1 },
    { name: "partner2", img: partner2 },
    { name: "partner3", img: partner3 },
    { name: "partner4", img: partner4 },
    { name: "partner5", img: partner5 },
];

const PartnersSection = () => {
    return (
        <div className="partners_area position-relative z-1">
            <div className="container-fluid max_w_1560px">
                <Swiper
                    modules={[Autoplay]}
                    className="partners_slides"
                    loop
                    spaceBetween={25}
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
                                <Image src={partner.img} alt={partner.name} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="border_lines">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
        </div>
    );
};

export default PartnersSection;
