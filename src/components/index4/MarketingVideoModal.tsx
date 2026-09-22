"use client";

import { useState } from "react";
import VideoModal from "../common/VideoModal";

import Image from "next/image";
import video2 from "public/assets/images/videos/video2.jpg";

const MarketingVideoModal = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    return (
        <>
            <div className="box mx-auto position-relative">
                <Image src={video2} alt="video-image" />
                <a
                    href="https://www.youtube.com/watch?v=HKk4oLIzhhM"
                    className="video-btn popup-youtube d-inline-block rounded-circle text-center"
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveVideo(
                            "https://www.youtube.com/watch?v=HKk4oLIzhhM",
                        );
                    }}
                >
                    <i className="ri-play-fill" />
                </a>
            </div>
            <VideoModal
                videoUrl={activeVideo}
                onClose={() => setActiveVideo(null)}
            />
        </>
    );
};

export default MarketingVideoModal;
