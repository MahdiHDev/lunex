// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

// const SlideInUp = ({
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     const rowRef = useRef<HTMLDivElement>(null);

//     useGSAP(
//         () => {
//             const boxes = rowRef.current?.querySelectorAll(
//                 ".single-service-box",
//             );
//             if (!boxes) return;

//             gsap.from(boxes, {
//                 y: 80,
//                 opacity: 0,
//                 duration: 0.8,
//                 ease: "power3.out",
//                 stagger: 0.15,
//                 scrollTrigger: {
//                     trigger: rowRef.current,
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                     // markers: true, // enable while debugging
//                 },
//             });
//         },
//         { scope: rowRef },
//     );

//     return (
//         <div className={className} ref={rowRef}>
//             {children}
//         </div>
//     );
// };

// export default SlideInUp;

// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

// const SlideInUp = ({
//     children,
//     className,
//     selector = ".single-service-box",
// }: {
//     children: React.ReactNode;
//     className?: string;
//     selector?: string;
// }) => {
//     const rowRef = useRef<HTMLDivElement>(null);

//     useGSAP(
//         () => {
//             const boxes = rowRef.current?.querySelectorAll(selector);

//             if (!boxes?.length) return;

//             gsap.from(boxes, {
//                 y: 80,
//                 opacity: 0,
//                 duration: 0.8,
//                 ease: "power3.out",
//                 stagger: 0.15,
//                 scrollTrigger: {
//                     trigger: rowRef.current,
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                     // markers: true,
//                 },
//             });
//         },
//         { scope: rowRef },
//     );

//     return (
//         <div className={className} ref={rowRef}>
//             {children}
//         </div>
//     );
// };

// export default SlideInUp;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SlideInUp = ({
    children,
    className,
    selector = ".single-service-box",
    individual = false,
}: {
    children: React.ReactNode;
    className?: string;
    selector?: string;
    individual?: boolean;
}) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const elements = rowRef.current?.querySelectorAll(selector);

            if (!elements?.length) return;

            /*
             * INDIVIDUAL MODE
             * Used for FAQ and sections where each item
             * should animate when it reaches the viewport.
             */
            if (individual) {
                elements.forEach((element) => {
                    gsap.fromTo(
                        element,
                        {
                            y: 80,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
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
             * This preserves your OLD service animation.
             */
            gsap.from(elements, {
                y: 80,
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

export default SlideInUp;
