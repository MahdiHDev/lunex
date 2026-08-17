"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core + module styles
import "swiper/css";
import "swiper/css/navigation";
import SlideInUp from "./SlideInUp";

type Feedback = {
    company: string;
    rating: number; // out of 5
    title: string;
    quote: string;
    avatar: string;
    name: string;
    role: string;
};

const feedbacks: Feedback[] = [
    {
        company: "Flexport",
        rating: 5,
        title: "A game changer for our brand",
        quote: "The team's creative strategy transformed our brand's presence. With a fresh and engaging design, we gained a new identity that resonates deeply with our audience, positioning us as a standout in a competitive market. Our brand recognition has skyrocketed since the launch.",
        avatar: "/assets/images/users/user6.jpg",
        name: "Sarah Thompson",
        role: "CEO, InnovateTech Solutions",
    },
    {
        company: "SupplyHog",
        rating: 4,
        title: "Innovative and impactful",
        quote: "The agency's creative approach was exactly what our business needed. Their work made us stand out in an already crowded market. We've seen an impressive increase in website traffic and customer inquiries, all thanks to their fresh ideas and strategic thinking.",
        avatar: "/assets/images/users/user1.jpg",
        name: "Emily Roberts",
        role: "Founder, Urban Innovators",
    },
];

export default function TestimonialSlider2() {
    return (
        <SlideInUp selector=".feedbackSwiper">
            <div
                className="feedbackSwiper position-relative"
                data-cue="slideInUp"
            >
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={25}
                    grabCursor
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                >
                    {feedbacks.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="feedback-item">
                                <div className="ratings d-flex align-items-center">
                                    <span className="fw-medium d-inline-block">
                                        {item.company}
                                    </span>
                                    {Array.from({ length: item.rating }).map(
                                        (_, i) => (
                                            <Image
                                                key={i}
                                                src="/assets/images/icons/star.svg"
                                                alt="star"
                                                width={16}
                                                height={16}
                                            />
                                        ),
                                    )}
                                </div>
                                <h3>&ldquo;{item.title}&rdquo;</h3>
                                <p>{item.quote}</p>
                                <div className="info d-flex align-items-center">
                                    <Image
                                        src={item.avatar}
                                        className="rounded-circle"
                                        alt="user"
                                        width={48}
                                        height={48}
                                    />
                                    <div>
                                        <h4 className="fw-normal">
                                            {item.name}
                                        </h4>
                                        <span className="d-block">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-navigation d-flex align-items-center">
                    <div className="swiper-button-prev">
                        <Image
                            src="/assets/images/icons/left-arrow.svg"
                            alt="left-arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="swiper-button-next">
                        <Image
                            src="/assets/images/icons/right-arrow.svg"
                            alt="right-arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </SlideInUp>
    );
}
