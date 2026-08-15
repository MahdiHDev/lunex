"use client";

import { useState } from "react";

import Image from "next/image";
import googleIcon from "public/assets/images/icons/google.svg";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignUpForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data:", formData);
    };

    return (
        <div className="signup_area ptb-150">
            <div className="container">
                <div className="signup_form mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={formData.name}
                                className="form-control"
                                placeholder="Your name"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                value={formData.email}
                                className="form-control"
                                placeholder="Email address"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={formData.password}
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <a href="terms-conditions.html" className="fw-medium">
                            Terms of Use
                        </a>
                        <button
                            type="submit"
                            className="btn primary_btn d-block text-capitalize w-100"
                        >
                            Create Account
                        </button>
                        <div className="signin_with_others">
                            <button
                                className="d-block w-100 text-center border-0"
                                type="button"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <Image src={googleIcon} alt="google" />
                                    Or Sign Up with Google
                                </span>
                            </button>
                        </div>
                        <p className="text-center">
                            Already have an account?{" "}
                            <a href="signin.html" className="fw-medium">
                                Signin now
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
