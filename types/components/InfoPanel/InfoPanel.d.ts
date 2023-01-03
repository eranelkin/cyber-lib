import React from "react";
import "./info-panel.scss";
interface InfoPanelProps {
    width: number | string;
    title?: string;
    height?: number | string;
    textColor?: string;
    family?: string;
    bgColor?: string;
    textSize?: number | string;
    weight?: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
    upper?: boolean;
    borderRadius?: number | string;
}
declare const InfoPanel: ({ title, width, height, textColor, bgColor, textSize, weight, family, upper, style, borderRadius, children, }: InfoPanelProps) => JSX.Element;
export default InfoPanel;
