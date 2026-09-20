"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SlideInDown = ({
    children,
    className,
    selector = ".single-service-box",
    individual = false,
    delay = 0.35,
}: {
    children: React.ReactNode;
    className?: string;
    selector?: string;
    individual?: boolean;
    delay?: number;
}) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const elements = rowRef.current?.querySelectorAll(selector);

            if (!elements?.length) return;

            /*
             * INDIVIDUAL MODE
             * Used for sections where each item
             * should animate when it reaches the viewport.
             */
            if (individual) {
                elements.forEach((element, index) => {
                    gsap.fromTo(
                        element,
                        {
                            y: -80,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            delay: index * delay,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                });

                return;
            }

            /*
             * GROUP MODE
             */
            gsap.from(elements, {
                y: -80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: rowRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        },
        {
            scope: rowRef,
        },
    );

    return (
        <div ref={rowRef} className={className}>
            {children}
        </div>
    );
};

export default SlideInDown;
