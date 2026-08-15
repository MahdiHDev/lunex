"use client";

import { useState } from "react";

interface FormData {
    comment: string;
    name: string;
    email: string;
    rememberMe: boolean;
}

const BlogCommentForm = () => {
    const [formData, setFormData] = useState<FormData>({
        comment: "",
        name: "",
        email: "",
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <label>Comment *</label>
                        <textarea
                            cols={30}
                            rows={5}
                            placeholder="Enter your comment here"
                            className="d-block w-100"
                            value={formData.comment}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    comment: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-none"
                            placeholder="Enter name *"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control rounded-0 shadow-none"
                            placeholder="Enter email address *"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <button type="submit" className="d-inline-block border-0">
                        Post a comment
                    </button>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="form-check mb-0">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="readAndAccept"
                            checked={formData.rememberMe}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    rememberMe: e.target.checked,
                                })
                            }
                        />
                        <label
                            className="form-check-label"
                            htmlFor="readAndAccept"
                        >
                            Remember my details for future comments
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BlogCommentForm;
