import TextAnimation from "@/components/common/TextAnimation";
import SignUpForm from "@/components/forms/SignUpForm";

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
                                Signup to <span>Lunex</span>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Signup Area */}
                <SignUpForm />
                {/* End Signup Area */}
            </div>
        </div>
    );
};

export default page;
