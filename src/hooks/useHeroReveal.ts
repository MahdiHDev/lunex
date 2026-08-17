import gsap from "gsap";
import { useEffect } from "react";

export function useHeroReveal() {
    useEffect(() => {
        const targets = document.querySelectorAll<HTMLElement>(
            ".dev-agency-banner-content .h1 div span",
        );
        if (!targets.length) return;

        const tl = gsap.timeline({ delay: 0 });
        tl.to(targets, {
            duration: 0.5,
            y: 0,
            stagger: 0.3,
        });

        return () => {
            tl.kill();
        };
    }, []);
}
