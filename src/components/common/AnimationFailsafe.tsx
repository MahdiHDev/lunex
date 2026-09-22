// components/common/AnimationFailsafe.tsx
"use client";

import gsap from "gsap";
import { useEffect } from "react";

export default function AnimationFailsafe() {
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const failsafe = setTimeout(() => {
            document
                .querySelectorAll<HTMLElement>(
                    "[data-animate], .funfact-box, .fade-in, .slide-in-up",
                )
                .forEach((el) => {
                    const opacity = getComputedStyle(el).opacity;
                    if (opacity === "0") {
                        gsap.set(el, {
                            opacity: 1,
                            y: 0,
                            clearProps: "transform",
                        });
                    }
                });
        }, 2000);

        return () => clearTimeout(failsafe);
    }, []);

    return null;
}
