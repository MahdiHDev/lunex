// "use client";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import OdometerDigit from "../common/OdometerDigit";
// import SlideInUp from "../common/SlideInUp";

// gsap.registerPlugin(ScrollTrigger);

// const stats = [
//     { count: 349, label: "Cybersecurity experts" },
//     { count: 198, label: "Global clients protected" },
//     { count: 247, label: "Threats neutralized daily" },
// ];

// function FunfactBox({ count, label }: { count: number; label: string }) {
//     const digits = String(count).split("").map(Number);
//     const boxRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const columns = boxRef.current?.querySelectorAll<HTMLElement>(
//                 ".odometer-digit-inner",
//             );

//             ScrollTrigger.create({
//                 trigger: boxRef.current,
//                 start: "top 85%",
//                 once: true,
//                 onEnter: () => {
//                     columns?.forEach((col, i) => {
//                         const targetDigit = digits[i];
//                         gsap.to(col, {
//                             y: `-${targetDigit * 10}%`,
//                             duration: 1.5 + i * 0.3,
//                             ease: "power3.out",
//                         });
//                     });
//                 },
//             });
//         }, boxRef);

//         return () => ctx.revert();
//     }, [digits]);

//     return (
//         <div className="funfact-box text-center style-two" ref={boxRef}>
//             <div className="number fw-medium lh-1">
//                 <span className="odometer">
//                     {digits.map((_, i) => (
//                         <OdometerDigit key={i} digit={0} />
//                     ))}
//                 </span>
//                 +
//             </div>
//             <span className="sub-title d-block">{label}</span>
//         </div>
//     );
// }

// export default function FunfactsSection() {
//     return (
//         <div className="funfacts-area pb-125">
//             <div className="container">
//                 <SlideInUp selector=".funfact-box">
//                     <div className="d-flex justify-content-between">
//                         {stats.map((stat) => (
//                             <FunfactBox
//                                 key={stat.label}
//                                 count={stat.count}
//                                 label={stat.label}
//                             />
//                         ))}
//                     </div>
//                 </SlideInUp>
//             </div>
//         </div>
//     );
// }

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import OdometerDigit from "../common/OdometerDigit";
import SlideInUp from "../common/SlideInUp";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { count: 349, label: "Cybersecurity experts" },
    { count: 198, label: "Global clients protected" },
    { count: 247, label: "Threats neutralized daily" },
];

function FunfactBox({ count, label }: { count: number; label: string }) {
    const digits = String(count).split("").map(Number);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const ctx = gsap.context(() => {
            const columns = boxRef.current?.querySelectorAll<HTMLElement>(
                ".odometer-digit-inner",
            );

            const playAnimation = () => {
                columns?.forEach((col, i) => {
                    const targetDigit = digits[i];
                    gsap.to(col, {
                        y: `-${targetDigit * 10}%`,
                        duration: 1.5 + i * 0.3,
                        ease: "power3.out",
                    });
                });
            };

            const trigger = ScrollTrigger.create({
                trigger: boxRef.current,
                start: "top 85%",
                once: true,
                onEnter: playAnimation,
            });

            // Fallback: element may already be inside the trigger zone
            // at creation time (e.g. reload restores scroll mid-page),
            // in which case onEnter never fires since no crossing
            // event happens. Check manually and fire once if so.
            requestAnimationFrame(() => {
                trigger.refresh();
                if (trigger.isActive) {
                    playAnimation();
                    trigger.kill();
                }
            });
        }, boxRef);

        document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, [digits]);

    return (
        <div className="funfact-box text-center style-two" ref={boxRef}>
            <div className="number fw-medium lh-1">
                <span className="odometer">
                    {digits.map((_, i) => (
                        <OdometerDigit key={i} digit={0} />
                    ))}
                </span>
                +
            </div>
            <span className="sub-title d-block">{label}</span>
        </div>
    );
}

export default function FunfactsSection() {
    return (
        <div className="funfacts-area pb-125">
            <div className="container">
                <SlideInUp selector=".funfact-box">
                    <div className="d-flex justify-content-between">
                        {stats.map((stat) => (
                            <FunfactBox
                                key={stat.label}
                                count={stat.count}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </SlideInUp>
            </div>
        </div>
    );
}
