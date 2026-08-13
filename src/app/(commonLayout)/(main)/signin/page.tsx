import TextAnimation from "@/components/common/TextAnimation";
import SignInForm from "@/components/forms/SignInForm";

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
                                Signin to carry on your <span>journey</span>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                <SignInForm />
            </div>
        </div>
    );
};

export default page;
