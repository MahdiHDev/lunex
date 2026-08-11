"use client";

import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideInUp from "./SlideInUp";

const testimonials = [
    {
        text: "The team's creative strategy transformed our brand's presence. With a fresh and engaging design, we gained a new identity that resonates deeply with our audience, positioning us as a standout in a competitive market. Our brand recognition has skyrocketed since the launch.",
        name: "Sarah Thompson",
        role: "CEO, InnovateTech Solutions",
    },
    {
        text: "From initial concepts to final execution, the team delivered beyond our expectations. The brand overhaul not only strengthened our online presence but also resulted in a significant increase in customer engagement and sales. Their creative approach was exactly what we needed.",
        name: "John Harrison",
        role: "Marketing Director, Elite Enterprises",
    },
];

export default function TestimonialsSlider() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    return (
        <div className="testimonials-area bg-image position-relative z-1 bg-black ptb-150">
            <div className="container">
                <div className="creative-agency-section-title text-white">
                    <div className="left-side">
                        <div className="number d-flex align-items-center">
                            <div>07</div>
                            Client stories
                        </div>
                        <TextAnimation as="h2" className="text-animation">
                            Client success <span>stories</span>
                        </TextAnimation>
                    </div>
                </div>

                <SlideInUp
                    className="testimonialsSwiper"
                    selector=".testimonial-item"
                >
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={25}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item">
                                    <p>&ldquo;{item.text}&rdquo;</p>
                                    <h3 className="fw-normal">{item.name}</h3>
                                    <span className="d-block">{item.role}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-navigation d-flex align-items-center justify-content-end">
                        <div
                            className="swiper-button-prev"
                            onClick={() => swiperInstance?.slidePrev()}
                        >
                            <Image
                                src="/assets/images/icons/white-left-arrow.svg"
                                alt="white-left-arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div
                            className="swiper-button-next"
                            onClick={() => swiperInstance?.slideNext()}
                        >
                            <Image
                                src="/assets/images/icons/white-right-arrow.svg"
                                alt="white-right-arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </SlideInUp>
            </div>

            <div className="shape2">
                <Image
                    src="/assets/images/shapes/shape2.svg"
                    alt="shape2"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}
