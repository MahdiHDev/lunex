"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideInUp from "../common/SlideInUp";

const TrustedClientSlider = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    return (
        <>
            <SlideInUp
                className="container-fluid"
                // data-cue="slideInUp"
                selector=".trustedClientsSwiperTwo"
            >
                <Swiper
                    modules={[Autoplay]}
                    className="trustedClientsSwiperTwo"
                    grabCursor={true}
                    loop={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            spaceBetween: 25,
                            slidesPerView: 2,
                        },
                        576: {
                            spaceBetween: 25,
                            slidesPerView: 3,
                        },
                        768: {
                            spaceBetween: 25,
                            slidesPerView: 4,
                        },
                        992: {
                            spaceBetween: -135,
                            slidesPerView: 3,
                        },
                        1200: {
                            spaceBetween: -135,
                            slidesPerView: 4,
                        },
                        1400: {
                            spaceBetween: -135,
                            slidesPerView: 5,
                        },
                        1600: {
                            spaceBetween: -135,
                            slidesPerView: 8,
                        },
                    }}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner1.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner2.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner3.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner4.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner5.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner6.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner1.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner2.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner3.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner4.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner5.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner6.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item">
                                <img
                                    src="assets/images/partners/partner1.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="item two">
                                <img
                                    src="assets/images/partners/partner2.svg"
                                    alt="client-image"
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </SlideInUp>
        </>
    );
};

export default TrustedClientSlider;
