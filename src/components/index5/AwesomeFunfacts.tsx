import CounterNumber from "../common/CounterNumber";
import TextAnimation from "../common/TextAnimation";
import TextAnimation2 from "../common/TextAnimation2";

type Funfact = {
    id: number;
    value: number;
    suffix?: string;
    label: string;
};

const funfacts: Funfact[] = [
    { id: 1, value: 15, label: "Year Experience" },
    { id: 2, value: 25, suffix: "K", label: "+ Happy Customer" },
    { id: 3, value: 8, suffix: "K", label: "Project Completed" },
    { id: 4, value: 98, label: "Team Member" },
];

const description =
    "Gain access to a network of trusted recruitment agencies specializing in tech talent acquisition. Collaborate to find the perfect match for your team for a fixed price.";

export default function AwesomeFunfacts() {
    return (
        <div className="awesome_funfacts_area">
            <div className="container-fluid max_w_1905px">
                <div className="awesome_funfacts_inner">
                    <div className="section_title style_five">
                        <TextAnimation className="mb-0 text_animation">
                            Strategic Steps to Impactful Results
                        </TextAnimation>
                    </div>
                    <div className="border_bottom_style" />
                    <div className="awesome_funfacts_list">
                        {funfacts.map((fact) => (
                            <div className="item_box" key={fact.id}>
                                <div className="row align-items-center">
                                    <div className="col-xxl-8 col-lg-6">
                                        <div className="number position-relative">
                                            <div className="d-flex align-items-center">
                                                <h3 className="mb-0 lh-1">
                                                    <CounterNumber
                                                        value={fact.value}
                                                    />
                                                    {fact.suffix}
                                                </h3>
                                                <span className="sub_title d-block text-uppercase fw-medium">
                                                    {fact.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-6">
                                        <TextAnimation2 className="content text_animation">
                                            <p className="text-animation-item">
                                                {description}
                                            </p>
                                        </TextAnimation2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
