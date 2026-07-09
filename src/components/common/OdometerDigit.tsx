"use client";

interface OdometerDigitProps {
    digit: number;
}

export default function OdometerDigit({ digit }: OdometerDigitProps) {
    return (
        <span className="odometer-digit">
            <span className="odometer-digit-inner">
                {Array.from({ length: 10 }, (_, i) => (
                    <span className="odometer-digit-num" key={i}>
                        {i}
                    </span>
                ))}
            </span>
            <style jsx>{`
                .odometer-digit {
                    display: inline-block;
                    height: 1em;
                    overflow: hidden;
                    width: 0.5em;
                    vertical-align: top;
                }
                .odometer-digit-inner {
                    display: flex;
                    flex-direction: column;
                }
                .odometer-digit-num {
                    height: 1em;
                    line-height: 1;
                    text-align: center;
                }
            `}</style>
        </span>
    );
}
