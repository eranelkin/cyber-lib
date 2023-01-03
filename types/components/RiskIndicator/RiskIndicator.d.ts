import React from "react";
interface RiskIndicatorProps {
    type?: "ranks" | "legend";
    letter?: string;
    value?: string | number;
    size?: "b" | "m" | "s";
    color?: string;
}
/**
 * RiskIndicator Component
 * @param [value] [number] will be translated to risk letter.
 * @param [size] [string?: 'b' | 'm' | 's'] - optional, default 'm', Risk indicatore size
 * @returns RiskIndicator JSX
 */
declare const RiskIndicator: React.FC<RiskIndicatorProps>;
export default RiskIndicator;
