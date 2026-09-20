"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import leftDownArrow from "public/assets/images/icons/left_down_arrow.svg"; // adjust path/name to your actual import

const reviews = [
    {
        image: "review1.jpg",
        text: "We are a full-service digital agency that empowers businesses to achieve their online goals. We are passionate about helping our clients succeed in the ever-evolving digital landscape.",
    },
    {
        image: "review2.jpg",
        text: "We are a full-service digital agency dedicated to helping businesses achieve their online goals. With a passion for driving success, we empower our clients to thrive in the ever-changing digital landscape.",
    },
];

const ReviewsSection = () => {
    return (
        <div className="reviews_area position-relative z-1">
            <div className="container-fluid max_w_1560px">
                <div className="section_title style_four position-relative justify-content-md-end">
                    <h2 className="mb-0 text-uppercase fw-semibold order-md-2 text_animation">
                        Our Reviews
                    </h2>
                    <Image
                        src={leftDownArrow}
                        className="order-md-1"
                        alt="left_down_arrow"
                    />
                </div>

                <div className="total_reviews lh-1 d-flex align-items-center">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <span className="block fw-semibold">
                        Based on +300 Reviews
                    </span>
                </div>

                <div className="reviews_slides_wrapper position-relative display-block">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectFade]}
                        className="reviews_slides"
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        loop
                        spaceBetween={25}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".review_prev",
                            nextEl: ".review_next",
                        }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="review_item">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="content">
                                                <img
                                                    src="assets/images/white-logo.svg"
                                                    alt="white_logo"
                                                />
                                                <p>{review.text}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image">
                                                <img
                                                    src={`assets/images/reviews/${review.image}`}
                                                    alt={review.image.replace(
                                                        ".jpg",
                                                        "",
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="review_wrapper">
                        <div className="review_prev ">
                            <i className="ri-arrow-left-line" />
                        </div>
                        <div className="review_next ">
                            <i className="ri-arrow-right-line" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="object7">
                <img src="assets/images/objects/object7.png" alt="object7" />
            </div>
        </div>
    );
};

export default ReviewsSection;
