// "use client";

// import { gsap, SplitText } from "@/utils/gsap";
// import React, { useEffect, useRef } from "react";

// interface TextAnimationProps {
//     children: React.ReactNode;
//     className?: string;
//     as?: React.ElementType;
// }

// export default function TextAnimation({
//     children,
//     className,
//     as: Tag = "h2",
// }: TextAnimationProps) {
//     const ref = useRef<HTMLHeadingElement>(null);

//     useEffect(() => {
//         if (!ref.current) return;

//         const split = new SplitText(ref.current, { type: "words,chars" });

//         gsap.from(split.chars, {
//             opacity: 0,
//             y: 50,
//             stagger: 0.03,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: ref.current,
//                 start: "top 85%",
//             },
//         });

//         return () => split.revert();
//     }, []);

//     return (
//         <Tag
//             ref={ref as unknown as React.RefObject<HTMLHeadingElement>}
//             className={className}
//         >
//             {children}
//         </Tag>
//     );
// }

"use client";

import { gsap, SplitText } from "@/utils/gsap";
import React, { useEffect, useRef } from "react";

interface TextAnimationProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export default function TextAnimation({
    children,
    className,
    as: Tag = "h2",
}: TextAnimationProps) {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(el, { type: "words, lines" });
        gsap.set(el, { perspective: 400 });
        itemSplitted.split({ type: "lines" });

        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });

        return () => {
            itemSplitted.revert();
            tl.kill();
        };
    }, []);

    return (
        <Tag
            ref={ref as unknown as React.RefObject<HTMLHeadingElement>}
            className={className}
        >
            {children}
        </Tag>
    );
}
