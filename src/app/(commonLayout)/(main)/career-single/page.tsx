import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";
import careerDetails from "public/assets/images/career-details.jpg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Career Details Page Banner Area */}
                <div className="career-details-page-banner-area">
                    <div className="container">
                        <div className="content">
                            <div className="row align-items-end">
                                <div className="col-lg-6 col-md-12">
                                    <div className="left-side">
                                        <TextAnimation
                                            as="h1"
                                            className="mb-0 text-animation"
                                        >
                                            Brand <span>Storyteller</span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="right-side d-md-flex justify-content-lg-end">
                                        <div className="item">
                                            <h3>Location</h3>
                                            <span className="d-block fw-medium">
                                                Parker Avenue, New York
                                            </span>
                                        </div>
                                        <div className="item">
                                            <h3>Job Type</h3>
                                            <span className="d-block fw-medium">
                                                Full time | Onsite
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".image">
                            <div className="image text-center">
                                <Image
                                    src={careerDetails}
                                    alt="career-details-image"
                                />
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Career Details Page Banner Area */}
                {/* Start Career Details Area */}
                <div className="career-details-area ptb-150">
                    <SlideInUp
                        className="container"
                        selector=".career-details-info, .career-details-desc"
                    >
                        <div className="row" data-cues="slideInUp">
                            <div className="col-lg-5 col-md-12">
                                <div className="career-details-info">
                                    <ul className="ps-0 mb-0 list-unstyled">
                                        <li>
                                            <span className="d-block">
                                                Experience
                                            </span>
                                            <h3 className="mb-0">
                                                2+ years of experience
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="d-block">
                                                Woking hours
                                            </span>
                                            <h3 className="mb-0">
                                                9:00 AM - 6:00 PM
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="d-block">
                                                Working days
                                            </span>
                                            <h3 className="mb-0">
                                                Weekly 5 days (sat to thu)
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="d-block">
                                                Salary
                                            </span>
                                            <h3 className="mb-0">
                                                $50k-70k (yearly)
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="d-block">
                                                Vacancy
                                            </span>
                                            <h3 className="mb-0">
                                                No of vacancies: 3
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="d-block">
                                                Deadline
                                            </span>
                                            <h3 className="mb-0">
                                                21 Mar 2025
                                            </h3>
                                        </li>
                                    </ul>
                                    <button type="button">
                                        Apply Now{" "}
                                        <i className="ri-arrow-right-up-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="career-details-desc">
                                    <div className="details">
                                        <h3>What you&apos;ll handle</h3>
                                        <ul className="ps-0 mb-0 list-unstyled">
                                            <li className="position-relative">
                                                Craft engaging stories that
                                                align with the brand’s vision
                                                and values.
                                            </li>
                                            <li className="position-relative">
                                                Write blog posts, website copy,
                                                and social media content.
                                            </li>
                                            <li className="position-relative">
                                                Conduct audience research to
                                                tailor stories effectively.
                                            </li>
                                            <li className="position-relative">
                                                Work closely with designers,
                                                marketers, and developers.
                                            </li>
                                            <li className="position-relative">
                                                Create engaging social media
                                                campaigns with storytelling
                                                elements.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="details">
                                        <h3>Requirements</h3>
                                        <p>
                                            Proficiency in creating compelling
                                            brand narratives, persuasive copy,
                                            and engaging content tailored for
                                            different platforms, including
                                            websites, social media, and
                                            marketing campaigns.
                                        </p>
                                        <p>
                                            Ability to develop innovative and
                                            emotionally resonant brand stories
                                            that capture audience attention,
                                            enhance brand identity, and drive
                                            meaningful connections.
                                        </p>
                                    </div>
                                    <div className="details">
                                        <h3>Academic requirements</h3>
                                        <p>
                                            Bachelor’s degree in Marketing,
                                            Communications, Journalism, or a
                                            related field.
                                        </p>
                                        <p>
                                            Proven coursework or certifications
                                            in storytelling, branding, or
                                            digital content strategy.
                                        </p>
                                    </div>
                                    <div className="details">
                                        <h3>Rewards &amp; advantages</h3>
                                        <p>
                                            Enjoy a range of exclusive rewards
                                            and advantages, from competitive
                                            salaries to professional growth
                                            opportunities, ensuring a fulfilling
                                            and balanced work experience.
                                        </p>
                                        <p>
                                            Benefit from a variety of perks,
                                            including attractive compensation
                                            packages, opportunities for career
                                            advancement, flexible work
                                            schedules, and a collaborative work
                                            culture that promotes creativity and
                                            work-life balance.
                                        </p>
                                    </div>
                                    <div className="details">
                                        <h3>Key duties</h3>
                                        <p>
                                            Manage brand storytelling
                                            initiatives, create compelling
                                            narratives, and ensure consistent
                                            messaging across all channels to
                                            engage target audiences effectively.
                                        </p>
                                        <p>
                                            Collaborate with marketing and
                                            design teams to develop creative
                                            content, drive brand awareness, and
                                            measure the success of storytelling
                                            campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Career Details Area */}
            </div>
        </div>
    );
};

export default page;
