"use client";

import { useState } from "react";
import SlideInUp from "../common/SlideInUp";

const TeamSection = () => {
    const [active, setActive] = useState(2);
    return (
        <SlideInUp selector=".slide">
            <div
                className="team_tabs_slides overflow-hidden d-md-flex"
                data-cues="slideInUp"
                data-group="team_list"
            >
                <div
                    className={`slide d-flex align-items-end ${active === 0 ? "active" : ""}`}
                    onClick={() => setActive(0)}
                    style={{
                        backgroundImage:
                            "url(assets/images/team-two/team6.jpg)",
                    }}
                >
                    <div className="team_content">
                        <h3>
                            <a href="team-details.html">Megan Wilson</a>
                        </h3>
                        <span className="d-block">Founder</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipis cing
                            elit. Fusce varius faucibus massa.
                        </p>
                        <div className="socials lh-1 d-flex align-items-center">
                            <a href="#" target="_blank">
                                <i className="ri-facebook-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-instagram-line" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-twitter-x-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-linkedin-fill" />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`slide d-flex align-items-end ${active === 1 ? "active" : ""}`}
                    onClick={() => setActive(1)}
                    style={{
                        backgroundImage:
                            "url(assets/images/team-two/team7.jpg)",
                    }}
                >
                    <div className="team_content">
                        <h3>
                            <a href="team-details.html">Zylen Orion</a>
                        </h3>
                        <span className="d-block">Co-founder</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipis cing
                            elit. Fusce varius faucibus massa.
                        </p>
                        <div className="socials lh-1 d-flex align-items-center">
                            <a href="#" target="_blank">
                                <i className="ri-facebook-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-instagram-line" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-twitter-x-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-linkedin-fill" />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`slide d-flex align-items-end ${active === 2 ? "active" : ""}`}
                    onClick={() => setActive(2)}
                    style={{
                        backgroundImage:
                            "url(assets/images/team-two/team8.jpg)",
                    }}
                >
                    <div className="team_content">
                        <h3>
                            <a href="team-details.html">Sadie Doyle</a>
                        </h3>
                        <span className="d-block">Project Manager</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipis cing
                            elit. Fusce varius faucibus massa.
                        </p>
                        <div className="socials lh-1 d-flex align-items-center">
                            <a href="#" target="_blank">
                                <i className="ri-facebook-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-instagram-line" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-twitter-x-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-linkedin-fill" />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`slide d-flex align-items-end ${active === 3 ? "active" : ""}`}
                    onClick={() => setActive(3)}
                    style={{
                        backgroundImage:
                            "url(assets/images/team-two/team9.jpg)",
                    }}
                >
                    <div className="team_content">
                        <h3>
                            <a href="team-details.html">Veyron Lorien</a>
                        </h3>
                        <span className="d-block">Manager</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipis cing
                            elit. Fusce varius faucibus massa.
                        </p>
                        <div className="socials lh-1 d-flex align-items-center">
                            <a href="#" target="_blank">
                                <i className="ri-facebook-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-instagram-line" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-twitter-x-fill" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="ri-linkedin-fill" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SlideInUp>
    );
};

export default TeamSection;
