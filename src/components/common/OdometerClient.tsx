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
        const ctx = gsap.context(() => {
            const columns = boxRef.current?.querySelectorAll<HTMLElement>(
                ".odometer-digit-inner",
            );

            ScrollTrigger.create({
                trigger: boxRef.current,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    columns?.forEach((col, i) => {
                        const targetDigit = digits[i];
                        gsap.to(col, {
                            y: `-${targetDigit * 10}%`,
                            duration: 1.5 + i * 0.2,
                            ease: "power2.out",
                        });
                    });
                },
            });
        }, boxRef);

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
