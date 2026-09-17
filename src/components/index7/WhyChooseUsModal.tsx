"use client";

import Image from "next/image";
import discover from "public/assets/images/discover.jpg";
import { useState } from "react";
import SlideInUp from "../common/SlideInUp";
import VideoModal from "../common/VideoModal";

const WhyChooseUsModal = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    return (
        <>
            <SlideInUp selector=".box">
                <div className="box position-relative" data-cue="slideInUp">
                    <Image src={discover} alt="discover" />
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
                        <i className="ri-play-large-line" />
                    </a>
                </div>
            </SlideInUp>
            <VideoModal
                videoUrl={activeVideo}
                onClose={() => setActiveVideo(null)}
            />
        </>
    );
};

export default WhyChooseUsModal;
