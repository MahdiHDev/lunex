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

const rowOneLogos = [
    { uri: partner1 },
    { uri: partner2 },
    { uri: partner3 },
    { uri: partner4 },
];

const rowTwoLogos = [
    { uri: partner5 },
    { uri: partner6 },
    { uri: partner1 },
    { uri: partner2 },
];

// Repeat each row's logos enough times to exceed the largest
// slidesPerView (6 at 1600px) — otherwise autoplay has nowhere
// left to scroll to and the marquee stalls.
const repeat = <T,>(items: T[], times: number) =>
    Array.from({ length: times }, () => items).flat();

const rowOneSlides = repeat(rowOneLogos, 3).map((logo, index) => ({
    ...logo,
    id: index,
}));
const rowTwoSlides = repeat(rowTwoLogos, 3).map((logo, index) => ({
    ...logo,
    id: index,
}));

const breakpoints = {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { spaceBetween: 40, slidesPerView: 4 },
    1200: { spaceBetween: 60, slidesPerView: 5 },
    1400: { slidesPerView: 5 },
    1600: { slidesPerView: 6 },
};

export default function PartnersSllider() {
    return (
        <div className="partners-area pb-150">
            <div className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    className="partnersSwiperOne swiper"
                    loop={false}
                    speed={4000}
                    freeMode={false}
                    spaceBetween={25}
                    simulateTouch={false}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    breakpoints={breakpoints}
                >
                    {rowOneSlides.map((logo) => (
                        <SwiperSlide key={logo.id}>
                            <div className="partner-item">
                                <Image
                                    src={logo.uri}
                                    alt="partner-image"
                                    width={120}
                                    height={60}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    modules={[Autoplay]}
                    className="partnersSwiperTwo swiper"
                    dir="rtl"
                    loop={false}
                    speed={4000}
                    freeMode={false}
                    spaceBetween={25}
                    simulateTouch={false}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    breakpoints={breakpoints}
                >
                    {rowTwoSlides.map((logo) => (
                        <SwiperSlide key={logo.id}>
                            <div className="partner-item">
                                <Image
                                    src={logo.uri}
                                    alt="partner-image"
                                    width={120}
                                    height={60}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
