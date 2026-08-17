"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import SlideInUp from "../common/SlideInUp";
import TextAnimation from "../common/TextAnimation";

import Link from "next/link";
import project1 from "public/assets/images/projects/project1.jpg";
import project2 from "public/assets/images/projects/project2.jpg";
import project3 from "public/assets/images/projects/project3.jpg";
import project4 from "public/assets/images/projects/project4.jpg";

type Project = {
    number: string;
    title: string;
    description: string;
    image: StaticImageData | string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "Brand elevation strategy",
        description:
            "A comprehensive rebranding project aimed at boosting brand identity and increasing market presence through strategic design and messaging.",
        image: project1,
    },
    {
        number: "02",
        title: "High-impact ad campaign",
        description:
            "A targeted advertising campaign designed to maximize brand visibility and drive customer engagement through creative and impactful visuals.",
        image: project2,
    },
    {
        number: "03",
        title: "Engaging social media revamp",
        description:
            "A transformation of social media presence, focusing on creative content and effective strategies to increase engagement and build brand loyalty.",
        image: project3,
    },
    {
        number: "04",
        title: "Next-level web development",
        description:
            "Building modern, responsive websites with cutting-edge technology and a focus on functionality and design to ensure optimal user experience.",
        image: project4,
    },
];

export default function ProjectsArea() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="projects-area pb-150">
            <div className="container">
                <div className="dev-agency-section-title">
                    <div className="row align-items-end">
                        <div className="col-lg-7 col-md-12">
                            <div className="left-side">
                                <TextAnimation className="text-animation">
                                    Our works <span>gallery</span>
                                </TextAnimation>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="right-side">
                                <p>
                                    A glimpse into our creativity and
                                    expertise—explore the projects that define
                                    our commitment to innovation and excellence.
                                </p>
                                <a
                                    href="/works"
                                    className="default-btn style-two"
                                >
                                    All Works
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <SlideInUp selector=".projects-list">
                    <div className="projects-list" data-cue="slideInUp">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`project-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="title">
                                    <div className="number">
                                        {project.number}
                                    </div>
                                    <span>{project.title}</span>
                                </div>
                                <div className="details">
                                    <div className="row align-items-center">
                                        <div className="col-xl-7 col-lg-6 col-md-7">
                                            <div className="image text-center">
                                                <Image
                                                    src={project.image}
                                                    alt="project-image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-5">
                                            <div className="content">
                                                <div className="number">
                                                    {project.number}
                                                </div>
                                                <h3>
                                                    <a href="work-single.html">
                                                        {project.title}
                                                    </a>
                                                </h3>
                                                <p>{project.description}</p>
                                                <Link
                                                    href="work-single"
                                                    className="link-btn text-center d-inline-block rounded-circle position-relative"
                                                >
                                                    <i className="ri-arrow-right-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SlideInUp>
            </div>
        </div>
    );
}
