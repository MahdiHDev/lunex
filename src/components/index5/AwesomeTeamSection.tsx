"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SlideInUp from "../common/SlideInUp";
import TextAnimation from "../common/TextAnimation";

const team = [
    {
        image: "/assets/images/teams/team7.jpg",
        name: "Michael Carter",
        role: "Junior Executive",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team8.jpg",
        name: "John Williams",
        role: "Sr. Developer",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team9.jpg",
        name: "Robert Johnson",
        role: "UI Design",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team10.jpg",
        name: "James Anderson",
        role: "CEO",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team11.jpg",
        name: "William Scott",
        role: "Director",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team7.jpg",
        name: "Michael Carter",
        role: "Junior Executive",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team8.jpg",
        name: "John Williams",
        role: "Sr. Developer",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team9.jpg",
        name: "Robert Johnson",
        role: "UI Design",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team10.jpg",
        name: "James Anderson",
        role: "CEO",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
    {
        image: "/assets/images/teams/team11.jpg",
        name: "William Scott",
        role: "Director",
        bio: "In cursus quam consequat non tortor tristique dolor pellentesque.",
    },
];

// Same breakpoint set as the original owl.carousel config, just translated
// to Swiper's `slidesPerView` naming.
const breakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
    1600: { slidesPerView: 6 },
};

export default function AwesomeTeamSection() {
    return (
        <div className="awesome_team_area ptb-150">
            <div className="container-fluid max_w_1905px">
                <div className="section_title style_five">
                    <TextAnimation className="mb-0 text_animation">
                        Meet our dedicated team of marketing experts
                    </TextAnimation>
                </div>
            </div>
            <div className="border_bottom_style"></div>
            <div className="container-fluid style_two max_w_1905px">
                <SlideInUp selector=".awesome_team_slides">
                    <Swiper
                        className="awesome_team_slides"
                        data-cue="slideInUp"
                        modules={[Autoplay]}
                        loop
                        centeredSlides
                        spaceBetween={25}
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        breakpoints={breakpoints}
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="single_awesome_team_member">
                                    <div className="image position-relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={400}
                                            height={480}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                        <h3 className="mb-0">{member.name}</h3>
                                    </div>
                                    <div className="content">
                                        <h4>{member.role}</h4>
                                        <p>{member.bio}</p>
                                        <div className="border_bottom"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SlideInUp>
            </div>
        </div>
    );
}
