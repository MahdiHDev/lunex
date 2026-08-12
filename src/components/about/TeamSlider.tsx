"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

// image imports
import Image from "next/image";
import team1 from "public/assets/images/teams/team1.jpg";
import team2 from "public/assets/images/teams/team2.jpg";
import team3 from "public/assets/images/teams/team3.jpg";
import team4 from "public/assets/images/teams/team4.jpg";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideInUp from "../common/SlideInUp";

const teamData = [
    {
        name: "David Wilson",
        role: "Content Strategist",
        image: team1,
    },
    {
        name: "Sophia Martinez",
        role: "Marketing Specialist",
        image: team2,
    },
    {
        name: "Michael Johnson",
        role: "Lead Developer",
        image: team3,
    },
    {
        name: "Olivia White",
        role: "Graphic Designer",
        image: team4,
    },
];

export default function TeamSlider() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    return (
        <div className="team-area">
            <div className="container">
                <div className="creative-agency-section-title">
                    <div className="left-side">
                        <h2 className="text-animation">
                            The team that{" "}
                            <span className="text-primary">drives us</span>
                        </h2>
                    </div>
                </div>
                <SlideInUp
                    className="teamSwiper position-relative"
                    // data-cue="slideInUp"
                    selector=".single-team-member"
                >
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        // slidesPerView={3}
                        spaceBetween={25}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {teamData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide">
                                    <div className="single-team-member">
                                        <Image
                                            src={item.image}
                                            alt="team-image"
                                        />
                                        <div className="content d-flex justify-content-between align-items-end">
                                            <div className="title">
                                                <h3>{item.name}</h3>
                                                <span className="d-block">
                                                    {item.role}
                                                </span>
                                            </div>
                                            <div className="socials">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    className="d-inline-block"
                                                >
                                                    <i className="ri-instagram-line" />
                                                </a>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    className="d-inline-block"
                                                >
                                                    <i className="ri-facebook-circle-fill" />
                                                </a>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    className="d-inline-block"
                                                >
                                                    <i className="ri-threads-line" />
                                                </a>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    className="d-inline-block"
                                                >
                                                    <i className="ri-twitter-x-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team2.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Sophia Martinez</h3>
                                            <span className="d-block">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team3.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>James Taylor</h3>
                                            <span className="d-block">
                                                Software Engineer
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team4.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Olivia White</h3>
                                            <span className="d-block">
                                                Graphic Designer
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Swiper>

                    <div className="btn-box d-flex align-items-center">
                        <div
                            className="swiper-button-prev"
                            onClick={() => swiperInstance?.slidePrev()}
                        >
                            <i className="ri-arrow-left-line" />
                        </div>
                        <div
                            className="swiper-button-next"
                            onClick={() => swiperInstance?.slideNext()}
                        >
                            <i className="ri-arrow-right-line" />
                        </div>
                    </div>
                </SlideInUp>
            </div>
        </div>
    );
}
