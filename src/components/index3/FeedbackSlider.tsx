"use client";

import Image from "next/image";
import shape3 from "public/assets/images/shapes/shape3.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core + module styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideInUp from "../common/SlideInUp";

type Feedback = {
    avatar: string;
    quote: string;
    name: string;
    role: string;
};

const feedbacks: Feedback[] = [
    {
        avatar: "/assets/images/users/user7.jpg",
        quote: "The team's creative strategy transformed our brand's presence. With a fresh and engaging design, we gained a new identity that resonates deeply with our audience, positioning us as a standout in a competitive market. Our brand recognition has skyrocketed since the launch.",
        name: "Sarah Thompson",
        role: "CEO, InnovateTech Solutions",
    },
    {
        avatar: "/assets/images/users/user8.jpg",
        quote: "From initial concepts to final execution, the team delivered beyond our expectations. The brand overhaul not only strengthened our online presence but also resulted in a significant increase in customer engagement and sales. Their creative approach was exactly what we needed.",
        name: "John Harrison",
        role: "Marketing Director, Elite Enterprises",
    },
    {
        avatar: "/assets/images/users/user9.jpg",
        quote: "The agency's creative approach was exactly what our business needed. Their work made us stand out in an already crowded market. We've seen an impressive increase in website traffic and customer inquiries, all thanks to their fresh ideas and strategic thinking.",
        name: "Emily Roberts",
        role: "Founder, Urban Innovators",
    },
];

export default function FeedbackSlider() {
    return (
        <SlideInUp selector=".feedbackSwiperStyleTwo">
            <div className="feedbackSwiperStyleTwo position-relative">
                <div className="container-fluid">
                    <div className="feedbackSwiperStyleTwo position-relative">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={25}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                992: { slidesPerView: 2 },
                                1200: { slidesPerView: 2 },
                                1400: { slidesPerView: 2 },
                            }}
                        >
                            {feedbacks.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="feedback-box position-relative z-1">
                                        <Image
                                            src={item.avatar}
                                            className="user rounded-circle"
                                            alt="user-image"
                                            width={70}
                                            height={70}
                                        />
                                        <p>{item.quote}</p>
                                        <h3>{item.name}</h3>
                                        <span className="d-block">
                                            {item.role}
                                        </span>
                                        <div className="shape3">
                                            <Image src={shape3} alt="shape3" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="btn-box d-flex align-items-center justify-content-between">
                            <div className="swiper-pagination" />
                            <div className="swiper-navigation">
                                <div className="swiper-button-prev">
                                    <i className="ri-arrow-left-line" />
                                </div>
                                <div className="swiper-button-next">
                                    <i className="ri-arrow-right-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideInUp>
    );
}
