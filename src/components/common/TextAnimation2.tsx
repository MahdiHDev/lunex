"use client";

import { gsap } from "@/utils/gsap";
import React, { useEffect, useRef } from "react";

interface TextAnimationProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export default function TextAnimation2({
    children,
    className,
    as: Tag = "div",
}: TextAnimationProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const ctx = gsap.context(() => {
            // Only elements that should be animated
            const items = el.querySelectorAll(":scope > .text-animation-item");

            gsap.set(el, {
                perspective: 400,
            });

            gsap.from(items, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                },
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
            });
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <Tag ref={ref} className={className}>
            {children}
        </Tag>
    );
}
