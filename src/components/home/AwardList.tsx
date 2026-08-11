"use client";

import Image from "next/image";
import SlideInUp from "../common/SlideInUp";

// image imports
import award1 from "public/assets/images/awards/award1.jpg";
import award2 from "public/assets/images/awards/award2.jpg";
import award3 from "public/assets/images/awards/award3.jpg";
import { useState } from "react";

const AwardList = () => {
    const [activeAward, setActiveAward] = useState("");

    return (
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-5">
                <div
                    className={`awards-list-image position-relative ${activeAward}`}
                >
                    <div className="awards-image text-center">
                        <Image src={award1} alt="awards-image" />
                    </div>
                    <div className="awards-image text-center">
                        <Image src={award2} alt="awards-image" />
                    </div>
                    <div className="awards-image text-center">
                        <Image src={award3} alt="awards-image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-7">
                <SlideInUp className="awards-list" selector=".single-award">
                    <div
                        className="single-award d-flex align-items-center justify-content-between position-relative"
                        onMouseEnter={() => setActiveAward("")}
                        onMouseLeave={() => setActiveAward("")}
                    >
                        <h3 className="mb-0">Maverick</h3>
                        <div className="number">07</div>
                        <a
                            href="careers.html"
                            target="_blank"
                            className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                        />
                    </div>
                    <div
                        className="single-award d-flex align-items-center justify-content-between position-relative"
                        onMouseEnter={() => setActiveAward("hovered2")}
                        onMouseLeave={() => setActiveAward("")}
                    >
                        <h3 className="mb-0">Champion</h3>
                        <div className="number">03</div>
                        <a
                            href="careers.html"
                            target="_blank"
                            className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                        />
                    </div>
                    <div
                        className="single-award d-flex align-items-center justify-content-between position-relative"
                        onMouseEnter={() => setActiveAward("hovered3")}
                        onMouseLeave={() => setActiveAward("")}
                    >
                        <h3 className="mb-0">Luminary</h3>
                        <div className="number">01</div>
                        <a
                            href="careers.html"
                            target="_blank"
                            className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                        />
                    </div>
                </SlideInUp>
            </div>
        </div>
    );
};

export default AwardList;
