"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";
import work10 from "public/assets/images/works/work10.jpg";
import work11 from "public/assets/images/works/work11.jpg";
import work8 from "public/assets/images/works/work8.jpg";
import work9 from "public/assets/images/works/work9.jpg";

const works = [
    {
        image: work8,
        name: "work8",
        title: "Finance Website",
        tags: ["Design & UX Research", "User interface"],
    },
    {
        image: work9,
        name: "work9",
        title: "Capital Compass",
        tags: ["UX Blueprint", "Engaging Experiences"],
    },
    {
        image: work10,
        name: "work10",
        title: "Finance Navigator",
        tags: ["Design and UX", "Designing for Impact"],
    },
    {
        image: work11,
        name: "work11",
        title: "Penny Perfect",
        tags: ["Design Excellence", "Interface Innovation"],
    },
    {
        image: work8,
        name: "work8",
        title: "Finance Website",
        tags: ["Design & UX Research", "User interface"],
    },
    {
        image: work9,
        name: "work9",
        title: "Capital Compass",
        tags: ["UX Blueprint", "Engaging Experiences"],
    },
    {
        image: work10,
        name: "work10",
        title: "Finance Navigator",
        tags: ["Design and UX", "Designing for Impact"],
    },
    {
        image: work11,
        name: "work11",
        title: "Penny Perfect",
        tags: ["Design Excellence", "Interface Innovation"],
    },
];

const FeaturedWorksSection = () => {
    return (
        <div className="container-fluid px-0">
            <Swiper
                modules={[Autoplay]}
                className="featured_works_slides"
                loop
                spaceBetween={25}
                centeredSlides
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    },
                    576: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 2,
                        centeredSlides: true,
                    },
                    992: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                    1200: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                    1400: {
                        slidesPerView: 3,
                        centeredSlides: true,
                    },
                    1600: {
                        slidesPerView: 4,
                        centeredSlides: true,
                    },
                }}
            >
                {works.map((work, index) => (
                    <SwiperSlide key={index}>
                        <div className="work_item">
                            <div className="image position-relative overflow-hidden">
                                <Image src={work.image} alt={work.name} />
                                <a
                                    href="work-single.html"
                                    className="details_link_btn d-flex align-items-center justify-content-center fw-medium rounded-circle"
                                >
                                    View
                                </a>
                            </div>
                            <h3 className="fw-semibold">
                                <a href="work-single.html">{work.title}</a>
                            </h3>
                            <ul className="custom_list mb-0 list-unstyled p-0">
                                {work.tags.map((tag, i) => (
                                    <li
                                        key={i}
                                        className={`d-inline-block ${
                                            i === 0
                                                ? "fw-semibold"
                                                : "fw-medium"
                                        }`}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedWorksSection;
