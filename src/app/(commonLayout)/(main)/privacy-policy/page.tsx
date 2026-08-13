import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Privacy policy
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Start Privacy Policy Area */}
                <div className="privacy-policy-area ptb-150">
                    <div className="container">
                        <div className="privacy-policy-content">
                            <p>Effective date: Mar 23, 2025</p>
                            <p>
                                At <strong>Lunex</strong>, we respect your
                                privacy and are committed to protecting your
                                personal data. This privacy policy outlines how
                                we collect, use, and safeguard your information
                                when you visit our website, interact with our
                                services, or make use of our products.
                            </p>
                            <h4>Information we collect</h4>
                            <p>
                                We collect personal information that you provide
                                to us when you interact with our website,
                                including but not limited to:
                            </p>
                            <ul>
                                <li>
                                    <strong>
                                        Personal Identifiable Information (PII)
                                    </strong>{" "}
                                    such as your name, email address, phone
                                    number, etc.
                                </li>
                                <li>
                                    <strong>
                                        Non-personally identifiable information
                                    </strong>{" "}
                                    such as browser type, operating system,
                                    pages visited on our site, and time spent on
                                    each page.
                                </li>
                            </ul>
                            <h4>How we use your information</h4>
                            <p>
                                The information we collect may be used in the
                                following ways:
                            </p>
                            <ul>
                                <li>To provide and improve our services</li>
                                <li>
                                    To personalize your experience on our
                                    website
                                </li>
                                <li>
                                    To process your transactions or respond to
                                    customer service requests
                                </li>
                                <li>
                                    To send you updates, promotional offers, or
                                    newsletters (if you’ve opted in)
                                </li>
                            </ul>
                            <h4>Cookies and tracking technologies</h4>
                            <p>
                                We use cookies to enhance your user experience
                                and to collect information about your usage
                                patterns on our site. You can disable{" "}
                                <strong>cookies</strong> in your browser
                                settings, but please note that this may limit
                                some functionality of the website.
                            </p>
                            <h4>How we protect your information</h4>
                            <p>
                                We implement a variety of security measures to
                                maintain the safety of your personal information
                                when you place an order or enter, submit, or
                                access your personal information. We use
                                encryption technologies, secure servers, and
                                other security measures to safeguard your data.
                            </p>
                            <h4>Sharing your information</h4>
                            <p>
                                We do not sell, trade, or transfer your personal
                                information to third parties without your
                                consent, except in the following cases:
                            </p>
                            <ul>
                                <li>
                                    <strong>Service Providers:</strong> We may
                                    share your information with trusted
                                    third-party vendors who assist us in
                                    operating our website, conducting our
                                    business, or providing services to you.
                                </li>
                                <li>
                                    <strong>Legal Compliance:</strong> We may
                                    disclose your information to comply with
                                    legal obligations or protect our rights.
                                </li>
                            </ul>
                            <h4>Third-party links</h4>
                            <p>
                                Occasionally, our website may contain links to{" "}
                                <u>
                                    third-party <i>websites</i>
                                </u>
                                . These third-party sites have separate and
                                independent privacy policies. We are not
                                responsible for the content or practices of
                                these linked sites.
                            </p>
                            <h4>Your rights</h4>
                            <p>You have the right to:</p>
                            <ul>
                                <li>
                                    Access, update, or delete your personal
                                    information.
                                </li>
                                <li>
                                    Opt-out of marketing communications by
                                    following the unsubscribe instructions in
                                    any email you receive from us.
                                </li>
                                <li>
                                    Withdraw your consent to the collection of
                                    your information at any time.
                                </li>
                            </ul>
                            <h4>Children’s privacy</h4>
                            <p>
                                Our website is not intended for{" "}
                                <a href="index.html">children</a> under the age
                                of 13. We do not knowingly collect personal
                                information from children. If we become aware
                                that we have inadvertently collected personal
                                data from a child, we will take steps to delete
                                that information.
                            </p>
                            <h4>Changes to this privacy policy</h4>
                            <p>
                                We may update this privacy policy periodically.
                                Any changes will be posted on this page, and we
                                will update the effective date accordingly.
                            </p>
                            <h4>Contact us</h4>
                            <p>
                                If you have any questions regarding this privacy
                                policy, or if you wish to{" "}
                                <a href="#" target="_blank">
                                    exercise
                                </a>{" "}
                                your rights, please contact us at:
                            </p>
                            <h4>Lunex</h4>
                            <ul>
                                <li>
                                    Email:{" "}
                                    <a href="mailto:support@lunex.com">
                                        support@lunex.com
                                    </a>
                                </li>
                                <li>
                                    Phone:{" "}
                                    <a href="tel:+1(555)123-4567">
                                        +1 (555) 123-4567
                                    </a>
                                </li>
                                <li>
                                    Address: Parker Avenue, Kingsley Road, New
                                    York
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Privacy Policy Area */}
            </div>
        </div>
    );
};

export default page;
