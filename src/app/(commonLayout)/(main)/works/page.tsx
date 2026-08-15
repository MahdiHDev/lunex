"use client";

import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import type mixitup from "mixitup";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const filters = [
    { label: "All", value: "all" },
    { label: "Brand identity", value: ".brand-identity" },
    { label: "SaaS solutions", value: ".saas-solutions" },
    { label: "Web design", value: ".web-design" },
    { label: "Digital strategy", value: ".digital-marketing" },
];

const works = [
    {
        number: "01",
        title: "Brand identity & web design",
        href: "/work-single",
        image: "/assets/images/works/work1.jpg",
        description:
            "We craft unique brand identities and design visually striking websites that perfectly represent your brand.",
        tags: ["Branding", "Web Design", "UX/UI"],
        categoryClasses: "web-design",
    },
    {
        number: "02",
        title: "SaaS web development",
        href: "/work-single",
        image: "/assets/images/works/work2.jpg",
        description:
            "We specialize in developing scalable and high-performance websites for SaaS businesses.",
        tags: ["SaaS", "Web", "Development"],
        categoryClasses: "brand-identity digital-marketing",
    },
    {
        number: "03",
        title: "Marketing web design",
        href: "/work-single",
        image: "/assets/images/works/work3.jpg",
        description:
            "We create impactful and visually engaging websites tailored for marketing agencies.",
        tags: ["Marketing", "Web", "Solutions"],
        categoryClasses: "saas-solutions web-design",
    },
    {
        number: "04",
        title: "Agency web development",
        href: "/work-single",
        image: "/assets/images/works/work4.jpg",
        description:
            "We build dynamic and responsive websites for digital agencies, focusing on creativity and functionality.",
        tags: ["Digital", "Innovation", "Design"],
        categoryClasses: "brand-identity digital-marketing",
    },
];

export default function WorksPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mixerRef = useRef<ReturnType<typeof mixitup> | null>(null);

    // MixItUp directly manipulates the DOM nodes inside `.works-shorting`
    // (toggling display/animating them) — that has to happen after React has
    // mounted the static item list, client-side only, since the library
    // touches `document` as soon as it's invoked. We render every item once,
    // unfiltered, and let MixItUp own filtering/animation from here on —
    // React never re-renders this list, so the two never fight over the
    // same nodes.
    //
    // No `animation` overrides are passed below — MixItUp's own defaults
    // ("fade scale", 600ms, ease) are what the original static page used,
    // so leaving them unset is what makes this match it exactly.
    useEffect(() => {
        let cancelled = false;

        import("mixitup").then(({ default: mixitupFn }) => {
            if (cancelled || !containerRef.current) return;
            mixerRef.current = mixitupFn(containerRef.current, {
                selectors: {
                    target: ".mix",
                },
            });
        });

        return () => {
            cancelled = true;
            mixerRef.current?.destroy();
            mixerRef.current = null;
        };
    }, []);

    function handleFilter(
        value: string,
        e: React.MouseEvent<HTMLButtonElement>,
    ) {
        const buttons =
            e.currentTarget.parentElement?.querySelectorAll(".filter");
        buttons?.forEach((btn) =>
            btn.classList.remove("mixitup-control-active"),
        );
        e.currentTarget.classList.add("mixitup-control-active");
        mixerRef.current?.filter(value);
    }

    return (
        <div className="bg-f8f9fd">
            {/* Works Page Banner */}
            <div className="works-page-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="left-side">
                                <span className="sub-title d-block">
                                    Our works
                                </span>
                                <TextAnimation
                                    as="h1"
                                    className="mb-0 text-animation"
                                >
                                    Our recent <span>creations</span>
                                </TextAnimation>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="right-side">
                                <p>
                                    Discover our latest creations, where
                                    innovation and design excellence come
                                    together to deliver impactful solutions and
                                    drive success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Works list */}
            <div className="works-area pb-150">
                <SlideInUp selector=".container">
                    <div className="container" data-cue="slideInUp">
                        <div className="works-shorting-menu">
                            {filters.map((f, i) => (
                                <button
                                    key={f.value}
                                    type="button"
                                    className={`filter${i === 0 ? " mixitup-control-active" : ""}`}
                                    onClick={(e) => handleFilter(f.value, e)}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        <div
                            className="works-list works-shorting"
                            ref={containerRef}
                        >
                            {works.map((w) => (
                                <div
                                    className={`item mix ${w.categoryClasses}`}
                                    key={w.number}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-12">
                                            <div className="title position-relative">
                                                <div className="number text-center rounded-circle">
                                                    {w.number}
                                                </div>
                                                <h3 className="mb-0">
                                                    <Link href={w.href}>
                                                        {w.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="image position-relative">
                                                <Image
                                                    src={w.image}
                                                    alt="work-image"
                                                    width={640}
                                                    height={420}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                                <Link
                                                    href={w.href}
                                                    className="link-btn text-center d-inline-block rounded-circle"
                                                >
                                                    <Image
                                                        src="/assets/images/icons/primary-right-top-arrow.svg"
                                                        alt="right-top-arrow"
                                                        width={16}
                                                        height={16}
                                                    />
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12">
                                            <div className="content">
                                                <p>{w.description}</p>
                                                <ul className="categories ps-0 mb-0 list-unstyled">
                                                    {w.tags.map((tag) => (
                                                        <li
                                                            className="d-inline-block"
                                                            key={tag}
                                                        >
                                                            <Link
                                                                href={w.href}
                                                                className="d-block"
                                                            >
                                                                {tag}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="more-project-btn text-center">
                            <Link
                                href="/works"
                                className="d-flex align-items-center justify-content-center"
                            >
                                <i className="ri-arrow-down-line"></i>
                                More Works
                            </Link>
                        </div>
                    </div>
                </SlideInUp>
            </div>
        </div>
    );
}
