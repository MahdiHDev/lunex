import OdometerClient from "../common/OdometerClient";

const BriefArea = () => {
    return (
        <div className="brief-area position-relative z-1 pb-150">
            <div className="container">
                <div className="brief-content">
                    <div className="title d-flex align-items-center">
                        <div className="number">01</div>
                        Introduction
                    </div>
                    <p className="on-scroll-font-color-change">
                        We specialize in crafting innovative brand experiences
                        that seamlessly blend creativity and strategy. Our team
                        is dedicated to inspiring audiences, driving engagement,
                        and fostering growth through tailored, impactful
                        solutions. 🚀
                    </p>
                    <div
                        className="funfacts d-flex justify-content-between"
                        data-cues="slideInUp"
                    >
                        <div className="box">
                            <div className="number lh-1">
                                {/* <span className="odometer" data-count={199}> */}
                                <OdometerClient value={200} />
                                {/* </span> */}+
                            </div>
                            <span className="sub-title d-block">
                                Proud clients
                            </span>
                        </div>
                        <div className="box">
                            <div className="number lh-1">
                                <span className="odometer" data-count={212}>
                                    00
                                </span>
                                +
                            </div>
                            <span className="sub-title d-block">
                                Completed initiatives
                            </span>
                        </div>
                        <div className="box">
                            <div className="number lh-1">
                                <span className="odometer" data-count={11}>
                                    00
                                </span>
                                +
                            </div>
                            <span className="sub-title d-block">Trophies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BriefArea;
