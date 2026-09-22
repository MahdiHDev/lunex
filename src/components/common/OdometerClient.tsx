"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import OdometerDigit from "./OdometerDigit";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { count: 199, label: "Proud clients" },
    { count: 212, label: "Completed initiatives" },
    { count: 11, label: "Trophies" },
];

function StatBox({ count, label }: { count: number; label: string }) {
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
                        duration: 1.5 + i * 0.2,
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

            // Fallback: if the element is ALREADY within the trigger zone
            // at creation time (e.g. reload with scroll restored mid-page),
            // onEnter may never fire because no "crossing" event happens.
            // Check manually and fire once if so.
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
        <div className="box" ref={boxRef}>
            <div className="number lh-1">
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

export default function OdometerClient() {
    return (
        <div className="funfacts d-flex justify-content-between">
            {stats.map((stat) => (
                <StatBox
                    key={stat.label}
                    count={stat.count}
                    label={stat.label}
                />
            ))}
        </div>
    );
}
