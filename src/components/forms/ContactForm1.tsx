const ContactForm1 = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name *"
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your email"
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your company"
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group phone-number position-relative">
                        <select className="form-select" defaultValue="1">
                            <option value={1}>+1</option>
                            <option value={2}>+2</option>
                            <option value={3}>+3</option>
                            <option value={4}>+4</option>
                        </select>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <label className="d-block">Required Services *</label>
                        <select className="form-select" defaultValue={1}>
                            <option value={1}>Select</option>
                            <option value={2}>Web design</option>
                            <option value={3}>Branding &amp; identity</option>
                            <option value={4}>Digital marketing</option>
                            <option value={5}>SEO optimization</option>
                            <option value={6}>Social media management</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <label className="d-block">Estimated Budget *</label>
                        <select className="form-select" defaultValue={1}>
                            <option value={1}>Select</option>
                            <option value={2}>Under $1,000</option>
                            <option value={3}>$1,000 - $5,000</option>
                            <option value={4}>$5,000 - $10,000</option>
                            <option value={5}>$10,000 - $20,000</option>
                            <option value={6}>$20,000 - $50,000</option>
                            <option value={7}>Over $50,000</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <label className="d-block">Project brief *</label>
                        <textarea
                            cols={30}
                            rows={5}
                            className="form-control"
                            placeholder="Share more about your concept"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="btn-box d-md-flex align-items-center justify-content-between">
                        <button
                            type="button"
                            className="d-flex align-items-center"
                        >
                            <span>Submit Inquiry</span>
                            <i className="ri-arrow-right-up-line" />
                        </button>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="readAndAccept"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="readAndAccept"
                            >
                                By submitting this form, I agree to the terms
                                &amp; conditions.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm1;
