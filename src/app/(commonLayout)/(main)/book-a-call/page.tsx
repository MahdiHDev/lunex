import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            {/* Start Book A Call Area */}
            <div className="book-call-area pb-150">
                <div className="container">
                    <div className="book-call-section-title">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="left-side">
                                    <span className="sub-title d-block">
                                        Book appointment
                                    </span>
                                    <TextAnimation
                                        as="h1"
                                        className="mb-0 text-animation"
                                    >
                                        Schedule a call <span>with us</span>
                                    </TextAnimation>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="right-side">
                                    <p>
                                        Book an appointment with us to discuss
                                        your goals, explore solutions, and start
                                        your journey toward success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-features-table table-responsive">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time slot 1</th>
                                    <th scope="col">Time slot 2</th>
                                    <th scope="col">Time slot 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td>10:00 AM - 11:00 AM</td>
                                    <td>2:00 PM - 3:00 PM</td>
                                    <td>4:00 PM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td>9:00 AM - 10:00 AM</td>
                                    <td>12:00 PM - 1:00 PM</td>
                                    <td>3:00 PM - 4:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>11:00 AM - 12:00 PM</td>
                                    <td>1:00 PM - 2:00 PM</td>
                                    <td>5:00 PM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td>10:00 AM - 11:00 AM</td>
                                    <td>2:00 PM - 3:00 PM</td>
                                    <td>4:00 PM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td>9:00 AM - 10:00 AM</td>
                                    <td>12:00 PM - 1:00 PM</td>
                                    <td>3:00 PM - 4:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday - Sunday</th>
                                    <td>Day off</td>
                                    <td>Day off</td>
                                    <td>Day off</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* End Book A Call Area */}
        </div>
    );
};

export default page;
