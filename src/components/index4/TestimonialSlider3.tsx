"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import partner1 from "public/assets/images/partners/partner1.svg";
import partner2 from "public/assets/images/partners/partner2.svg";
import partner3 from "public/assets/images/partners/partner3.svg";
import partner4 from "public/assets/images/partners/partner4.svg";
import partner5 from "public/assets/images/partners/partner5.svg";

type Testimonial = {
    id: number;
    avatar: typeof partner1;
    quote: string;
    name: string;
    designation: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        avatar: partner1,
        quote: "The team's creative strategy transformed our brand's presence. With a fresh and engaging design, we gained a new identity that resonates deeply with our audience, positioning us as a standout in a competitive market. Our brand recognition has skyrocketed since the launch.",
        name: "Sarah Thompson",
        designation: "CEO, InnovateTech Solutions",
    },
    {
        id: 2,
        avatar: partner2,
        quote: "From initial concepts to final execution, the team delivered beyond our expectations. The brand overhaul not only strengthened our online presence but also resulted in a significant increase in customer engagement and sales. Their creative approach was exactly what we needed.",
        name: "John Harrison",
        designation: "Marketing Director, Elite Enterprises",
    },
    {
        id: 3,
        avatar: partner3,
        quote: "The agency's creative approach was exactly what our business needed. Their work made us stand out in an already crowded market. We've seen an impressive increase in website traffic and customer inquiries, all thanks to their fresh ideas and strategic thinking.",
        name: "Emily Roberts",
        designation: "Founder, Urban Innovators",
    },
    {
        id: 4,
        avatar: partner4,
        quote: "Working with this creative team has been a game-changer for our business. Their branding strategies and design solutions have driven measurable growth—our sales increased dramatically, and we gained a larger, more engaged audience. Their expertise has helped us reach new heights.",
        name: "Michael Davis",
        designation: "Co-Founder, TechEdge Ventures",
    },
    {
        id: 5,
        avatar: partner5,
        quote: "Our rebranding was a huge success, thanks to their outstanding work. We gained new clients, strengthened existing relationships, and saw an uptick in ROI. The team took the time to understand our business and vision, delivering results that directly contributed to our success.",
        name: "Rachel Green",
        designation: "CMO, FutureVision Enterprises",
    },
];

const breakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
};

export default function Testimonialslider3() {
    return (
        <div className="testimonialsSwiperStyleTwo position-relative">
            <Swiper
                modules={[Autoplay, Navigation]}
                className="swiper"
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
                breakpoints={breakpoints}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-box position-relative">
                            <Image
                                src={item.avatar}
                                className="client"
                                alt="client-image"
                            />
                            <p>{item.quote}</p>
                            <h3 className="fw-normal">{item.name}</h3>
                            <span className="designation d-block">
                                {item.designation}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}

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
            </Swiper>
        </div>
    );
}
