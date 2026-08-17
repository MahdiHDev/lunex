"use client";

import { useEffect, useState } from "react";

export default function useSticky(threshold = 100) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > threshold);
        };

        // Set initial state
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return isSticky;
}
