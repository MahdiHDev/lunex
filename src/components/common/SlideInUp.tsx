"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SlideInUp = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const boxes = rowRef.current?.querySelectorAll(
                ".single-service-box",
            );
            if (!boxes) return;

            gsap.from(boxes, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: rowRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    // markers: true, // enable while debugging
                },
            });
        },
        { scope: rowRef },
    );

    return (
        <div className={className} ref={rowRef}>
            {children}
        </div>
    );
};

export default SlideInUp;
