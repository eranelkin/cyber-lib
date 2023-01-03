import React from "react";
interface barsData {
    name: string;
    value: number;
}
interface BarsPanelProps {
    barsData: barsData[];
    title?: string;
    itemsClassName?: any;
}
declare const BarsPanel: React.FC<BarsPanelProps>;
export default BarsPanel;
