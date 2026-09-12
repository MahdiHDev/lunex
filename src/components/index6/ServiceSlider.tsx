"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import SlideInUp from "../common/SlideInUp";

const services = [
    {
        id: 1,
        title: "Digital Advertising",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/megaphone.svg",
        iconAlt: "megaphone",
    },
    {
        id: 2,
        title: "Social Media Graphics",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/media_target.svg",
        iconAlt: "media_target",
    },
    {
        id: 3,
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/search_chart.svg",
        iconAlt: "search_chart",
    },
    {
        id: 4,
        title: "Mobile Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/mobile_design.svg",
        iconAlt: "mobile_design",
    },
    {
        id: 5,
        title: "Digital Advertising",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/megaphone.svg",
        iconAlt: "megaphone",
    },
    {
        id: 6,
        title: "Social Media Graphics",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/media_target.svg",
        iconAlt: "media_target",
    },
    {
        id: 7,
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/search_chart.svg",
        iconAlt: "search_chart",
    },
    {
        id: 8,
        title: "Mobile Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
        icon: "/assets/images/icons/mobile_design.svg",
        iconAlt: "mobile_design",
    },
];

// Same breakpoints as the original owl.carousel config, translated to
// Swiper's `slidesPerView` naming.
const breakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
};

export default function ServiceSlider() {
    return (
        <div className="container-fluid">
            <SlideInUp selector=".wrapper">
                <div className="wrapper">
                    <Swiper
                        className="services_slides position-relative"
                        // data-cue="slideInUp"
                        modules={[Autoplay]}
                        loop
                        spaceBetween={25}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={breakpoints}
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service_box position-relative">
                                    <h3 className="fw-bold">
                                        <Link href="/service-single">
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p>{service.description}</p>
                                    <Link
                                        href="/service-single"
                                        className="details_link_btn"
                                    >
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                    <Image
                                        src={service.icon}
                                        className="icon d-block w-auto"
                                        alt={service.iconAlt}
                                        width={64}
                                        height={64}
                                        style={{
                                            width: "auto",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </SlideInUp>
        </div>
    );
}
