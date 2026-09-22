"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
    videoUrl: string | null;
    onClose: () => void;
}

function getYouTubeEmbedUrl(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    if (!match) return null;
    return `https://www.youtube.com/embed/${match[1]}`;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!videoUrl) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [videoUrl, onClose]);

    if (!mounted || !videoUrl) return null;

    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    if (!embedUrl) return null;

    return createPortal(
        <div className="video-modal-overlay" onClick={onClose}>
            <div
                className="video-modal-frame"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="video-modal-close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    <i className="ri-close-line" />
                </button>
                <iframe
                    src={embedUrl}
                    title="Video player"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: 0 }}
                />
            </div>
        </div>,
        document.body,
    );
}
