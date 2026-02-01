"use client";

import dynamic from "next/dynamic";

type OdometerClientProps = {
    value: number;
    className?: string;
};

const Odometer = dynamic(() => import("react-odometerjs"), {
    ssr: false,
    loading: () => <span>0</span>,
});

const OdometerClient = ({ value, className }: OdometerClientProps) => {
    return (
        <span className={className}>
            <Odometer value={value} />
        </span>
    );
};

export default OdometerClient;
