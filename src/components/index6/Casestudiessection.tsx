"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import SlideInUp from "../common/SlideInUp";

interface CaseStudy {
    image: string;
    subTitle: string;
    title: string;
    href: string;
}

const caseStudies: CaseStudy[] = [
    {
        image: "/assets/images/case-studies/case_study1.jpg",
        subTitle: "Social",
        title: "Social Media Solutions Tailored for Lunex",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study2.jpg",
        subTitle: "Lunex",
        title: "How We Boosted Online Sales by 150% with Lunex",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study3.jpg",
        subTitle: "Marketing",
        title: "Email Marketing Strategies for eCommerce Success",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study4.jpg",
        subTitle: "SaaS",
        title: "Global Fintech SaaS Ads Campaign Strategy",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study5.jpg",
        subTitle: "Marketing",
        title: "Fueling Growth Through Marketing for Lunex",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study1.jpg",
        subTitle: "Social",
        title: "Social Media Solutions Tailored for Lunex",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study2.jpg",
        subTitle: "Lunex",
        title: "How We Boosted Online Sales by 150% with Lunex",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study3.jpg",
        subTitle: "Marketing",
        title: "Email Marketing Strategies for eCommerce Success",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study4.jpg",
        subTitle: "SaaS",
        title: "Global Fintech SaaS Ads Campaign Strategy",
        href: "/work-single",
    },
    {
        image: "/assets/images/case-studies/case_study5.jpg",
        subTitle: "Marketing",
        title: "Fueling Growth Through Marketing for Lunex",
        href: "/work-single",
    },
];

export default function CaseStudiesSlider() {
    return (
        <div className="container-fluid px-0">
            <SlideInUp selector=".case_studies_slides" delay={0.1}>
                <Swiper
                    modules={[Autoplay]}
                    className="case_studies_slides"
                    loop
                    spaceBetween={25}
                    centeredSlides={true}
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
                            slidesPerView: 2,
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
                            slidesPerView: 4,
                            centeredSlides: true,
                        },
                    }}
                >
                    {caseStudies.map((study, index) => (
                        <SwiperSlide key={index}>
                            <div className="case_study_box">
                                <div className="image overflow-hidden position-relative">
                                    <Image
                                        src={study.image}
                                        alt="case-study"
                                        width={500}
                                        height={400}
                                    />
                                    <Link
                                        href={study.href}
                                        className="details_link_btn"
                                    >
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <span className="sub_title d-inline-block">
                                        {study.subTitle}
                                    </span>
                                    <h3 className="mb-0 fw-semibold">
                                        <Link href={study.href}>
                                            {study.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SlideInUp>
        </div>
    );
}
