import React from 'react';
interface NAProps {
    variant?: string;
    weight?: number;
    textSize?: number | string;
    family?: string;
    style?: React.CSSProperties;
}
/**
 * NA Component
 * @param [variant] [string?] default = 'disabled' affect the font color
 * @param [weight] [number?] - optional
 * @param [textSize] [number?] - optional
 * @param [family] [number?] - optional, font-family
 * @param [style] [CSSProperties] - optional, addition style
 * @returns RiskIndicator JSX
 */
declare const NA: React.FC<NAProps>;
export default NA;
