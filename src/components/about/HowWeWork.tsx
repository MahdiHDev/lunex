"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideInUp from "../common/SlideInUp";

const workItems = [
    {
        id: 1,
        title: "Discovery phase",
        description:
            "In this initial phase, we dive deep into understanding your business, goals, and target audience. We conduct research and analyze your industry landscape to gather valuable insights. This helps us tailor our approach to create a clear roadmap that aligns with your objectives.",
    },
    {
        id: 2,
        title: "Strategy creation",
        description:
            "Based on the insights gathered in the discovery phase, we craft a comprehensive strategy that outlines key tactics and goals. This strategy is designed to drive growth, improve brand presence, and ensure long-term success. We prioritize innovation, creativity, and practicality.",
    },
    {
        id: 3,
        title: "Collaborative process",
        description:
            "Collaboration is at the heart of our process. Throughout the project, we maintain open channels of communication to ensure we're aligned with your expectations. Regular feedback helps us fine-tune designs, functionality, and other aspects, ensuring the end product meets your needs.",
    },
    {
        id: 4,
        title: "Design development",
        description:
            "Once the strategy is finalized, we move forward with designing and developing the solution. Our design team creates engaging visuals, while our developers ensure the functionality is seamless and user-friendly. We use the latest technologies to build robust, scalable, and secure solutions.",
    },
    {
        id: 5,
        title: "Quality assurance",
        description:
            "Before launching, we rigorously test the project to identify and fix any issues. Our quality assurance team runs multiple tests to ensure that the product is not only bug-free but also optimized for performance. This process ensures the highest quality outcome.",
    },
    {
        id: 6,
        title: "Ongoing support",
        description:
            "Once everything is set, we launch your product into the digital world. Our job doesn't end there—we provide ongoing support and maintenance to ensure the project continues to perform effectively. We also monitor results and suggest improvements for continuous growth and success.",
    },
    {
        id: 7,
        title: "Discovery phase",
        description:
            "In this initial phase, we dive deep into understanding your business, goals, and target audience. We conduct research and analyze your industry landscape to gather valuable insights. This helps us tailor our approach to create a clear roadmap that aligns with your objectives.",
    },
    {
        id: 8,
        title: "Strategy creation",
        description:
            "Based on the insights gathered in the discovery phase, we craft a comprehensive strategy that outlines key tactics and goals. This strategy is designed to drive growth, improve brand presence, and ensure long-term success. We prioritize innovation, creativity, and practicality.",
    },
    {
        id: 9,
        title: "Collaborative process",
        description:
            "Collaboration is at the heart of our process. Throughout the project, we maintain open channels of communication to ensure we're aligned with your expectations. Regular feedback helps us fine-tune designs, functionality, and other aspects, ensuring the end product meets your needs.",
    },
    {
        id: 10,
        title: "Design development",
        description:
            "Once the strategy is finalized, we move forward with designing and developing the solution. Our design team creates engaging visuals, while our developers ensure the functionality is seamless and user-friendly. We use the latest technologies to build robust, scalable, and secure solutions.",
    },
    {
        id: 11,
        title: "Quality assurance",
        description:
            "Before launching, we rigorously test the project to identify and fix any issues. Our quality assurance team runs multiple tests to ensure that the product is not only bug-free but also optimized for performance. This process ensures the highest quality outcome.",
    },
    {
        id: 12,
        title: "Ongoing support",
        description:
            "Once everything is set, we launch your product into the digital world. Our job doesn't end there—we provide ongoing support and maintenance to ensure the project continues to perform effectively. We also monitor results and suggest improvements for continuous growth and success.",
    },
];

const HowWeWork = () => {
    return (
        <div className="how-we-work-area bg-black ptb-150 position-relative z-1">
            <div className="container">
                <div className="creative-agency-section-title text-white">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="left-side">
                                <h2 className="text-animation">
                                    Our way of <span>working</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="right-side style-two">
                                <p>
                                    At <strong>NsaTheme</strong>, we believe in
                                    a collaborative approach that aligns with
                                    your vision. We start by understanding your
                                    needs, objectives, and challenges, allowing
                                    us to craft custom strategies tailored to
                                    your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SlideInUp
                className="container-fluid"
                selector=".how-we-work-box"
                individual
            >
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="howWeWorkSwiper"
                    spaceBetween={25}
                    slidesPerView={4}
                    centeredSlides={true}
                    grabCursor={true}
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {workItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="how-we-work-box">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SlideInUp>

            <div className="shape6">
                <img src="/assets/images/shapes/shape6.svg" alt="shape6" />
            </div>
        </div>
    );
};

export default HowWeWork;
