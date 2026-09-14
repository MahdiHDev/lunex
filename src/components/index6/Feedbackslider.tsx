"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import user1 from "public/assets/images/users/user1.jpg";
import user2 from "public/assets/images/users/user2.jpg";

interface Feedback {
    text: string;
    avatar: StaticImageData;
    name: string;
    role: string;
}

const feedbacks: Feedback[] = [
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaqu psa quae ab illo inventore veritatis et quasi architecto beatae vitae. Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium.",
        avatar: user1,
        name: "Mason Logan",
        role: "Manager at Business",
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, et quasi architecto beatae vitae. Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium eaqu psa quae ab illo inventore veritatis.",
        avatar: user2,
        name: "Aelira Evangelle",
        role: "Developer at Marketing",
    },
];

export default function FeedbackSlider() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="feedback_slides mx-auto position-relative">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                className="feedback_slides  mx-auto"
                data-cue="slideInUp"
                slidesPerView={1}
                loop
                spaceBetween={25}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    prevEl: ".feedback_prev",
                    nextEl: ".feedback_next",
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                observer={true}
                observeParents={true}
                watchOverflow={true}
            >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <div className="feedback_item position-relative z-1">
                            <p>{feedback.text}</p>
                            <div className="reviewer d-flex align-items-center">
                                <Image src={feedback.avatar} alt="user" />
                                <div>
                                    <h4 className="fw-semibold">
                                        {feedback.name}
                                    </h4>
                                    <span className="d-block">
                                        {feedback.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="feedback_slider_nav d-flex align-items-center justify-content-center ">
                <button
                    type="button"
                    className="feedback_prev feedback_button"
                    aria-label="Previous feedback"
                >
                    <i className="ri-arrow-left-up-line" />
                </button>
                <button
                    type="button"
                    className="feedback_next feedback_button"
                    aria-label="Next feedback"
                >
                    <i className="ri-arrow-right-up-line" />
                </button>
            </div>
        </div>
    );
}
