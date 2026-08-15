import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import BlogCommentForm from "@/components/forms/BlogCommentForm";
import Image from "next/image";
import blogDetails1 from "public/assets/images/blogs/blog-details1.jpg";
import blogDetails2 from "public/assets/images/blogs/blog-details2.jpg";
import user1 from "public/assets/images/users/user1.jpg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Blog Details Page Banner Area */}
                <div className="blog-details-page-banner-area">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="title mx-auto text-center text-animation"
                        >
                            <span className="sub-title d-block">
                                Blog details
                            </span>
                            <h1 className="mb-0">
                                The power of storytelling{" "}
                                <span>in branding</span>
                            </h1>
                        </TextAnimation>
                        <SlideInUp selector=".content">
                            <div className="content" data-cue="slideInUp">
                                <h3>Growth</h3>
                                <Image
                                    src={blogDetails1}
                                    alt="blog-details-image"
                                />
                                <div className="info d-md-flex align-items-center justify-content-between">
                                    <div className="author d-flex align-items-center">
                                        <Image
                                            src={user1}
                                            className="rounded-circle"
                                            alt="user"
                                        />
                                        <div>
                                            <h3 className="fw-normal">
                                                <a href="blog.html">
                                                    Sarah Thompson
                                                </a>
                                            </h3>
                                            <span className="designation d-block">
                                                Author
                                            </span>
                                            <span className="date d-block">
                                                21 Mar 2025
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            href="#comments"
                                            className="comment d-inline-block"
                                        >
                                            02 comments
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Blog Details Page Banner Area */}
                {/* Start Blog Details Area */}
                <div className="blog-details-area pb-150 position-relative">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="blog-details-desc">
                                    <p>
                                        In this post, we explore the profound
                                        impact storytelling has on branding.
                                        Storytelling {`isn't`} just about
                                        crafting a narrative; {`it's`} about
                                        creating an emotional connection between
                                        your brand and your audience. By sharing
                                        compelling stories, brands can shape
                                        their identity, evoke emotions, and
                                        build trust with their customers. We’ll
                                        dive into how effective storytelling can
                                        differentiate a brand in a saturated
                                        market and make it more memorable,
                                        relatable, and impactful.
                                    </p>
                                    <hr />
                                    <h3>Key points:</h3>
                                    <p>
                                        Storytelling {`isn't`} just about
                                        crafting a narrative; {`it's`} about
                                        creating an emotional connection between
                                        your brand and your audience.
                                    </p>
                                    <ul className="features-list ps-0 list-unstyled">
                                        <li className="position-relative">
                                            Building emotional connections
                                        </li>
                                        <li className="position-relative">
                                            Differentiation in a competitive
                                            market
                                        </li>
                                        <li className="position-relative">
                                            Brand consistency
                                        </li>
                                    </ul>
                                    <h3>Takeaways:</h3>
                                    <p>
                                        Storytelling is more than just an art;
                                        it’s a strategic tool that enhances
                                        brand visibility and loyalty. A
                                        well-crafted brand story can build
                                        lasting emotional connections and
                                        influence customer behavior. Brands that
                                        tell authentic, relatable stories can
                                        stand out and maintain relevance in
                                        today’s competitive digital landscape.
                                    </p>
                                    <Image
                                        src={blogDetails2}
                                        alt="blog-details-image"
                                    />
                                    <h3>CTA (call to action)</h3>
                                    <p>
                                        Discover how storytelling can reshape
                                        your brand’s identity. Contact us for a
                                        consultation on crafting your brand’s
                                        unique story today!
                                    </p>
                                    <hr />
                                    <h3 id="content4">Conclusion</h3>
                                    <p>
                                        Storytelling is an incredibly powerful
                                        tool in branding. When done effectively,
                                        it can captivate your audience, evoke
                                        strong emotions, and foster loyalty. By
                                        crafting authentic, relatable
                                        narratives, brands can differentiate
                                        themselves in a crowded market and
                                        maintain a consistent, recognizable
                                        presence. The power of storytelling is
                                        not just about what you say, but how it
                                        resonates with your audience.
                                    </p>
                                </div>
                                <div className="comments-area" id="comments">
                                    <h3>02 comments</h3>
                                    <ul className="comments-list ps-0 mb-0 list-unstyled">
                                        <li className="comment-item">
                                            <div className="title position-relative">
                                                <h4>John Doe</h4>
                                                <span className="d-block">
                                                    20 Mar 2025
                                                </span>
                                            </div>
                                            <p>
                                                Great article! The impact of
                                                storytelling in branding is
                                                something many brands overlook.
                                                {`It's`} amazing how
                                                storytelling can build such an
                                                emotional connection with
                                                customers.
                                            </p>
                                        </li>
                                        <li className="comment-item">
                                            <div className="title position-relative">
                                                <h4>Sarah Lee</h4>
                                                <span className="d-block">
                                                    21 Mar 2025
                                                </span>
                                            </div>
                                            <p>
                                                Really insightful! I never
                                                realized how critical it is for
                                                a brand to have a strong,
                                                authentic narrative. Will
                                                definitely be incorporating this
                                                into our next campaign.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leave-a-comment-area">
                                    <h3>Leave a comment</h3>
                                    <BlogCommentForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Blog Details Area */}
            </div>
        </div>
    );
};

export default page;
