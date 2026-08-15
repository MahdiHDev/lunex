"use client";
import work1 from "public/assets/images/works/work1.jpg";
import work2 from "public/assets/images/works/work2.jpg";
import work3 from "public/assets/images/works/work3.jpg";
import work4 from "public/assets/images/works/work4.jpg";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Brand identity & web design",
        image: work1,
        categories: ["web-design"],
        description:
            "We craft unique brand identities and design visually striking websites that perfectly represent your brand.",
        tags: ["Branding", "Web Design", "UX/UI"],
    },
    {
        id: 2,
        title: "SaaS web development",
        image: work2,
        categories: ["brand-identity", "digital-marketing"],
        description:
            "We specialize in developing scalable and high-performance websites for SaaS businesses.",
        tags: ["SaaS", "Web", "Development"],
    },
    {
        id: 3,
        title: "Marketing web design",
        image: work3,
        categories: ["saas-solutions", "web-design"],
        description:
            "We create impactful and visually engaging websites tailored for marketing agencies.",
        tags: ["Marketing", "Web", "Solutions"],
    },
    {
        id: 4,
        title: "Agency web development",
        image: work4,
        categories: ["brand-identity", "digital-marketing"],
        description:
            "We build dynamic and responsive websites for digital agencies, focusing on creativity and functionality.",
        tags: ["Digital", "Innovation", "Design"],
    },
];

const WorksFilter = () => {
    const [activeFilter, setActiveFiler] = useState(0);

    return (
        <div className="works-area pb-150">
            <div className="container" data-cue="slideInUp">
                <div className="works-shorting-menu">
                    <button
                        className="filter mixitup-control-active"
                        data-filter="all"
                    >
                        All
                    </button>
                    <button className="filter" data-filter=".brand-identity">
                        Brand identity
                    </button>
                    <button className="filter" data-filter=".saas-solutions">
                        SaaS solutions
                    </button>
                    <button className="filter" data-filter=".web-design">
                        Web design
                    </button>
                    <button className="filter" data-filter=".digital-marketing">
                        Digital strategy
                    </button>
                </div>
                <div className="works-list works-shorting">
                    <div className="item mix web-design">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="title position-relative">
                                    <div className="number text-center rounded-circle">
                                        01
                                    </div>
                                    <h3 className="mb-0">
                                        <a href="work-single.html">
                                            Brand identity & web design
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image position-relative">
                                    <img
                                        src="assets/images/works/work1.jpg"
                                        alt="work-image"
                                    />
                                    <a
                                        href="work-single.html"
                                        className="link-btn text-center d-inline-block rounded-circle"
                                    >
                                        <img
                                            src="assets/images/icons/primary-right-top-arrow.svg"
                                            alt="right-top-arrow"
                                        />
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="content">
                                    <p>
                                        We craft unique brand identities and
                                        design visually striking websites that
                                        perfectly represent your brand.
                                    </p>
                                    <ul className="categories ps-0 mb-0 list-unstyled">
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Branding
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Web Design
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                UX/UI
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mix brand-identity digital-marketing">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="title position-relative">
                                    <div className="number text-center rounded-circle">
                                        02
                                    </div>
                                    <h3 className="mb-0">
                                        <a href="work-single.html">
                                            SaaS web development
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image position-relative">
                                    <img
                                        src="assets/images/works/work2.jpg"
                                        alt="work-image"
                                    />
                                    <a
                                        href="work-single.html"
                                        className="link-btn text-center d-inline-block rounded-circle"
                                    >
                                        <img
                                            src="assets/images/icons/primary-right-top-arrow.svg"
                                            alt="right-top-arrow"
                                        />
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="content">
                                    <p>
                                        We specialize in developing scalable and
                                        high-performance websites for SaaS
                                        businesses.
                                    </p>
                                    <ul className="categories ps-0 mb-0 list-unstyled">
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                SaaS
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Web
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Development
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mix saas-solutions web-design">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="title position-relative">
                                    <div className="number text-center rounded-circle">
                                        03
                                    </div>
                                    <h3 className="mb-0">
                                        <a href="work-single.html">
                                            Marketing web design
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image position-relative">
                                    <img
                                        src="assets/images/works/work3.jpg"
                                        alt="work-image"
                                    />
                                    <a
                                        href="work-single.html"
                                        className="link-btn text-center d-inline-block rounded-circle"
                                    >
                                        <img
                                            src="assets/images/icons/primary-right-top-arrow.svg"
                                            alt="right-top-arrow"
                                        />
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="content">
                                    <p>
                                        We create impactful and visually
                                        engaging websites tailored for marketing
                                        agencies.
                                    </p>
                                    <ul className="categories ps-0 mb-0 list-unstyled">
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Marketing
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Web
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Solutions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mix brand-identity digital-marketing">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="title position-relative">
                                    <div className="number text-center rounded-circle">
                                        04
                                    </div>
                                    <h3 className="mb-0">
                                        <a href="work-single.html">
                                            Agency web development
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image position-relative">
                                    <img
                                        src="assets/images/works/work4.jpg"
                                        alt="work-image"
                                    />
                                    <a
                                        href="work-single.html"
                                        className="link-btn text-center d-inline-block rounded-circle"
                                    >
                                        <img
                                            src="assets/images/icons/primary-right-top-arrow.svg"
                                            alt="right-top-arrow"
                                        />
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="content">
                                    <p>
                                        We build dynamic and responsive websites
                                        for digital agencies, focusing on
                                        creativity and functionality.
                                    </p>
                                    <ul className="categories ps-0 mb-0 list-unstyled">
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Digital
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Innovation
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a
                                                href="work-single.html"
                                                className="d-block"
                                            >
                                                Design
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-project-btn text-center">
                    <a
                        href="works.html"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <i className="ri-arrow-down-line" />
                        More Works
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorksFilter;
