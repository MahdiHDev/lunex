"use client";

import { useState } from "react";

// import images
import projecct5 from "public/assets/images/projects/project5.jpg";
import projecct6 from "public/assets/images/projects/project6.jpg";
import projecct7 from "public/assets/images/projects/project7.jpg";
import projecct8 from "public/assets/images/projects/project8.jpg";
import projecct9 from "public/assets/images/projects/project9.jpg";

const description =
    "A complete brand refresh, elevating identity with modern design and messaging that connects with a global audience.";

const projects = [
    {
        title: "Digital Pulse",
        image: projecct5,
        description,
    },
    {
        title: "Visual Impact",
        image: projecct6,
        description,
    },
    {
        title: "Social Hub",
        image: projecct7,
        description,
    },
    {
        title: "UI/UX Design",
        image: projecct8,
        description,
    },
    {
        title: "Print Design",
        image: projecct9,
        description,
    },
];

export default function ProjectCircle() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="projects-circle-list text-center position-relative">
            <img
                src="assets/images/shapes/circle.svg"
                className="d-none d-lg-inline-block"
                alt="border-image"
            />
            <div className="images text-start">
                <div
                    className="image"
                    onMouseEnter={() => setActiveIndex(0)}
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    <img
                        src="assets/images/projects/project5.jpg"
                        alt="project-image"
                    />
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
                    <img
                        src="assets/images/projects/project6.jpg"
                        alt="project-image"
                    />
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
                    <img
                        src="assets/images/projects/project7.jpg"
                        alt="project-image"
                    />
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
                    <img
                        src="assets/images/projects/project8.jpg"
                        alt="project-image"
                    />
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
                    <img
                        src="assets/images/projects/project9.jpg"
                        alt="project-image"
                    />
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
                        href="work-single.html"
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
