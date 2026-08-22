"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

type Testimonial = {
    id: number;
    quote: string;
    name: string;
    role: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Working with Lunex was an absolute pleasure. They took our vision and elevated it beyond what we could have imagined. Our logo is now the focal point of our brand and has helped us stand out in the market!",
        name: "David Korren",
        role: "Product Manager",
    },
    {
        id: 2,
        quote: "Our logo is now the focal point of our brand and has helped us stand out in the market! Working with Lunex was an absolute pleasure. They took our vision and elevated it beyond what we could have imagined.",
        name: "Mason Logan",
        role: "Web Developer",
    },
];

export default function AwesomeTestimonials() {
    return (
        <>
            <div className="border_bottom_style" />
            <div className="box_inner">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    className="awesome_testimonials_slides"
                    slidesPerView={1}
                    spaceBetween={25}
                    loop
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        nextEl: ".testimonials-nav-next",
                        prevEl: ".testimonials-nav-prev",
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="single_awesome_testimonial_item">
                                <p>&ldquo;{item.quote}&rdquo;</p>
                                <div className="client_info d-md-flex align-items-center justify-content-between">
                                    <div className="title">
                                        <h3 className="fw-medium">
                                            {item.name}
                                        </h3>
                                        <span className="sub_title fw-medium">
                                            {item.role}
                                        </span>
                                    </div>
                                    <Image
                                        src="/assets/images/kintsugi.svg"
                                        alt="kintsugi"
                                        width={80}
                                        height={40}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="owl-nav" slot="container-end">
                        <button
                            type="button"
                            className="owl-prev testimonials-nav-prev"
                            aria-label="Previous testimonial"
                        >
                            <i className="ri-arrow-left-up-line" />
                        </button>

                        <button
                            type="button"
                            className="owl-next testimonials-nav-next"
                            aria-label="Next testimonial"
                        >
                            <i className="ri-arrow-right-up-line" />
                        </button>
                    </div>
                </Swiper>
            </div>
        </>
    );
}
