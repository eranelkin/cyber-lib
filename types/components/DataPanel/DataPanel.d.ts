import React from "react";
import "./data-panel.scss";
interface DataPanelProps {
    title?: any;
    children: any;
    textColor?: string;
    family?: string;
    bgColor?: string;
    textSize?: number | string;
    titleTextSize?: number | string;
    titleUpper?: boolean;
    titleWeight?: number;
    titleStyle?: React.CSSProperties;
    weight?: number;
    rightText?: string;
    rightTextClassName?: string;
    style?: React.CSSProperties;
    upper?: boolean;
}
declare const DataPanel: ({ title, titleTextSize, titleWeight, titleStyle, titleUpper, textColor, bgColor, textSize, weight, family, upper, rightText, style, rightTextClassName, children, }: DataPanelProps) => JSX.Element;
export default DataPanel;
