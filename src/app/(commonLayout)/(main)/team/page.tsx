import ScrambleText from "@/components/common/ScrambleText";
import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div>
            <ScrambleText />
            {/* <Navbar /> */}
            <div>
                {/* Start Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Meet our <span>team</span>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Start Team Area */}
                <div className="team-area pt-150 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team1.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>David Wilson</h3>
                                            <span className="d-block">
                                                Content Strategist
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team2.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Sophia Martinez</h3>
                                            <span className="d-block">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team3.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>James Taylor</h3>
                                            <span className="d-block">
                                                Software Engineer
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team4.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Olivia White</h3>
                                            <span className="d-block">
                                                Graphic Designer
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team5.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Michael Davis</h3>
                                            <span className="d-block">
                                                Lead Developer
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-member">
                                    <img
                                        src="assets/images/teams/team6.jpg"
                                        alt="team-image"
                                    />
                                    <div className="content d-flex justify-content-between align-items-end">
                                        <div className="title">
                                            <h3>Daniel Taylor</h3>
                                            <span className="d-block">
                                                Product Manager
                                            </span>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-facebook-circle-fill" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-threads-line" />
                                            </a>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="d-inline-block"
                                            >
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team Area */}
            </div>
        </div>
    );
};

export default page;
