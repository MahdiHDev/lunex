"use client";

import { useState } from "react";

import Image from "next/image";
import googleIcon from "public/assets/images/icons/google.svg";

interface FormData {
    emailOrPhone: string;
    password: string;
    rememberMe: boolean;
}

const SignInForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        emailOrPhone: "",
        password: "",
        rememberMe: true,
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data:", formData);
    };

    return (
        <div className="signin_area ptb-150">
            <div className="container">
                <div className="signin_form mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email or phone number"
                                value={formData.emailOrPhone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        emailOrPhone: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div
                            className="form-group position-relative"
                            id="password_show_hide"
                        >
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="form-control"
                                id="passwordField"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <button
                                type="button"
                                className="show_hide_btn position-absolute bg-transparent border-0 p-0 top-50 translate-middle"
                                onClick={togglePasswordVisibility}
                            >
                                <i
                                    className={`${passwordVisible ? "ri-eye-line" : "ri-eye-off-line"} toggle_password`}
                                    id="togglePassword"
                                />
                            </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            rememberMe: e.target.checked,
                                        })
                                    }
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="forgot-password.html"
                                className="forgot_password_btn fw-medium"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="btn primary_btn d-block text-capitalize w-100"
                        >
                            Sign in
                        </button>
                        <div className="signin_with_others">
                            <button
                                className="d-block w-100 text-center border-0"
                                type="button"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <Image src={googleIcon} alt="google" />
                                    Or Sign In with Google
                                </span>
                            </button>
                        </div>
                        <p className="text-center">
                            Don&apos;t have an account?{" "}
                            <a href="signup.html" className="fw-medium">
                                Signup now
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
