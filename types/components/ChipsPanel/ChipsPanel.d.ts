import React from "react";
import "./chipsPanel.scss";
interface ChipsPanelProps {
    data: any;
    style?: React.CSSProperties;
    title?: string;
    href?: string;
    displayAsLinks?: boolean;
}
declare const ChipsPanel: React.FC<ChipsPanelProps>;
export default ChipsPanel;
