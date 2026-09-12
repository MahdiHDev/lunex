"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import styles from "../TrustedPartner.module.css";
import TextAnimation from "../common/TextAnimation";

interface Partner {
    id: number;
    src: string;
    alt: string;
}

const partners: Partner[] = [
    { id: 1, src: "/assets/images/partners/partner1.svg", alt: "partner" },
    { id: 2, src: "/assets/images/partners/partner2.svg", alt: "partner" },
    { id: 3, src: "/assets/images/partners/partner3.svg", alt: "partner" },
    { id: 4, src: "/assets/images/partners/partner4.svg", alt: "partner" },
    { id: 5, src: "/assets/images/partners/partner5.svg", alt: "partner" },
    { id: 6, src: "/assets/images/partners/partner6.svg", alt: "partner" },
];

const SPEED = 5; // px per frame — tune to match your old animation speed

export default function TrustedPartner() {
    const trackRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const posRef = useRef(0); // current translateX value
    const isHoveredRef = useRef(false);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartPosRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const halfWidthRef = useRef(0); // width of one full (non-duplicated) set

    const applyTransform = useCallback(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
    }, []);

    // Main animation loop
    useEffect(() => {
        const tick = () => {
            if (!isDraggingRef.current && !isHoveredRef.current) {
                posRef.current -= SPEED;

                // Loop seamlessly: once scrolled past one full set, reset by that width
                if (
                    halfWidthRef.current > 0 &&
                    Math.abs(posRef.current) >= halfWidthRef.current
                ) {
                    posRef.current += halfWidthRef.current;
                }
                applyTransform();
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        // Measure one full set's width (track is duplicated 2x, so half = one set)
        if (trackRef.current) {
            halfWidthRef.current = trackRef.current.scrollWidth / 2;
        }

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [applyTransform]);

    // Keep position wrapped within bounds even during/after drag
    const normalizePosition = () => {
        const half = halfWidthRef.current;
        if (half <= 0) return;
        // Wrap position into the range (-half, 0] so it never drifts out of bounds
        while (posRef.current <= -half) posRef.current += half;
        while (posRef.current > 0) posRef.current -= half;
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragStartPosRef.current = posRef.current;
        wrapperRef.current?.setPointerCapture(e.pointerId);
        if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
        const delta = e.clientX - dragStartXRef.current;
        posRef.current = dragStartPosRef.current + delta;
        applyTransform();
    };

    const endDrag = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        normalizePosition();
        applyTransform();
        wrapperRef.current?.releasePointerCapture(e.pointerId);
        if (wrapperRef.current) wrapperRef.current.style.cursor = "";
    };

    return (
        <div className="trusted_partner_area">
            <div className="container">
                <div className="trusted_partner_inner position-relative">
                    <TextAnimation
                        as="span"
                        className="title1 d-inline-block fw-medium text-uppercase text_animation"
                    >
                        Our Trusted Partner
                    </TextAnimation>

                    <div
                        ref={wrapperRef}
                        className={styles.marqueeWrapper}
                        onMouseEnter={() => (isHoveredRef.current = true)}
                        onMouseLeave={() => (isHoveredRef.current = false)}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                    >
                        <div ref={trackRef} className={styles.marqueeTrack}>
                            {[...partners, ...partners].map(
                                (partner, index) => (
                                    <div
                                        className={styles.marqueeItem}
                                        key={`${partner.id}-${index}`}
                                    >
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={140}
                                            height={60}
                                            className="d-inline-block w-auto"
                                            draggable={false}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <TextAnimation
                        as="span"
                        className="title2 d-inline-block fw-medium text-uppercase text_animation"
                    >
                        Almost 20+ Partner we have
                    </TextAnimation>
                </div>
            </div>
        </div>
    );
}
