"use client";

import { useState } from "react";

// import images
import Image from "next/image";
import project5 from "public/assets/images/projects/project5.jpg";
import project6 from "public/assets/images/projects/project6.jpg";
import project7 from "public/assets/images/projects/project7.jpg";
import project8 from "public/assets/images/projects/project8.jpg";
import project9 from "public/assets/images/projects/project9.jpg";
import circel from "public/assets/images/shapes/circle.svg";

const description =
    "A complete brand refresh, elevating identity with modern design and messaging that connects with a global audience.";

const projects = [
    {
        title: "Digital Pulse",
        description,
    },
    {
        title: "Visual Impact",
        description,
    },
    {
        title: "Social Hub",
        description,
    },
    {
        title: "UI/UX Design",
        description,
    },
    {
        title: "Print Design",
        description,
    },
];

export default function ProjectCircle() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="projects-circle-list text-center position-relative">
            <Image
                src={circel}
                className="d-none d-lg-inline-block"
                alt="border-image"
            />
            <div className="images text-start">
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(0)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <Image src={project5} alt="project-image" />
                    <div className="text">
                        <h3>
                            <a href="work-single.html">Digital pulse</a>
                        </h3>
                        <p>
                            A complete brand refresh, elevating identity with
                            modern design and messaging that connects with a
                            global audience.
                        </p>
                        <a
                            href="work-single.html"
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <a
                        href="work-single.html"
                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                    />
                </div>
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(1)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <Image src={project6} alt="project-image" />
                    <div className="text">
                        <h3>
                            <a href="work-single.html">Visual impact</a>
                        </h3>
                        <p>
                            A complete brand refresh, elevating identity with
                            modern design and messaging that connects with a
                            global audience.
                        </p>
                        <a
                            href="work-single.html"
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <a
                        href="work-single.html"
                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                    />
                </div>
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(2)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <Image src={project7} alt="project-image" />
                    <div className="text">
                        <h3>
                            <a href="work-single.html">Social hub</a>
                        </h3>
                        <p>
                            A complete brand refresh, elevating identity with
                            modern design and messaging that connects with a
                            global audience.
                        </p>
                        <a
                            href="work-single.html"
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <a
                        href="work-single.html"
                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                    />
                </div>
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(3)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <Image src={project8} alt="project-image" />
                    <div className="text">
                        <h3>
                            <a href="work-single.html">UI/UX design</a>
                        </h3>
                        <p>
                            A complete brand refresh, elevating identity with
                            modern design and messaging that connects with a
                            global audience.
                        </p>
                        <a
                            href="work-single.html"
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <a
                        href="work-single.html"
                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                    />
                </div>
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(4)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <Image src={project9} alt="project-image" />
                    <div className="text">
                        <h3>
                            <a href="work-single.html">Print design</a>
                        </h3>
                        <p>
                            A complete brand refresh, elevating identity with
                            modern design and messaging that connects with a
                            global audience.
                        </p>
                        <a
                            href="work-single.html"
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <a
                        href="work-single.html"
                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                    />
                </div>
            </div>
            {/* <div className="contents text-start">
                <div className="item">
                    <h3>
                        <a href="work-single.html">Digital pulse</a>
                    </h3>
                    <p>
                        A complete brand refresh, elevating identity with modern
                        design and messaging that connects with a global
                        audience.
                    </p>
                    <a
                        href="work-single.html"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
                <div className="item">
                    <h3>
                        <a href="work-single.html">Visual impact</a>
                    </h3>
                    <p>
                        A complete brand refresh, elevating identity with modern
                        design and messaging that connects with a global
                        audience.
                    </p>
                    <a
                        href="work-single.html"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
                <div className="item">
                    <h3>
                        <a href="work-single.html">Social hub</a>
                    </h3>
                    <p>
                        A complete brand refresh, elevating identity with modern
                        design and messaging that connects with a global
                        audience.
                    </p>
                    <a
                        href="work-single.html"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
                <div className="item">
                    <h3>
                        <a href="work-single.html">UI/UX design</a>
                    </h3>
                    <p>
                        A complete brand refresh, elevating identity with modern
                        design and messaging that connects with a global
                        audience.
                    </p>
                    <a
                        href="work-single.html"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
                <div className="item">
                    <h3>
                        <a href="work-single.html">Print design</a>
                    </h3>
                    <p>
                        A complete brand refresh, elevating identity with modern
                        design and messaging that connects with a global
                        audience.
                    </p>
                    <a
                        href="work-single.html"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
            </div> */}
            <div className="contents text-start">
                <div className="item">
                    <h3>
                        <a href="work-single.html">
                            {projects[activeIndex].title}
                        </a>
                    </h3>

                    <p>{projects[activeIndex].description}</p>

                    <a
                        href="work-single"
                        className="link-btn d-flex align-items-center position-relative"
                    >
                        View Project
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
            </div>
        </div>
    );
}

// <div className="projects-circle-list">
//     <div className="images">
//         <Image
//             src={projects[activeIndex].image}
//             alt={projects[activeIndex].title}
//         />
//     </div>

//     <div className="contents">
//         {projects.map((project, index) => (
//             <div
//                 key={index}
//                 className={`item ${activeIndex === index ? "inline-block" : ""}`}
//                 onMouseEnter={() => setActiveIndex(index)}
//             >
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//             </div>
//         ))}
//     </div>
// </div>
