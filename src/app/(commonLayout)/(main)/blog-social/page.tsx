import BlogCategoryNav from "@/components/common/BlogCategoryNav";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Blog Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Category: {`'social'`}
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Blog Page Banner Area */}
                {/* Start Blog Area */}
                <div className="blog-area ptb-150">
                    <div className="container">
                        <BlogCategoryNav />
                        <SlideInUp selector=".main-blogs-list">
                            <div
                                className="main-blogs-list"
                                data-cues="slideInUp"
                            >
                                <div className="item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="image">
                                                <a
                                                    href="blog-single.html"
                                                    className="d-block"
                                                >
                                                    <img
                                                        src="assets/images/blogs/blog16.jpg"
                                                        alt="blog-image"
                                                    />
                                                </a>
                                                <div className="info d-flex align-items-center justify-content-between">
                                                    <div className="date d-flex align-items-center">
                                                        <a
                                                            href="blog-single.html"
                                                            className="comments d-block"
                                                        >
                                                            03 comments
                                                        </a>
                                                        <span className="d-block">
                                                            15 Jan 2025
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="blog-single.html"
                                                        className="category d-inline-block"
                                                    >
                                                        Social
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="content">
                                                <h2 className="fw-normal">
                                                    <a href="blog-single.html">
                                                        The importance of ux/ui
                                                        in building customer
                                                        trust
                                                    </a>
                                                </h2>
                                                <a
                                                    href="blog-single.html"
                                                    className="link-btn d-flex align-items-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Read More
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Blog Area */}
            </div>
        </div>
    );
};

export default page;
