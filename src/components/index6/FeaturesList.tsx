"use client";

import Image from "next/image";
import { useState } from "react";
import SlideInUp from "../common/SlideInUp";
import VideoModal from "../common/VideoModal";

// image imports
import feature1 from "public/assets/images/features/feature1.png";
import feature2 from "public/assets/images/features/feature2.png";
import feature3 from "public/assets/images/features/feature3.png";
import feature4 from "public/assets/images/features/feature4.png";
import playNow from "public/assets/images/objects/play_now.png";

const FeaturesList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <SlideInUp selector=".features_list, .item">
                <div
                    className="features_list"
                    // data-cues="slideInUp"
                    data-group="features_list"
                >
                    <div
                        className={`item ${activeIndex === 0 ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(0)}
                    >
                        <div className="container position-relative">
                            <h3 className="mb-0 fw-normal text-uppercase">
                                <span className="fw-bold">01.</span>{" "}
                                <strong className="fw-bold">Grow Your</strong>{" "}
                                Business
                            </h3>
                            <div className="box">
                                <Image src={feature1} alt="feature" />
                                <a
                                    href="https://www.youtube.com/watch?v=ObKsCs5mYGQ"
                                    className="video_btn popup_video popup-youtube"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveVideo(
                                            "https://www.youtube.com/watch?v=ObKsCs5mYGQ",
                                        );
                                    }}
                                >
                                    <Image src={playNow} alt="play-now" />
                                    <i className="ri-play-large-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`item ${activeIndex === 1 ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(1)}
                        onMouseLeave={() => setActiveIndex(0)}
                    >
                        <div className="container position-relative">
                            <h3 className="mb-0 fw-normal text-uppercase">
                                <span className="fw-bold">02.</span>{" "}
                                <strong className="fw-bold">
                                    Increase Your
                                </strong>{" "}
                                Revenue
                            </h3>
                            <div className="box">
                                <Image src={feature2} alt="feature" />
                                <a
                                    href="https://www.youtube.com/watch?v=ObKsCs5mYGQ"
                                    className="video_btn popup_video popup-youtube"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveVideo(
                                            "https://www.youtube.com/watch?v=ObKsCs5mYGQ",
                                        );
                                    }}
                                >
                                    <Image src={playNow} alt="play-now" />
                                    <i className="ri-play-large-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`item ${activeIndex === 2 ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(2)}
                        onMouseLeave={() => setActiveIndex(0)}
                    >
                        <div className="container position-relative">
                            <h3 className="mb-0 fw-normal text-uppercase">
                                <span className="fw-bold">03.</span>{" "}
                                <strong className="fw-bold">Boost Brand</strong>{" "}
                                Awareness
                            </h3>
                            <div className="box">
                                <Image src={feature3} alt="feature" />
                                <a
                                    href="https://www.youtube.com/watch?v=ObKsCs5mYGQ"
                                    className="video_btn popup_video popup-youtube"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveVideo(
                                            "https://www.youtube.com/watch?v=ObKsCs5mYGQ",
                                        );
                                    }}
                                >
                                    <Image src={playNow} alt="play-now" />
                                    <i className="ri-play-large-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`item ${activeIndex === 3 ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(3)}
                        onMouseLeave={() => setActiveIndex(0)}
                    >
                        <div className="container position-relative">
                            <h3 className="mb-0 fw-normal text-uppercase">
                                <span className="fw-bold">04.</span>{" "}
                                <strong className="fw-bold">
                                    Expand Market
                                </strong>{" "}
                                Share
                            </h3>
                            <div className="box">
                                <Image src={feature4} alt="feature" />
                                <a
                                    href="https://www.youtube.com/watch?v=ObKsCs5mYGQ"
                                    className="video_btn popup_video popup-youtube"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveVideo(
                                            "https://www.youtube.com/watch?v=ObKsCs5mYGQ",
                                        );
                                    }}
                                >
                                    <Image src={playNow} alt="play-now" />
                                    <i className="ri-play-large-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideInUp>
            <VideoModal
                videoUrl={activeVideo}
                onClose={() => setActiveVideo(null)}
            />
        </>
    );
};

export default FeaturesList;
