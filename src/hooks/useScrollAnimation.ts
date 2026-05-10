import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useEffect, useRef } from "react";

export function useScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            },
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return ref;
}
