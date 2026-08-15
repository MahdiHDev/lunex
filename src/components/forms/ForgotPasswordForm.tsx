"use client";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

const ForgotPasswordForm = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data:", formData);
    };

    return (
        <div className="forgot_password_area ptb-150">
            <div className="container">
                <div className="forgot_password_form mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="form-control"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => ({
                                    ...formData,
                                    password: e.target.value,
                                })}
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn primary_btn d-block text-capitalize w-100"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
