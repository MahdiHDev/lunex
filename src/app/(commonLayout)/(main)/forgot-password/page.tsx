import TextAnimation from "@/components/common/TextAnimation";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Forgot Password?
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Forgot Password Area */}
                <ForgotPasswordForm />
                {/* End Forgot Password Area */}
            </div>
        </div>
    );
};

export default page;
