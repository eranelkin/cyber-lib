import React from "react";
import "./verticalItem.scss";
interface VerticalItemProps {
    name: string;
    value: number | string;
    isMultiColumns?: boolean;
    isLegend?: boolean;
    color?: string;
    className?: any;
    formatType?: "%";
}
declare const VerticalItem: React.FC<VerticalItemProps>;
export default VerticalItem;
