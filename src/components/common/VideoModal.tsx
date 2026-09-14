"use client";

import { useEffect } from "react";

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
    // Close on Escape, and stop the page from scrolling behind the modal
    // while it's open.
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

    if (!videoUrl) return null;

    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    if (!embedUrl) return null;

    return (
        <div
            className="video-modal-overlay position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center"
            onClick={onClose}
            style={{
                zIndex: 9999,
                background: "rgba(0, 0, 0, 0.85)",
            }}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close video"
                style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: 32,
                    lineHeight: 1,
                    cursor: "pointer",
                }}
            >
                <i className="ri-close-line" />
            </button>

            <div
                className="video-modal-frame"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "min(90vw, 960px)",
                    aspectRatio: "16 / 9",
                }}
            >
                <iframe
                    src={embedUrl}
                    title="Video player"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: 0 }}
                />
            </div>
        </div>
    );
}
