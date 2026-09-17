"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "Mason Logan",
        role: "Manager at Business",
        image: "assets/images/users/user1.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Aelira Evangelle",
        role: "Developer at Marketing",
        image: "assets/images/users/user2.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Mason Logan",
        role: "Manager at Business",
        image: "assets/images/users/user1.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Aelira Evangelle",
        role: "Developer at Marketing",
        image: "assets/images/users/user2.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Mason Logan",
        role: "Manager at Business",
        image: "assets/images/users/user1.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Aelira Evangelle",
        role: "Developer at Marketing",
        image: "assets/images/users/user2.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Mason Logan",
        role: "Manager at Business",
        image: "assets/images/users/user1.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
    {
        name: "Aelira Evangelle",
        role: "Developer at Marketing",
        image: "assets/images/users/user2.jpg",
        text: "\u201CSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\u201D",
    },
];

const TestimonialsSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="container-fluid px-0">
            <div className="testimonials_slides_wrapper position-relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    className="testimonials_slides"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop
                    spaceBetween={25}
                    centeredSlides
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        prevEl: ".testimonial_prev",
                        nextEl: ".testimonial_next",
                    }}
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: false,
                        },
                        576: {
                            slidesPerView: 1,
                            centeredSlides: false,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: false,
                        },
                        992: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        1200: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        1400: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial_item">
                                <div className="ratings d-flex align-items-center">
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p>{item.text}</p>
                                <div className="reviewer d-flex align-items-center">
                                    <img src={item.image} alt="user" />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <span className="d-block">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="testimonial_prev owl-nav-style">
                    <i className="ri-arrow-left-up-line" />
                </div>
                <div className="testimonial_next owl-nav-style">
                    <i className="ri-arrow-right-up-line" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
