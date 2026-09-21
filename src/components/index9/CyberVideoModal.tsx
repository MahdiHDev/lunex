"use client";

import Image from "next/image";
import video5 from "public/assets/images/videos/video5.jpg";
import { useState } from "react";
import VideoModal from "../common/VideoModal";

const CyberVideoModal = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    return (
        <>
            <div className="box mx-auto position-relative">
                <Image src={video5} alt="video-image" />
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

export default CyberVideoModal;
