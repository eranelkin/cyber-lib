import React from "react";
interface LegendProps {
    name: string;
    value: number | string;
    color?: string;
}
interface VerticalListProps {
    title?: any;
    items: LegendProps[];
    isMultiColumns?: boolean;
    displayTotal?: boolean;
    displayAsLinks?: boolean;
    totalText?: string;
    isLegend?: boolean;
    itemClassName?: string;
    containerClassName?: string;
    formatType?: "%";
    upperTitle?: boolean;
    titleTextSize?: number | string;
    titleWeight?: number;
    linkHref?: string;
}
declare const VerticalList: React.FC<VerticalListProps>;
export default VerticalList;
