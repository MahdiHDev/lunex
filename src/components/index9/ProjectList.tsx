"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import SlideInUp from "../common/SlideInUp";

import project10 from "public/assets/images/projects/project10.jpg";
import project11 from "public/assets/images/projects/project11.jpg";
import project12 from "public/assets/images/projects/project12.jpg";
import project13 from "public/assets/images/projects/project13.jpg";

type Project = {
    number: string;
    title: string;
    description: string;
    image: StaticImageData | string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "Network security upgrade",
        description:
            "Improved defenses to protect enterprise networks from cyber attacks.",
        image: project10,
    },
    {
        number: "02",
        title: "Threat detection system",
        description:
            "Implemented real-time monitoring to identify and respond to threats quickly.",
        image: project11,
    },
    {
        number: "03",
        title: "Data protection enhancement",
        description:
            "Strengthened data encryption and compliance with industry standards.",
        image: project12,
    },
    {
        number: "04",
        title: "Incident response plan",
        description:
            "Developed rapid response strategies to minimize impact of security breaches.",
        image: project13,
    },
];

const ProjectList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SlideInUp selector=".projects-list">
            <div className="projects-list" data-cue="slideInUp">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="title">
                            <div className="number">{project.number}</div>
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
    );
};

export default ProjectList;
