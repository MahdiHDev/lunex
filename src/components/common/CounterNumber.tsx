"use client";

import { useEffect, useRef } from "react";

interface CounterNumberProps {
    value: number;
    className?: string;
    duration?: number;
}

export default function CounterNumber({
    value,
    className = "counter_number",
    duration = 2000,
}: CounterNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (!("IntersectionObserver" in window)) {
            el.innerText = String(value);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const startTime = performance.now();

                    function updateCounter(timestamp: number) {
                        if (!el) return;
                        const elapsed = timestamp - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        el.innerText = String(Math.floor(progress * value));
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    observer.unobserve(el);
                });
            },
            { threshold: 0.5 },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className={className}>
            0
        </span>
    );
}
