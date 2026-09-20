"use client";

import Image from "next/image";
import about9 from "public/assets/images/abouts/about9.jpg";
import { useState } from "react";
import SlideInUp from "../common/SlideInUp";
import VideoModal from "../common/VideoModal";

const VideoBox = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <SlideInUp selector=".about_video_box">
                <div
                    className="about_video_box position-relative"
                    data-cue="slideInUp"
                >
                    <Image src={about9} alt="about4" />
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
                        <i className="ri-play-fill" />
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

export default VideoBox;
