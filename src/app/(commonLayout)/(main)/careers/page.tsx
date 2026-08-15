import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";
import Link from "next/link";

// image imports
import Careers from "public/assets/images/careers.jpg";
import happyMoment from "public/assets/images/happy-moments/happy-moment1.jpg";
import happyMoment2 from "public/assets/images/happy-moments/happy-moment2.jpg";
import happyMoment3 from "public/assets/images/happy-moments/happy-moment3.jpg";
import accountability from "public/assets/images/icons/accountability.svg";
import adaptability from "public/assets/images/icons/adaptability.svg";
import collaboration from "public/assets/images/icons/collaboration.svg";
import empathy from "public/assets/images/icons/empathy.svg";
import excellence from "public/assets/images/icons/excellence.svg";
import growth from "public/assets/images/icons/growth.svg";
import innovation from "public/assets/images/icons/innovation.svg";
import pto from "public/assets/images/icons/pto.svg";
import team from "public/assets/images/icons/team.svg";
import whiteRightTopArrow from "public/assets/images/icons/white-right-top-arrow.svg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Career Page Banner Area */}
                <div className="career-page-banner-area">
                    <SlideInUp
                        className="container"
                        selector=".career-page-banner-area .row"
                    >
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <span className="sub-title d-block">
                                        Explore opportunities
                                    </span>
                                    <h1>
                                        Become part of <span>our team</span>
                                    </h1>
                                    <div className="funfacts d-md-flex align-items-center justify-content-between">
                                        <div className="funfact position-relative">
                                            <div className="number lh-1">
                                                128+
                                            </div>
                                            <span className="d-block">
                                                Creative professionals
                                            </span>
                                        </div>
                                        <p>
                                            Join our dynamic team of creative
                                            professionals &amp; contribute to
                                            groundbreaking projects that make an
                                            impact. Together, let’s achieve
                                            excellence &amp; drive success!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    <Image src={Careers} alt="careers-image" />
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Career Page Banner Area */}
                {/* Start Why Join Area */}
                <div className="why-join-area pt-150 pb-125">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-6">
                                    <div className="left-side">
                                        <TextAnimation as="h2">
                                            Why choose to{" "}
                                            <span className="text-primary">
                                                join Lunex
                                            </span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="right-side text-md-end top-0">
                                        <Link
                                            href="career-single"
                                            className="link-btn menu_link text-center d-inline-block rounded-circle"
                                        >
                                            <Image
                                                src={whiteRightTopArrow}
                                                alt="right-top-arrow"
                                            />
                                            <span className="menu_link-text">
                                                Grow with us
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".single-why-join-box">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-why-join-box">
                                        <div className="icon">
                                            <Image src={growth} alt="icon" />
                                        </div>
                                        <h3>Growing together</h3>
                                        <p>
                                            At Lunex, we believe in the power of
                                            collaboration &amp; continuous
                                            growth. Join us to thrive in a
                                            supportive, dynamic environment.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-why-join-box">
                                        <div className="icon">
                                            <Image src={team} alt="icon" />
                                        </div>
                                        <h3>Team growth</h3>
                                        <p>
                                            Grow your skills and career with
                                            Lunex, where we foster an
                                            environment of mutual success and
                                            professional development.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-why-join-box">
                                        <div className="icon">
                                            <Image src={pto} alt="icon" />
                                        </div>
                                        <h3>Growth mindset</h3>
                                        <p>
                                            Embrace the opportunity to evolve
                                            with Lunex, a place where growth is
                                            encouraged, and innovation is at the
                                            forefront.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Why Join Area */}
                {/* Start Jobs Area */}
                <div className="jobs-area ptb-150">
                    <div className="container">
                        <div className="creative-agency-section-title text-white">
                            <div className="left-side">
                                <TextAnimation className="text-animation">
                                    Open jobs <span>at Lunex</span>
                                </TextAnimation>
                            </div>
                        </div>
                        <SlideInUp selector=".item" individual>
                            <div className="jobs-list" data-cues="slideInUp">
                                <div className="item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="d-block title">
                                                2 open roles
                                            </span>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="content d-flex align-items-center">
                                                <div className="number text-center rounded-circle">
                                                    01
                                                </div>
                                                <h3 className="mb-0">
                                                    Innovation Architect
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="link-btn">
                                                <Link
                                                    href="career-single"
                                                    className="d-inline-block rounded-circle text-center position-relative"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="d-block title">
                                                3 open roles
                                            </span>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="content d-flex align-items-center">
                                                <div className="number text-center rounded-circle">
                                                    02
                                                </div>
                                                <h3 className="mb-0">
                                                    Digital Experience
                                                    Strategist
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="link-btn">
                                                <Link
                                                    href="career-single"
                                                    className="d-inline-block rounded-circle text-center position-relative"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="d-block title">
                                                1 open role
                                            </span>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="content d-flex align-items-center">
                                                <div className="number text-center rounded-circle">
                                                    03
                                                </div>
                                                <h3 className="mb-0">
                                                    Brand Storyteller
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="link-btn">
                                                <Link
                                                    href="career-single"
                                                    className="d-inline-block rounded-circle text-center position-relative"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="d-block title">
                                                4 open roles
                                            </span>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="content d-flex align-items-center">
                                                <div className="number text-center rounded-circle">
                                                    04
                                                </div>
                                                <h3 className="mb-0">
                                                    Creative Visionary
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="link-btn">
                                                <Link
                                                    href="career-single"
                                                    className="d-inline-block rounded-circle text-center position-relative"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Jobs Area */}
                {/* Start Values Area */}
                <div className="values-area pt-150">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="left-side">
                                <TextAnimation className="text-animation">
                                    Our fundamental{" "}
                                    <span className="text-primary">values</span>
                                </TextAnimation>
                            </div>
                        </div>
                        <SlideInUp selector=".single-value-item">
                            <div className="row" data-cues="slideInUp">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={innovation}
                                                alt="innovation-icon"
                                            />
                                        </div>
                                        <h3>Innovation</h3>
                                        <p>
                                            Embracing creativity and new ideas
                                            to drive progress.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={collaboration}
                                                alt="collaboration-icon"
                                            />
                                        </div>
                                        <h3>Collaboration</h3>
                                        <p>
                                            Working together to achieve
                                            collective success.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={excellence}
                                                alt="excellence-icon"
                                            />
                                        </div>
                                        <h3>Integrity</h3>
                                        <p>
                                            Acting with honesty and transparency
                                            in all we do.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={empathy}
                                                alt="empathy-icon"
                                            />
                                        </div>
                                        <h3>Excellence</h3>
                                        <p>
                                            Striving for the highest quality in
                                            everything we create.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={accountability}
                                                alt="accountability-icon"
                                            />
                                        </div>
                                        <h3>Customer Focus</h3>
                                        <p>
                                            Putting our clients&apos; needs and
                                            satisfaction at the forefront.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-value-item">
                                        <div className="icon">
                                            <Image
                                                src={adaptability}
                                                alt="adaptability-icon"
                                            />
                                        </div>
                                        <h3>Adaptability</h3>
                                        <p>
                                            Staying flexible and responsive to
                                            change and new challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Values Area */}
                {/* Start Happy Moment Area */}
                <div className="happy-moment-area pb-125">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="left-side">
                                <TextAnimation className="text-animation">
                                    Our joyful{" "}
                                    <span className="text-primary">
                                        moments
                                    </span>
                                </TextAnimation>
                            </div>
                        </div>
                        <SlideInUp selector=".single-happy-moment" individual>
                            <div className="row" data-cues="slideInUp">
                                <div className="col-12">
                                    <div className="single-happy-moment">
                                        <Image
                                            src={happyMoment}
                                            alt="happy-moment-image"
                                        />
                                        <span className="d-block">
                                            Joyful work moment
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-happy-moment">
                                        <Image
                                            src={happyMoment2}
                                            alt="happy-moment-image"
                                        />
                                        <span className="d-block">
                                            Lighthearted moment
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-happy-moment">
                                        <Image
                                            src={happyMoment3}
                                            alt="happy-moment-image"
                                        />
                                        <span className="d-block">
                                            Team adventure
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Happy Moment Area */}
            </div>
        </div>
    );
};

export default page;
