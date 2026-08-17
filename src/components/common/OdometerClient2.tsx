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
    const boxRef = useRef<HTMLDivElement>(null);

    // Keep digits stable
    const digits = String(count).split("").map(Number);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const columns = boxRef.current?.querySelectorAll<HTMLElement>(
                ".odometer-digit-inner",
            );

            if (!columns?.length) return;

            const trigger = ScrollTrigger.create({
                trigger: boxRef.current,
                start: "top 85%",
                once: true,

                onEnter: () => {
                    columns.forEach((column, index) => {
                        const targetDigit = digits[index];

                        gsap.to(column, {
                            y: `-${targetDigit * 10}%`,
                            duration: 0.8 + index * 0.1,
                            ease: "power2.out",
                        });
                    });
                },
            });

            return () => {
                trigger.kill();
            };
        }, boxRef);

        return () => ctx.revert();
    }, [count]);

    return (
        <div className="funfact-box text-center" ref={boxRef}>
            <div className="number fw-medium lh-1">
                <span className="odometer">
                    {digits.map((_, index) => (
                        <OdometerDigit key={index} digit={0} />
                    ))}
                </span>
                +
            </div>

            <span className="sub-title d-block">{label}</span>
        </div>
    );
}

export default function OdometerClient2() {
    return (
        <div className="funfacts-area pb-125">
            <div className="container">
                <span className="d-block funfacts-sub-title">
                    Completion milestone
                </span>

                <div className="funfacts-row d-flex justify-content-between">
                    {stats.map((stat) => (
                        <StatBox
                            key={stat.label}
                            count={stat.count}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
